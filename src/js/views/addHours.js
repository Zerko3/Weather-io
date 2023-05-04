import Weather from '../view';

class AddHours extends Weather {
  constructor() {
    super();
  }

  _generateMarkupDayHours(data) {
    const desiredIndex = [3, 6, 9, 12, 15, 18, 21];
    data.hoursInAdayData.forEach((element, index) => {
      if (desiredIndex.includes(index)) {
        const htmlHours = `
        <div
        class="weather-section--weather__display--box--weather__day--box">
        <h2>${element.time.split(' ').slice(1)}</h2>
        <i class="fa-solid fa-cloud"></i>
        <div class="weather__day__morning--num--box">
          <span class="weather__day__morning--num">${
            element.temp_c
          }&#8451;</span>
        </div>
      </div>`;

        this._weekDaysElement.insertAdjacentHTML('afterbegin', htmlHours);
      }
    });
  }
}

export default new AddHours();
