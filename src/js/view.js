'use strict';

export default class Weather {
  _userForm = document.querySelector('.user__input');

  static data = {};

  constructor() {}

  static setData(data) {
    Weather.data = data; // set the data as the static property of the class
    console.log(data);
  }

  static getData() {
    return Weather.data; // get the weather data from the static property of the class
  }
}
