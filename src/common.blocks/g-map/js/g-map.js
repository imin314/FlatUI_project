/*
function initMap() {
  var map = new google.maps.Map(document.getElementByClassName('g-map'), {
	center: {lat: 37.791795, lng: },
    zoom: 6
  });
  // the other code, irrelevant
}

window.initMap = initMap;
*/
var map, infoWindow;

var images = [
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
]

var centerMarker;

window.initialize = function(_id) {
		var mapContainer = $('#'+_id);
		//var mapCenter = {lat: 37.791095, lng: -122.415075};
		var mapCenter = new google.maps.LatLng(parseFloat(mapContainer.attr("data-lat")), parseFloat(mapContainer.attr("data-lng")));
		var pinCenter = new google.maps.LatLng(parseFloat(mapContainer.attr("data-plat")), parseFloat(mapContainer.attr("data-plng")));
		map = new google.maps.Map(document.getElementById(_id), {center: mapCenter, zoom:14});
		centerMarker = addMarker(pinCenter, map, images[0], "Meet us here!");
		infoWindow = new google.maps.InfoWindow;
	  }

      // Adds a marker to the map.
      function addMarker(_location, _map, _image, _title) {
        var marker = new google.maps.Marker({
          position: _location,
		  map: _map,
		  icon: _image,
		  title: _title
		});
		return marker;
      }

window.backToCenter = function (){
	map.panTo(centerMarker.getPosition());
}

window.locateUser = function (){
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position) {
			var pos = {
				lat: position.coords.latitude,
				lng: position.coords.longitude
			  };
			addMarker(pos, map, images[1], "You are here");
			map.setCenter(pos);
			}, function() {
				handleLocationError(true, infoWindow, map.getCenter());
			  });
			} else {
			  // Browser doesn't support Geolocation
			  handleLocationError(false, infoWindow, map.getCenter());
			}
		  }

	function handleLocationError(browserHasGeolocation, infoWindow, pos) {
			infoWindow.setPosition(pos);
			infoWindow.setContent(browserHasGeolocation ?
								  'Error: The Geolocation service failed.' :
								  'Error: Your browser doesn\'t support geolocation.');
			infoWindow.open(map);
		  }     