import 'jquery-ui/ui/widgets/datepicker';

class Calendar {
  constructor(domElement) {
    this._initialize(domElement);
  }

  _initialize(domElement) {
    $(document).ready(() => {
      this._findElements(domElement);
      const settings = this._generateCalendarSettings();
      this.$calendar.datepicker(settings);
    });
  }

  _findElements(domElement) {
    const $calendar = $(domElement);
    this.$calendar = $calendar;
  }

  _generateCalendarSettings() {
    const settings = {
      showButtonPanel: true,
      firstDate: 1,
      prevText: '',
      nextText: '',
      showOtherMonths: true,
      dayNamesMin: [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ],
    };

    return settings;
  }
}

$('.js-calendar').each((i, element) => new Calendar(element));
