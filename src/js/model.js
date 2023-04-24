'use strict';

const _KEY = '61956096fab848c5a78133732232204';

export const state = {
  weatherObject: {},
};

export const weatherObjectFunction = function (json) {
  return {
    location: json.location.name,
    weatherCondition: json.current.condition.text,
    dailyChanceOfRain: json.forecast.forecastday[0].day.daily_chance_of_rain,
    indexUV: json.current.uv,
    windStatus: json.current.wind_kph,
    sunRise: json.forecast.forecastday[0].astro.sunrise,
    sunSet: json.forecast.forecastday[0].astro.sunset,
    humidity: json.current.humidity,
    visibility: json.current.vis_km,
    airQuality: json.current.air_quality['us-epa-index'],
  };
};

export const getWeatherApi = async function (location, days) {
  try {
    const data = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=${_KEY}&q=${location}&days=${days}&aqi=yes&alerts=no`
    );
    const json = await data.json();

    state.weatherData = weatherObjectFunction(json);
  } catch (error) {
    console.error(`${error} this is the error 🥲.`);
  }
};
