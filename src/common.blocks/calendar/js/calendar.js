import $ from 'jquery';
import './dcalendar.picker';

class Calendar {
  constructor(domElement) {
    this.domElement = domElement;
    this._initialize();
  }

  _initialize() {
    $(document).ready(() => {
      $(this.domElement).dcalendar();
    });
  }
}

$('.js-calendar').each((i, element) => new Calendar(element));
