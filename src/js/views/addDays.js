import Weather from '../view';

class AddDaysOfTheWeek extends Weather {
  constructor() {
    super();
  }

  generateMarkupWeekDays(data) {
    data.daysInTheWeek.forEach((element, index) => {
      const html = `
        <div
        class="weather-section--weather__display--box--weather__day--box">
        <h2>${this._daysInAWeek[index]}</h2>
        <i class="fa-solid fa-cloud"></i>
        <div class="weather__day__morning--num--box">
          <span class="weather__day__morning--num">${element.day.mintemp_c}&#8451;</span>
          <span class="weather__day__evening--num">${element.day.maxtemp_c}&#8451;</span>
        </div>
      </div>`;
      this._weekDaysElement.insertAdjacentHTML('afterbegin', html);
    });
  }
}

export default new AddDaysOfTheWeek();
