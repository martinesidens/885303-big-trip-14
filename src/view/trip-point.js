import {createElement } from '../util.js';


console.log(createElement ());

function generationTripPointTemplate(tripPoint) {

  const {eventIcon, pointType, destination, dataStartTrip, dataEndTrip, price, dateEvent} = tripPoint;

  function renderOffersPoint (data) {
    return data.map((element) => {
      return `<li class="event__offer">
                    <span class="event__offer-title">${element.service}</span>
                    &plus;&euro;&nbsp;
                    <span class="event__offer-price">${element.price}</span>
                  </li>`;
    }).join('');
  }

  return `
  <ul class="trip-events__list">
   <li class="trip-events__item">
              <div class="event">
                <time class="event__date" datetime="2019-03-18">${dateEvent}</time>
                <div class="event__type">
                  <img class="event__type-icon" width="42" height="42" src="${eventIcon}" alt="Event type icon">
                </div>
                <h3 class="event__title">${pointType} ${destination}</h3>
                <div class="event__schedule">
                  <p class="event__time">
                    <time class="event__start-time" datetime="2019-03-18T10:30">${dataStartTrip}</time>
                    &mdash;
                    <time class="event__end-time" datetime="2019-03-18T11:00">${dataEndTrip}</time>
                  </p>
                  <p class="event__duration">30M</p>
                </div>
                <p class="event__price">
                  &euro;&nbsp;<span class="event__price-value">${price}</span>
                </p>
                <h4 class="visually-hidden">Offers:</h4>
                <ul class="event__selected-offers">
                  ${renderOffersPoint(tripPoint.offerList)}
                </ul>
                <button class="event__favorite-btn event__favorite-btn--active" type="button">
                  <span class="visually-hidden">Add to favorite</span>
                  <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
                    <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
                  </svg>
                </button>
                <button class="event__rollup-btn" type="button">
                  <span class="visually-hidden">Open event</span>
                </button>
              </div>
            </li>
  </ul>`;
}

export default class TripPoint {
  constructor(element) {
    this._element = element;
  }

  getTemplate() {
    return generationTripPointTemplate(this._element);
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
