import bind from 'bind-decorator';

const loadGoogleMapsApi = require('load-google-maps-api');
const pinImg = require('../img/pins.png');

class Map {
  constructor(domElement, googleMaps) {
    this.googleMaps = googleMaps;
    this._initialize(domElement);
  }

  static loadGoogleMapsApi() {
    return loadGoogleMapsApi({
      key: 'AIzaSyB0GpB2Y8XOyVrs-stxlE0I4yR_rAaEyjU',
    });
  }

  _initialize(domElement) {
    this
      ._findElements(domElement)
      ._loadImages()
      ._initMap();
  }

  _findElements(domElement) {
    const $domElement = $(domElement);
    this.$footerButton = $domElement.find('.js-map__button');
    this.$mapContainer = $domElement.find('.js-map__container');
    return this;
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
    return this;
  }

  _initMap() {
    this.mapCenter = this._getInitialMapCenter();
    const initOptions = { center: this.mapCenter, zoom: 14 };
    this.map = new this.googleMaps.Map(this.$mapContainer[0], initOptions);
    this.infoWindow = new this.googleMaps.InfoWindow();
    this._addMarker(this._getMainPinCenter(), this.images[0], 'Meet us here!');
    this._locateUser();

    this.$footerButton
      .on('click.map', this._handleFooterButtonClick)
      .on('keypress.map', this._handleFooterButtonKeyPress);

    return this;
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
    const mapCoords = this.$mapContainer[0].dataset;
    const lat = Number(mapCoords.lat);
    const lng = Number(mapCoords.lng);
    return new this.googleMaps.LatLng(lat, lng);
  }

  _getMainPinCenter() {
    const mapCoords = this.$mapContainer[0].dataset;
    const plat = Number(mapCoords.plat);
    const plng = Number(mapCoords.plng);
    return new this.googleMaps.LatLng(plat, plng);
  }

  _locateUser() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this._handlePositionSuccess,
        this._handlePositionError,
      );
    } else {
      this._handleLocationError();
    }
  }

  @bind
  _handlePositionSuccess(position) {
    const pos = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    };
    this.userMarker = this._addMarker(pos, this.images[1], 'You are here');
  }

  @bind
  _handlePositionError() {
    this.infoWindow.setPosition(this.map.getCenter());
    this.infoWindow.setContent('Error: The Geolocation service failed.');
  }

  @bind
  _handleFooterButtonClick(event) {
    const $target = $(event.currentTarget);
    if ($target.hasClass('js-map__button_type_search')) {
      this._handleSearchButtonClick();
    } else if ($target.hasClass('js-map__button_type_pin')) {
      this._handlePinButtonClick();
    }
    $target.blur();
  }

  @bind
  _handleFooterButtonKeyPress(event) {
    if (event.which === 13) {
      $(event.target).trigger('click');
    }
  }

  _handleSearchButtonClick() {
    if (this.userMarker) this.map.panTo(this.userMarker.getPosition());
    this.infoWindow.open(this.map);
  }

  _handlePinButtonClick() {
    this.map.panTo(this.mapCenter);
    if (this.infoWindow) this.infoWindow.close();
  }
}

export default Map;
