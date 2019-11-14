import Map from './Map';

const initMaps = function createInstances() {
  Map.loadGoogleMapsApi().then((googleMaps) => {
    $('.js-map').each((i, element) => new Map(element, googleMaps));
  });
};

$(document).ready(initMaps);
