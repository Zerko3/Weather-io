import Weather from '../view.js';

class WeatherHighlights extends Weather {
  constructor() {
    super();
  }

  generateHighlightsMarkup(data) {
    const html = `
      <h2 class="heading--primary">Today's highlights</h2>  
      <div class="weather-section--weather__highlights--box">
        <div class="weather-highlight--box">
          <h3>UV index</h3>
          <i class="fa-solid fa-temperature-low"></i>
          <span>${data.indexUV}</span>
        </div>
        <div class="weather-highlight--box">
          <h3>Wind Status</h3>
          <i class="fa-solid fa-wind"></i>
          <span>${data.windStatus} km/h</span>
        </div>
        <div class="weather-highlight--box">
          <h3>Sunrise & Sunset</h3>
          <div class="weather-highlight--box__inner-flex">
            <i class="fa-regular fa-sun"></i> <span>${data.sunRise}</span>
          </div>

        <div class="weather-highlight--box__inner-flex">
          <i class="fa-regular fa-moon"></i> <span>
          ${data.sunSet}</span>
        </div>
      </div>
      <div class="weather-highlight--box">
        <h3>Humidity</h3>
        <i class="fa-solid fa-temperature-low"></i>
        <span>${data.humidity}%</span>
      </div>
      <div class="weather-highlight--box">
        <h3>Visibility</h3>
        <i class="fa-solid fa-mountain"></i>
        <span>${data.visibility}km</span>
      </div>
      <div class="weather-highlight--box">
        <h3>Air Quality</h3>
        <i class="fa-solid fa-temperature-low"></i>
        <span>${data.airQuality}</span>
      </div>
    </div>
      `;

    this._parentElementHighlights.insertAdjacentHTML('afterbegin', html);
  }
}

export default new WeatherHighlights();
