import Map from './map';

document.addEventListener('DOMContentLoaded', () => {
  Map.loadGoogleMapsApi().then((googleMaps) => {
    $('.js-map').each((i, element) => new Map(element, googleMaps));
  });
});
