import {getRandomInt} from '../util.js';

function renderTripPoint(tripPoints) {

  const pointType = tripPoints.pointType;
  const destination = tripPoints.destination;
  const dataStartTrip = tripPoints.dataStartTrip;
  const dataEndTrip = tripPoints.dataEndTrip;
  const price = tripPoints.price;
  const service = tripPoints.offerList[0] === undefined ? 'нет допов' : tripPoints.offerList[getRandomInt(0, tripPoints.offerList.length)].service;
  const servicePrice =tripPoints.offerList[0] === undefined ? 'бесценно' : tripPoints.offerList[getRandomInt(0, tripPoints.offerList.length)].price;

  console.log(service);
  console.log(tripPoints.offerList[0] === true);

  return `
  <ul class="trip-events__list">
   <li class="trip-events__item">
              <div class="event">
                <time class="event__date" datetime="2019-03-18">MAR 18</time>
                <div class="event__type">
                  <img class="event__type-icon" width="42" height="42" src="img/icons/taxi.png" alt="Event type icon">
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
                  <li class="event__offer">
                    <span class="event__offer-title">${service}</span>
                    &plus;&euro;&nbsp;
                    <span class="event__offer-price">${servicePrice}</span>
                  </li>
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

export {renderTripPoint};
