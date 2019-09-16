import $ from 'jquery';

class Map {
  constructor(domElement) {
    this.$domElement = $(domElement);
    this.mapContainer = this.$domElement.find('.js-map__container')[0];
    this.mapCenter = this._getInitialMapCenter();
    this._initialize();
  }

  _initialize() {
    $(window).on('load.map', () => this._initMap());
  }

  _initMap() {
    const initOptions = { center: this.mapCenter, zoom: 14 };
    const $pin = this.$domElement.find('.js-map__pin');
    const $search = this.$domElement.find('.js-map__search');

    this.map = new google.maps.Map(this.mapContainer, initOptions);
    this.infoWindow = new google.maps.InfoWindow();
    this._addMarker(this._getMainPinCenter(), Map.images[0], 'Meet us here!');
    this._locateUser();

    $pin.click(() => this._backToCenter());

    $search.click(() => this._showUserLocation());
  }

  _addMarker(location, image, title) {
    const marker = new google.maps.Marker({
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
    return new google.maps.LatLng(lat, lng);
  }

  _getMainPinCenter() {
    const mapCoords = this.mapContainer.dataset;
    const plat = Number(mapCoords.plat);
    const plng = Number(mapCoords.plng);
    return new google.maps.LatLng(plat, plng);
  }

  static get images() {
    return [
      {
        url: './assets/img/pins.png',
        size: new google.maps.Size(78, 78),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(39, 78),
      },
      {
        url: './assets/img/pins.png',
        size: new google.maps.Size(45, 78),
        origin: new google.maps.Point(78, 0),
        anchor: new google.maps.Point(22.5, 78),
      },
    ];
  }

  _locateUser() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          this.userMarker = this._addMarker(pos, Map.images[1], 'You are here');
        },
        () => this._handleLocationError(true),
      );
    } else {
      // Browser doesn't support Geolocation
      this._handleLocationError(false);
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

  _handleLocationError(browserHasGeolocation) {
    this.infoWindow.setPosition(this.map.getCenter());
    this.infoWindow.setContent(browserHasGeolocation
      ? 'Error: The Geolocation service failed.'
      : 'Error: Your browser doesn\'t support geolocation.');
  }
}

$('.js-map').each((i, element) => new Map(element));
