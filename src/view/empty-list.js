import AbstractView from './abstract.js';

function generationEmptyList () {
  return '<h2 class="visually-hidden">Trip events</h2><p class="trip-events__msg">Click New Event to create your first point</p>'
}

export default class EmptyList extends AbstractView {
  getTemplate() {
    return generationEmptyList(this._data);
  }
}
