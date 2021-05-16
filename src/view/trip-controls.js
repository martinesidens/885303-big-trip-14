import {createElement} from '../util';

function generationTripControlsTemplate () {
  return `<div class="trip-main__trip-controls  trip-controls">
  <div class="trip-controls__navigation">
    <h2 class="visually-hidden">Switch trip view</h2>
    <nav class="trip-controls__trip-tabs  trip-tabs">
      <a class="trip-tabs__btn" href="#">Table</a>
      <a class="trip-tabs__btn  trip-tabs__btn--active" href="#">Stats</a>
    </nav>
  </div>`;
}

export default class TripControl {
  constructor(data) {
    this._element = null;
    this._data = data;
  }

  getTemplate() {
    return generationTripControlsTemplate(this._data);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement (this.getTemplate());
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
