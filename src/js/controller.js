'use strict';

import * as model from './model.js';
import weather from './view.js';
import addAsideMarkup from './views/addAsideMarkup.js';
import WeatherHighlights from './views/addHighlights.js';
import addDays from './views/addDays.js';
import addHours from './views/addHours.js';

/* --------------------------------------------------------- */
// DOM ELEMENTS
/* --------------------------------------------------------- */

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

/* --------------------------------------------------------- */
// FUNCTION
/* --------------------------------------------------------- */

// FUNCTION USER INPUT

/**
 * @param {*} userInput
 * @async Function awais the data from the modal.js. Gets modal.state back. Modal.state is an object with all the valid data.
 * @description This function gets the users input from the HTML form and calls the API function and other class mehtods. Its the "bridge" between the modal.js and view.js
 * @returns {Calls API function and  class methods}
 * @author Žan
 */

const userInputFunction = async function () {
  try {
    // user input
    let id = _asideInputBoxElement.value;

    // check if user input is valid or not
    if (id === '' || id.includes('!', '-', ':', '.', ',', '_', '#', '&', '%'))
      return;

    // calls API function from the modal.js and awaits the data
    await model.getWeatherApi(id);

    // calls function to clear the DOM
    clearWeatherData();

    // calls the class AddAsideMarkup and its method to render the text on the DOM.
    addAsideMarkup._renderText(model.state);

    // calls the class WeatherHighlights and its method to render the text on the DOM.
    WeatherHighlights.generateHighlightsMarkup(model.state);

    // calls the class AddDays and its method to render the text on the DOM.
    addDays.generateMarkupWeekDays(model.state);

    // clear the user input for better UX.
    _asideInputBoxElement.value = '';

    id = _asideInputBoxElement.value;
  } catch (error) {
    console.error(`🥲 ERROR IS WORKING`, error);
    // If there is an error call this function to handle it.
    renderErrorFunction();
  }
};

/**
 * @description Function calls the getDataFromLocalStorage() if there is a key present inside it.
 * @author Žan
 */
const renderLocalStorageItem = function () {
  if (localStorage.getItem('location') !== null) {
    getDataFromLocalStorage();
  }
};

/**
 * @description Function gets the data from the locasstorage and calls classes with their methods to render HTML on the DOM.
 * @author Žan
 */
const getDataFromLocalStorage = function () {
  const locasStorageData = JSON.parse(localStorage.getItem('location'));

  // calls the class AddAsideMarkup and its method to render the text on the DOM.
  addAsideMarkup._renderText(locasStorageData);

  // calls the class WeatherHighlights and its method to render the text on the DOM.
  WeatherHighlights.generateHighlightsMarkup(locasStorageData);

  // calls the class AddDays and its method to render the text on the DOM.
  addDays.generateMarkupWeekDays(locasStorageData);

  // callback function on the parent element of both the buttons
  _navigationBar.addEventListener('click', function (e) {
    const btn = e.target.textContent;

    if (btn === 'Today') {
      _weekDaysElement.innerHTML = '';

      addHours._generateMarkupDayHours(locasStorageData);
    }

    if (btn === 'Week') {
      _weekDaysElement.innerHTML = '';

      addDays.generateMarkupWeekDays(locasStorageData);
    }
  });
};

/**
 * @description This function is called from the userInputFunction every time the user inputs some data. This function will change all the DOM inner HTML to ""
 * @returns {empty DOM}
 * @author Žan
 */
const clearWeatherData = function () {
  _asideElement.innerHTML = '';
  _parentElementHighlights.innerHTML = '';
  _weekDaysElement.innerHTML = '';
};

// FUNCTION USER CLIKC ON WEEK OR DAY

/**
 *
 * @param {*} e
 * @description the function allows the user to swtich between two views on demand.
 * @returns calls AddHours class and its methods or AddDays and its methods with the valid data from API.
 * @author Žan
 */

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

/**
 *@description this function calls the clearWeatherData function to clear the DOM. And then renders the error message to the DOM.
 *@author Žan
 */
const renderErrorFunction = function () {
  clearWeatherData();
  const _errorMessage =
    'We could not find that location. Please try another one!';

  const errorMarkup = `<div class="error__box">
                        <p>${_errorMessage}</p>
                      </div>`;
  _parentElement.insertAdjacentHTML('afterbegin', errorMarkup);
};

/* --------------------------------------------------------- */
// APP INITIALIZATION
/* --------------------------------------------------------- */

/**
 * @description this function is called at the beginning of the loading of the DOM and JS. The goal is to initialize all the function for the web application.
 * @author Žan
 */

const init = function () {
  addAsideMarkup.userInput(userInputFunction);
  _navigationBar.addEventListener('click', userChooseWeekOrDayFunction);
  renderLocalStorageItem();
};
init();
