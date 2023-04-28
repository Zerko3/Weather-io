import Weather from '../view';

class AddHours extends Weather {
  _weekDaysElement = document.querySelector(
    '.weather-section--weather__display--box'
  );
  constructor() {
    super();
  }

  _generateMarkupDayHours(data) {
    const htmlHours = `
    <div
    class="weather-section--weather__display--box--weather__day--box">
    <h2>${data.hoursInAdayData[3].time.split(' ').slice(1)}</h2>
    <i class="fa-solid fa-cloud"></i>
    <div class="weather__day__morning--num--box">
      <span class="weather__day__morning--num">${
        data.hoursInAdayData[3].temp_c
      }&#8451;</span>
    </div>
  </div>

  <div
  class="weather-section--weather__display--box--weather__day--box">
  <h2>${data.hoursInAdayData[6].time.split(' ').slice(1)}</h2>
  <i class="fa-solid fa-cloud"></i>
  <div class="weather__day__morning--num--box">
    <span class="weather__day__morning--num">${
      data.hoursInAdayData[6].temp_c
    }&#8451;</span>
  </div>
</div>
<div
  class="weather-section--weather__display--box--weather__day--box">
  <h2>${data.hoursInAdayData[9].time.split(' ').slice(1)}</h2>
  <i class="fa-solid fa-cloud"></i>
  <div class="weather__day__morning--num--box">
    <span class="weather__day__morning--num">${
      data.hoursInAdayData[9].temp_c
    }&#8451;</span>
  </div>
</div>
<div
  class="weather-section--weather__display--box--weather__day--box">
  <h2>${data.hoursInAdayData[12].time.split(' ').slice(1)}</h2>
  <i class="fa-solid fa-cloud"></i>
  <div class="weather__day__morning--num--box">
  <span class="weather__day__morning--num">${
    data.hoursInAdayData[12].temp_c
  }&#8451;</span>
  </div>
</div>
<div
  class="weather-section--weather__display--box--weather__day--box">
  <h2>${data.hoursInAdayData[15].time.split(' ').slice(1)}</h2>
  <i class="fa-solid fa-cloud"></i>
  <div class="weather__day__morning--num--box">
  <span class="weather__day__morning--num">${
    data.hoursInAdayData[15].temp_c
  }&#8451;</span>
  </div>
</div>
<div
  class="weather-section--weather__display--box--weather__day--box">
  <h2>${data.hoursInAdayData[18].time.split(' ').slice(1)}</h2>
  <i class="fa-solid fa-cloud"></i>
  <div class="weather__day__morning--num--box">
  <span class="weather__day__morning--num">${
    data.hoursInAdayData[18].temp_c
  }&#8451;</span>
  </div>
</div>
<div
  class="weather-section--weather__display--box--weather__day--box">
  <h2>${data.hoursInAdayData[21].time.split(' ').slice(1)}</h2>
  <i class="fa-solid fa-cloud"></i>
  <div class="weather__day__morning--num--box">
  <span class="weather__day__morning--num">${
    data.hoursInAdayData[21].temp_c
  }&#8451;</span>
  </div>
</div>
    `;

    this._weekDaysElement.insertAdjacentHTML('afterbegin', htmlHours);
  }
}

export default new AddHours();
