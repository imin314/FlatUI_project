import DropDown from './DropDown';

const initDropDowns = function createInstances() {
  $('.js-drop-down').each((i, element) => new DropDown(element));
};

$(document).ready(initDropDowns);
