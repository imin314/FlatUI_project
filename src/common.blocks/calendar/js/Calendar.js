import bind from 'bind-decorator';
import 'jquery-ui/ui/widgets/datepicker';

class Calendar {
  constructor(domElement) {
    this._initialize(domElement);
  }

  _initialize(domElement) {
    this.$calendar = $(domElement);

    const settings = this._generateCalendarSettings();
    this.$calendar.datepicker(settings);

    this
      ._prependDayContainer()
      ._appendButtonPane();
  }

  _generateCalendarSettings() {
    const settings = {
      firstDay: 1,
      prevText: '',
      nextText: '',
      showOtherMonths: true,
      dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      onChangeMonthYear: this._handleCalendarChangeMonthYear,
      onSelect: this._handleCalendarSelect,
    };

    return settings;
  }

  _prependDayContainer() {
    const $dayContainer = $('<div></div>', { class: 'calendar__day-container' });
    const currentDay = this.$calendar.datepicker('getDate');
    this.$dayText = $('<span></span>', {
      class: 'calendar__day-text',
      type: 'text',
      disabled: 'disabled',
    });
    this.$dayText.text(currentDay.getDate());
    $dayContainer.prepend(this.$dayText);

    this.$calendar.prepend($dayContainer);

    return this;
  }

  _appendButtonPane() {
    const $buttonPane = $('<div></div>', { class: 'calendar__button-pane' });
    this.$todayButton = $('<button></button>', {
      class: 'calendar__today-button',
      type: 'button',
    });
    this.$todayButton
      .text('today')
      .on('click.calendar', this._handleTodayButtonClick);

    $buttonPane.append(this.$todayButton);
    this.$calendar.append($buttonPane);

    return this;
  }

  @bind
  _handleCalendarSelect(value) {
    const date = new Date(value);
    this.$dayText.text(date.getDate());

    return this;
  }

  @bind
  _handleCalendarChangeMonthYear(year, month, instance) {
    const isBackFromOtherMonth = instance.selectedMonth !== instance.currentMonth;
    const isBackFromOtherYear = instance.selectedYear !== instance.currentYear;
    if (isBackFromOtherMonth || isBackFromOtherYear) {
      const newDate = `${month}/1/${year}`;
      this.$calendar.datepicker('setDate', newDate);
      this._updateDayText(newDate);
    }
    return this;
  }

  @bind
  _handleTodayButtonClick() {
    const today = new Date();
    this.$calendar.datepicker('setDate', today);
    this._updateDayText(today);
    this.$todayButton.blur();

    return this;
  }
}

export default Calendar;
