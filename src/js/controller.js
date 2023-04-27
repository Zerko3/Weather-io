'use strict';

import * as model from './model.js';
import weather from './view.js';
import addAsideMarkup from './views/addAsideMarkup.js';
import WeatherHighlights from './views/addHighlights.js';
import addDays from './views/addDays.js';

// DOM ELEMENTS

const _parentElement = document.querySelector(
  '.weather-section--weather__display--box'
);

const _asideInputBoxElement = document.querySelector(
  '.aside__input--box__user--input'
);

const _asideElement = document.querySelector('.aside__output--box');
const _parentElementHighlights = document.querySelector(
  '.weather-section--weather__highlights'
);
const _weekDaysElement = document.querySelector(
  '.weather-section--weather__display--box'
);

// FUNCTION

// FUNCTION USER INPUT

const userInputFunction = async function () {
  let id = _asideInputBoxElement.value;

  if (id === '') return;

  await model.getWeatherApi(id);

  clearWeatherData();

  addAsideMarkup._renderText(model.state);

  WeatherHighlights.generateHighlightsMarkup(model.state);

  addDays.generateMarkupWeekDays(model.state);

  _asideInputBoxElement.value = '';

  id = _asideInputBoxElement.value;
};

const clearWeatherData = function () {
  console.log('Activated');
  _asideElement.innerHTML = '';
  _parentElementHighlights.innerHTML = '';
  _weekDaysElement.innerHTML = '';
};

// FUNCTION USER CLIKC ON WEEK OR DAY

const userChooseWeekOrDayFunction = function () {
  // 1. add event listener to the buttons so this function is called (add in init)
  // 2. if target === C than call the methods in classes (base case)
  // 3. if target === F than switch the API numbers with F numbers and call the methods
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
  addAsideMarkup.userInput(userInputFunction);
};
init();
