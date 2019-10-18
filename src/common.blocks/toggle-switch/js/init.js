import ToggleSwitch from './ToggleSwitch';

const initToggleSwitches = function createInstances() {
  $('.js-toggle-switch').each((i, element) => new ToggleSwitch(element));
};

$(document).ready(initToggleSwitches);
