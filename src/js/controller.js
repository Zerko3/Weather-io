'use strict';

import * as model from './model.js';
import weather from './view.js';
import addAsideMarkup from './views/addAsideMarkup.js';
import WeatherHighlights from './views/addHighlights.js';

// DOM ELEMENTS

const _parentElement = document.querySelector(
  '.weather-section--weather__display--box'
);

// FUNCTION

// FUNCTION USER INPUT

const userInputFunction = async function () {
  const id = document.querySelector('.aside__input--box__user--input').value;

  if (id === '') return;
  await model.getWeatherApi(id);

  weather.setData(model.state);

  addAsideMarkup._renderText(model.state);

  WeatherHighlights.generateHighlightsMarkup(model.state);
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
