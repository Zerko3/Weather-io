import Weather from '../view.js';
class AddAsideMarkup extends Weather {
  _asideElement = document.querySelector('.aside__input--box');

  constructor() {
    super();
    let weatherData = Weather.getData(); // get the weather data from the Weather class
    // use the weather data to generate HTML, etc.
    console.log(weatherData);
  }

  userInput(handler) {
    this._userForm.addEventListener('submit', e => {
      e.preventDefault();
      handler(this.data);
    });
  }

  _renderText(weatherData) {
    console.log('Activated');

    const html = `
    <div class="aside__output--box__img--box">
          <div class="aside__output--box__img--box__icon">
            <i class="fa-regular fa-sun"></i>
          </div>
          <div class="aside__output--box__img--box__text">
            <p class="aside__output--box__img--box__text__degrees">${weatherData.humidity}&#8451;</p>
            <div class="aside__output--box__img--box__text__location--box">
              <span class="aside__output--box__img--box__text__day"
                >PLACEHOLDER</span
              >
              <span class="aside__output--box__img--box__text__hour"
                >${weatherData.temerature}</span
              >
            </div>

            <div class="aside__output--box__img--box__text__weather_info--box">
              <span
                class="aside__output--box__img--box__text__weather_info--box--weather-type-one"
              >
                <i class="fa-solid fa-cloud-sun"></i>Mostly sunny</span
              >
              <span
                class="aside__output--box__img--box__text__weather_info--box--weather--type-two"
                >Rain chance ${weatherData.daily_chance_of_rain}</span
              >
              <span
                class="aside__output--box__img--box__text__weather_info--box__location"
              >
                ${weatherData.location}
              </span>
            </div>
          </div>
        </div>
    `;

    this._asideElement.insertAdjacentHTML('afterbegin', html);
  }
}

export default new AddAsideMarkup();
