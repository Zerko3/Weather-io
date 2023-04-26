'use strict';

const _KEY = '61956096fab848c5a78133732232204';

export let state = {};

export const getWeatherApi = async function (id) {
  try {
    const data = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=${_KEY}&q=${id}&days=7&aqi=yes&alerts=no`
    );

    const json = await data.json();
    console.log(json);
    state = weatherObjectFunction(json);

    return weatherObjectFunction(json);
  } catch (error) {
    console.error(`${error} this is the error 🥲.`);
    throw error;
  }
};

export const weatherObjectFunction = function (json) {
  try {
    return {
      id: json.location.name,
      location: json.location.name,
      time: json.location.localtime,
      temerature: json.current.temp_c,
      weatherCondition: json.current.condition.text,
      dailyChanceOfRain: json.forecast.forecastday[0].day.daily_chance_of_rain,
      indexUV: json.current.uv,
      windStatus: json.current.wind_kph,
      sunRise: json.forecast.forecastday[0].astro.sunrise,
      sunSet: json.forecast.forecastday[0].astro.sunset,
      humidity: json.current.humidity,
      visibility: json.current.vis_km,
      airQuality: json.current.air_quality['us-epa-index'],
      daysInTheWeek: json.forecast.forecastday,
    };
  } catch (error) {
    console.error(error, `HEREEEEEEEEEEEEEE`);
    throw error;
  }
};
