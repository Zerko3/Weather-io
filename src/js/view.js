'use strict';

export default class Weather {
  constructor(data) {
    this.data = data;
  }

  // Call specific child Class with _generateMarkup() inside
  _render(data) {
    if (!data) return;

    const markup = this._generateMarkup();

    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  _displayError(message = this._errorMessage) {
    const errorMarkup = `<p>${message}</p>`;

    this._parentElement.insertAdjacentHTML('afterbegin', errorMarkup);
  }
}
