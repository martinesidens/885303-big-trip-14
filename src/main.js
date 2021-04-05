
import {renderTripControls} from './view/trip-controls.js';
import {renderTripFilters} from './view/trip-filters.js';
import {renderTripInfo} from './view/trip-info.js';
import {renderTripSort} from './view/trip-sort.js';
import {renderTripEventList} from './view/trip-event-list.js';
import {renderNewPointTrip} from './view/new-point-trip.js';
// import {renderEditPoint} from './view/edit-point-trip.js';

const tripControlsElement = document.querySelector('.trip-controls');
const tripControlFiltersElement = document.querySelector('.trip-controls__filters');
const tripInfoElement = document.querySelector('.trip-main');
const tripEventsElement = document.querySelector('.trip-events');

function render  (container, template, place) {
  container.insertAdjacentHTML(place, template);
}

render(tripControlsElement, renderTripControls(), 'afterbegin');
render(tripControlFiltersElement, renderTripFilters(), 'beforeend');
render(tripInfoElement, renderTripInfo(), 'afterbegin');
render(tripEventsElement, renderTripSort(), 'beforeend');
render(tripEventsElement, renderTripEventList(), 'beforeend');
render(tripEventsElement, renderNewPointTrip(), 'afterbegin');
