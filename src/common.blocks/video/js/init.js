import Video from './Video';

const initVideos = function createInstances() {
  $('.js-video').each((i, element) => new Video(element));
};

$(document).ready(initVideos);
