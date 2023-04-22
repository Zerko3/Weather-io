'use strict';

const _KEY = '61956096fab848c5a78133732232204';

export const getWeatherApi = async function (location, days) {
  const data = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=${_KEY}&q=${location}&days=${days}&aqi=no&alerts=no`
  );
  const json = await data.json();

  return json;
};
