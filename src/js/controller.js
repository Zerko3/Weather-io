'use strict';

import * as model from './model.js';
import weather from './view.js';
import addAsideMarkup from './views/addAsideMarkup.js';

// DOM ELEMENTS

const _parentElement = document.querySelector(
  '.weather-section--weather__display--box'
);

const _userForm = document.querySelector('.user__input');

// FUNCTION

// FUNCTION USER INPUT

const userInputFunction = async function () {
  const id = document.querySelector('.aside__input--box__user--input').value;

  if (id === '') return;
  await model.getWeatherApi(id);
  weather.setData(model.state); // set the weather data as a static property of the Weather class
  console.log(model.state);
};

const constrolAddWeatherData = function () {
  addAsideMarkup._renderText(model.state);
};

// TODO:
// 1. Error handling
const renderErrorFunction = function () {
  const _errorMessage =
    'We could not find that location. Please try another one!';

  const errorMarkup = `<h1>${_errorMessage}</h1>`;
  _parentElement.insertAdjacentHTML('afterbegin', errorMarkup);
};

const displayErrorOnScreen = async function () {
  try {
    await model.getWeatherApi(id);
    console.log(model.state);
  } catch (error) {
    console.error(`🥲 ERROR IS WORKING`, error);
    renderErrorFunction(error);
  }
};

// APP INITIALIZATION

const init = function () {
  _userForm.addEventListener('submit', userInputFunction);
  addAsideMarkup.userInput(constrolAddWeatherData);
};
init();
