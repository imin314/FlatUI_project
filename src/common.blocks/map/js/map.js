class Map {
	constructor(domElement) {
		this.domElement = $(domElement);
		this.namespace = this.domElement[0].className;
		this.mapContainer = this.getMapContainer();
		this.mapCenter = this.getInitialMapCenter();
		this.initialize();
	}

	static get images(){
		return [
				{
					url: './assets/img/pins.png',
					size: new google.maps.Size(78,78),
					origin: new google.maps.Point(0, 0),
					anchor: new google.maps.Point(39, 78)
				},
				{
					url: './assets/img/pins.png',
					size: new google.maps.Size(45,78),
					origin: new google.maps.Point(78, 0),
					anchor: new google.maps.Point(22.5, 78)
				}
			];
	}

	addMarker(location, image, title) {
		var marker = new google.maps.Marker({
			position: location,
			map: this.map,
			icon: image,
			title: title
		});
		return marker;
	}

	getMapContainer(){
		return this.domElement.find(`.${this.namespace}__container`);
	}

	getInitialMapCenter() {
		return new google.maps.LatLng(parseFloat(this.mapContainer.attr("data-lat")), parseFloat(this.mapContainer.attr("data-lng")));
	}

	getMainPinCenter() {
		return new google.maps.LatLng(parseFloat(this.mapContainer.attr("data-plat")), parseFloat(this.mapContainer.attr("data-plng")));
	}

	backToCenter() {
		this.map.panTo(this.mapCenter);
		if (this.infoWindow) this.infoWindow.close();
	}

	showUserLocation() {
		if (this.userMarker) this.map.panTo(this.userMarker.getPosition());
		this.infoWindow.open(this.map);
	}

	locateUser() {
		var that = this;
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(function(position) {
				var pos = {
					lat: position.coords.latitude,
					lng: position.coords.longitude
				};
				that.userMarker = that.addMarker(pos, Map.images[1], "You are here");
				}, function() {
					that.handleLocationError(true);
				}
			);
			} else {
				// Browser doesn't support Geolocation
				that.handleLocationError(false);
			}
	}
	
	handleLocationError(browserHasGeolocation) {
		this.infoWindow.setPosition(this.map.getCenter());
		this.infoWindow.setContent(browserHasGeolocation ?
			'Error: The Geolocation service failed.' :
			'Error: Your browser doesn\'t support geolocation.');
	}

	initMap() {
		var that = this;
		var initOptions = { center: this.mapCenter, zoom: 14 };
		this.map = new google.maps.Map(this.mapContainer[0], initOptions);
		this.addMarker(this.getMainPinCenter(), Map.images[0], "Meet us here!");
		this.infoWindow = new google.maps.InfoWindow;
		this.locateUser();

		this.domElement.find(`.${this.namespace}__pin`).click(function(){
			that.backToCenter();
		});

		this.domElement.find(`.${this.namespace}__search`).click(function(){
			that.showUserLocation();	
		});
	}

	initialize() {
		$(window).on('load', () => {
    		this.initMap();
    	});
	}
}

$('.map').each(function() {
	new Map(this);
});
