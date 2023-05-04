'use strict';

export default class Weather {
  _userForm = document.querySelector('.user__input');
  _asideElement = document.querySelector('.aside__output--box');
  _weekDaysElement = document.querySelector(
    '.weather-section--weather__display--box'
  );
  _parentElementHighlights = document.querySelector(
    '.weather-section--weather__highlights'
  );
  _weekDaysElement = document.querySelector(
    '.weather-section--weather__display--box'
  );

  _date = new Date();

  _daysInAWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  static data = {};

  constructor() {}
}
