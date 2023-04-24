'use strict';

import * as model from './model.js';

console.log(model.getWeatherApi('London', 1));
console.log(model.state);

// TODO:
// 1. Class kateri prejme input usera in calla API v modelu
// 2. Pridobi podatke od modela in calla Class v View da rendera HTML

// DOM ELEMENTS

const userInputField = document.querySelector(
  '.aside__input--box__user--input'
);
