const loadGoogleMapsApi = require('load-google-maps-api');
const pinImg = require('../img/pins.png');

class Map {
  constructor(domElement, googleMaps) {
    this.$domElement = $(domElement);
    this.googleMaps = googleMaps;
    this.mapContainer = this.$domElement.find('.js-map__container')[0];
    this.mapCenter = this._getInitialMapCenter();
    this._initialize();
  }

  static loadGoogleMapsApi() {
    return loadGoogleMapsApi({
      key: 'AIzaSyB0GpB2Y8XOyVrs-stxlE0I4yR_rAaEyjU',
    });
  }

  _initialize() {
    $(window).on('load.map', () => {
      this._loadImages();
      this._initMap();
    });
  }

  _loadImages() {
    this.images = [
      {
        url: './assets/img/pins.png',
        size: new this.googleMaps.Size(78, 78),
        origin: new this.googleMaps.Point(0, 0),
        anchor: new this.googleMaps.Point(39, 78),
      },
      {
        url: './assets/img/pins.png',
        size: new this.googleMaps.Size(45, 78),
        origin: new this.googleMaps.Point(78, 0),
        anchor: new this.googleMaps.Point(22.5, 78),
      },
    ];
  }

  _initMap() {
    const initOptions = { center: this.mapCenter, zoom: 14 };
    const $pin = this.$domElement.find('.js-map__pin');
    const $search = this.$domElement.find('.js-map__search');
    this.map = new this.googleMaps.Map(this.mapContainer, initOptions);
    this.infoWindow = new this.googleMaps.InfoWindow();
    this._addMarker(this._getMainPinCenter(), this.images[0], 'Meet us here!');
    this._locateUser();

    $pin
      .on('click.map', e => this._handlePinClick(e))
      .on('keypress.map', e => this._handleEnterPress(e));
    $search
      .on('click.map', e => this._handleSearchClick(e))
      .on('keypress.map', e => this._handleEnterPress(e));
  }

  _addMarker(location, image, title) {
    const marker = new this.googleMaps.Marker({
      position: location,
      map: this.map,
      icon: image,
      title,
    });
    return marker;
  }

  _getInitialMapCenter() {
    const mapCoords = this.mapContainer.dataset;
    const lat = Number(mapCoords.lat);
    const lng = Number(mapCoords.lng);
    return new this.googleMaps.LatLng(lat, lng);
  }

  _getMainPinCenter() {
    const mapCoords = this.mapContainer.dataset;
    const plat = Number(mapCoords.plat);
    const plng = Number(mapCoords.plng);
    return new this.googleMaps.LatLng(plat, plng);
  }

  _locateUser() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          this.userMarker = this._addMarker(pos, this.images[1], 'You are here');
        },
        () => this._handleLocationError(true),
      );
    } else {
      // Browser doesn't support Geolocation
      this._handleLocationError(false);
    }
  }

  _handleLocationError(browserHasGeolocation) {
    this.infoWindow.setPosition(this.map.getCenter());
    this.infoWindow.setContent(browserHasGeolocation
      ? 'Error: The Geolocation service failed.'
      : 'Error: Your browser doesn\'t support geolocation.');
  }

  _handlePinClick(event) {
    this._backToCenter();
    $(event.target).blur();
  }

  _handleSearchClick(event) {
    this._showUserLocation();
    $(event.target).blur();
  }

  _handleEnterPress(event) {
    if (event.which === 13) {
      $(event.target).trigger('click');
    }
  }

  _backToCenter() {
    this.map.panTo(this.mapCenter);
    if (this.infoWindow) this.infoWindow.close();
  }

  _showUserLocation() {
    if (this.userMarker) this.map.panTo(this.userMarker.getPosition());
    this.infoWindow.open(this.map);
  }
}

export default Map;
