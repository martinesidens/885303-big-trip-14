import {createElement} from "../util";

function generationEmptyList () {
  return '<h2 class="visually-hidden">Trip events</h2><p class="trip-events__msg">Click New Event to create your first point</p>'
}

export default class EmptyList {
  constructor(data) {
    this._element = null;
    this._data = data;
  }

  getTemplate() {
    return generationEmptyList(this._data);
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
