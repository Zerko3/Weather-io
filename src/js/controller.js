'use strict';

import * as model from './model.js';
import weather from './view.js';
import addAsideMarkup from './views/addAsideMarkup.js';
import WeatherHighlights from './views/addHighlights.js';
import addDays from './views/addDays.js';
import addHours from './views/addHours.js';

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

const _navigationBar = document.querySelector(
  '.weather-section--navigation--links--box'
);

// FUNCTION

// FUNCTION USER INPUT

// TODO:
// 1. if special character is present return

const userInputFunction = async function () {
  try {
    let id = _asideInputBoxElement.value;

    if (id === '') return;

    await model.getWeatherApi(id);

    clearWeatherData();

    addAsideMarkup._renderText(model.state);

    WeatherHighlights.generateHighlightsMarkup(model.state);

    addDays.generateMarkupWeekDays(model.state);

    _asideInputBoxElement.value = '';

    id = _asideInputBoxElement.value;
  } catch (error) {
    console.error(`🥲 ERROR IS WORKING`, error);
    renderErrorFunction();
  }
};

// CLEAR PREVIOUS INPUT

const clearWeatherData = function () {
  console.log('Activated');
  _asideElement.innerHTML = '';
  _parentElementHighlights.innerHTML = '';
  _weekDaysElement.innerHTML = '';
};

// FUNCTION USER CLIKC ON WEEK OR DAY

const userChooseWeekOrDayFunction = function (e) {
  const btn = e.target.textContent;

  if (btn === 'Today') {
    _weekDaysElement.innerHTML = '';

    addHours._generateMarkupDayHours(model.state);
  }

  if (btn === 'Week') {
    _weekDaysElement.innerHTML = '';

    addDays.generateMarkupWeekDays(model.state);
  }
};

// FUNCTION USER CLICK ON C OR F

// 1. Error handling
const renderErrorFunction = function () {
  clearWeatherData();
  const _errorMessage =
    'We could not find that location. Please try another one!';

  const errorMarkup = `<div class="error__box">
                        <p>${_errorMessage}</p>
                      </div>`;
  _parentElement.insertAdjacentHTML('afterbegin', errorMarkup);
};

// APP INITIALIZATION

const init = function () {
  addAsideMarkup.userInput(userInputFunction);
  _navigationBar.addEventListener('click', userChooseWeekOrDayFunction);
};
init();
