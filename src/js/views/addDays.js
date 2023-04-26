import Weather from '../view';

class AddDaysOfTheWeek extends Weather {
  _weekDaysElement = document.querySelector(
    '.weather-section--weather__display--box'
  );

  constructor() {
    super();
  }

  generateMarkupWeekDays(data) {
    const html = `
    <div
    class="weather-section--weather__display--box--weather__day--box">
    <h2>Monday</h2>
    <i class="fa-solid fa-cloud"></i>
    <div class="weather__day__morning--num--box">
      <span class="weather__day__morning--num">${data.daysInTheWeek[1].day.mintemp_c}&#8451;</span>
      <span class="weather__day__evening--num">${data.daysInTheWeek[1].day.maxtemp_c}&#8451;</span>
    </div>
  </div>

  <div
  class="weather-section--weather__display--box--weather__day--box">
  <h2>Tuesday</h2>
  <i class="fa-solid fa-cloud"></i>
  <div class="weather__day__morning--num--box">
    <span class="weather__day__morning--num">${data.daysInTheWeek[2].day.mintemp_c}&#8451;</span>
    <span class="weather__day__evening--num">${data.daysInTheWeek[2].day.maxtemp_c}&#8451;</span>
  </div>
</div>
<div
  class="weather-section--weather__display--box--weather__day--box">
  <h2>Wednesday</h2>
  <i class="fa-solid fa-cloud"></i>
  <div class="weather__day__morning--num--box">
    <span class="weather__day__morning--num">${data.daysInTheWeek[3].day.mintemp_c}&#8451;</span>
    <span class="weather__day__evening--num">${data.daysInTheWeek[3].day.maxtemp_c}&#8451;</span>
  </div>
</div>
<div
  class="weather-section--weather__display--box--weather__day--box">
  <h2>Thursday</h2>
  <i class="fa-solid fa-cloud"></i>
  <div class="weather__day__morning--num--box">
  <span class="weather__day__morning--num">${data.daysInTheWeek[4].day.mintemp_c}&#8451;</span>
  <span class="weather__day__evening--num">${data.daysInTheWeek[4].day.maxtemp_c}&#8451;</span>
  </div>
</div>
<div
  class="weather-section--weather__display--box--weather__day--box">
  <h2>Friday</h2>
  <i class="fa-solid fa-cloud"></i>
  <div class="weather__day__morning--num--box">
  <span class="weather__day__morning--num">${data.daysInTheWeek[5].day.mintemp_c}&#8451;</span>
  <span class="weather__day__evening--num">${data.daysInTheWeek[5].day.maxtemp_c}&#8451;</span>
  </div>
</div>
<div
  class="weather-section--weather__display--box--weather__day--box">
  <h2>Saturday</h2>
  <i class="fa-solid fa-cloud"></i>
  <div class="weather__day__morning--num--box">
  <span class="weather__day__morning--num">${data.daysInTheWeek[6].day.mintemp_c}&#8451;</span>
  <span class="weather__day__evening--num">${data.daysInTheWeek[6].day.maxtemp_c}&#8451;</span>
  </div>
</div>
<div
  class="weather-section--weather__display--box--weather__day--box">
  <h2>Sunday</h2>
  <i class="fa-solid fa-cloud"></i>
  <div class="weather__day__morning--num--box">
  <span class="weather__day__morning--num">${data.daysInTheWeek[0].day.mintemp_c}&#8451;</span>
  <span class="weather__day__evening--num">${data.daysInTheWeek[0].day.maxtemp_c}&#8451;</span>
  </div>
</div>
    `;

    this._weekDaysElement.insertAdjacentHTML('afterbegin', html);
  }
}

export default new AddDaysOfTheWeek();
