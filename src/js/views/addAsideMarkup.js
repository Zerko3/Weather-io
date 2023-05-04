import Weather from '../view.js';
class AddAsideMarkup extends Weather {
  constructor() {
    super();
  }

  userInput(handler) {
    this._userForm.addEventListener('submit', e => {
      e.preventDefault();
      handler(this.data);
    });
  }

  _renderText(data) {
    const html = `
    <div class="aside__output--box__img--box">
          <div class="aside__output--box__img--box__icon">
            <i class="fa-regular fa-sun"></i>
          </div>
          <div class="aside__output--box__img--box__text">
            <p class="aside__output--box__img--box__text__degrees">${
              data.temerature
            }&#8451;</p>
            <div class="aside__output--box__img--box__text__location--box">
              <span class="aside__output--box__img--box__text__day"
                >${this._daysInAWeek[this._date.getDay()]}</span
              >
              <span class="aside__output--box__img--box__text__hour"
                >${data.time.split(' ').slice(1)}</span
              >
            </div>

            <div class="aside__output--box__img--box__text__weather_info--box">
              <span
                class="aside__output--box__img--box__text__weather_info--box--weather-type-one"
              >
                <i class="fa-solid fa-cloud-sun"></i>${data.tipeOfWeather}</span
              >
              <span
                class="aside__output--box__img--box__text__weather_info--box--weather--type-two"
                >Rain chance ${data.dailyChanceOfRain}</span
              >
              <span
                class="aside__output--box__img--box__text__weather_info--box__location"
              >
                ${data.location}
              </span>
            </div>
          </div>
        </div>
    `;

    this._asideElement.insertAdjacentHTML('afterbegin', html);
  }
}

export default new AddAsideMarkup();
