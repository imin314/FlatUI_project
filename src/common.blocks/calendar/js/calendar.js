import 'jquery-ui/ui/widgets/datepicker';

class Calendar {
  constructor(domElement) {
    this._initialize(domElement);
  }

  _initialize(domElement) {
    $(document).ready(() => {
      this.$calendar = $(domElement);
      this._prependDayContainer();
      
      const settings = this._generateCalendarSettings();
      this.$calendar.datepicker(settings);
      
      this._updateDayText(this.$calendar.datepicker('getDate'));
    });
  }

  _generateCalendarSettings() {
    const settings = {
      firstDay: 1,
      prevText: '',
      nextText: '',
      showOtherMonths: true,
      dayNamesMin: [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ],
      onChangeMonthYear: (y, m) => this._handleMonthChange(y, m),
      onSelect: (date) => this._updateDayText(date),
    };

    return settings;
  }

  _prependDayContainer() {
    const $dayContainer = $('<div></div>', { class: 'calendar__day-container' });
    this.$dayText = $('<span></span>', {
      class: 'calendar__day-text',
      type: 'text',
      disabled: 'disabled',
    });
    $dayContainer.prepend(this.$dayText);
    
    this.$calendar.prepend($dayContainer);

    return this;
  }

  _appendButtonPane() {
    const $buttonPane = $('<div></div>', { class: 'calendar__button-pane' });
    this.$button = $('<button></button>', {
      class: 'calendar__today-button',
      type: 'button',
    });
    $buttonPane.append(this.$button);
    
  }

  _updateDayText(value) {
    const date = new Date(value);
    this.$dayText.text(date.getDate());

    return this;
  }

  _handleMonthChange(year, month) {
    const newDate = `${month}/1/${year}`;
    this.$calendar.datepicker('setDate', newDate);
    this._updateDayText(newDate);

    return this;
  }
}

$('.js-calendar').each((i, element) => new Calendar(element));
