import Map from './Map';

document.addEventListener('DOMContentLoaded', () => {
  Map.loadGoogleMapsApi().then((googleMaps) => {
    $('.js-map').each((i, element) => new Map(element, googleMaps));
  });
});
