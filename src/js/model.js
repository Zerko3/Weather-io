'use strict';

import * as helpers from './helpers.js';

// global object with the valid data from the API call.
export let state = {};
const _KEY = '61956096fab848c5a78133732232204';
/**
 *
 * @param {*} id
 * @description The function awaits the API call and a user input in from on an ID.
 * @returns an object with the valid data from the API call. Catches and throws an error.
 * @author Žan
 */
export const getWeatherApi = async function (id) {
  try {
    const data = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=${_KEY}&q=${id}&days=7&aqi=yes&alerts=no`
    );

    const json = await data.json();

    state = weatherObjectFunction(json);

    addToLocalStorage(state);

    return weatherObjectFunction(json);
  } catch (error) {
    console.error(error, `There is an error happening in the API call.`);
    throw error;
  }
};

/**
 *
 * @param {*} json
 * @description the function is called by the getWeatherApi and formats an object.
 * @returns an object called state. The object is globaly avalible in the source code.
 * @author Žan
 */
export const weatherObjectFunction = function (json) {
  try {
    return {
      id: json.location.name,
      location: json.location.name,
      tipeOfWeather: json.current.condition.text,
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
      hoursInAdayData: json.forecast.forecastday[0].hour,
    };
  } catch (error) {
    console.error(
      error,
      `There is an error happening in the creation of the state.`
    );
    throw error;
  }
};

/**
 * @param {object} state
 * @description This function sets the localstorage.
 * @author Žan
 */
export const addToLocalStorage = function () {
  localStorage.setItem('location', JSON.stringify(state));
};
