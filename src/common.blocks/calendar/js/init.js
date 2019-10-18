import Calendar from './Calendar';

const initCalendars = function createInstances() {
  $('.js-calendar').each((i, element) => new Calendar(element));
};

$(document).ready(initCalendars);
