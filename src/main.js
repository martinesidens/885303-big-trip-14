
import {setTripControls} from './view/trip-controls.js';
import {setTripFilters} from './view/trip-filters.js';
import {setTripInfo} from './view/trip-info.js';
import {setTripSort} from './view/trip-sort.js';
import {setTripEventList} from './view/trip-event-list.js';
import {setNewPointTrip} from './view/new-point-trip.js';
import {setEditPoint} from './view/edit-point-trip.js';

const tripControlsElement = document.querySelector('.trip-controls');
const tripControlFiltersElement = document.querySelector('.trip-controls__filters');
const tripInfoElement = document.querySelector('.trip-main');
const tripEventsElement = document.querySelector('.trip-events');

function render  (container, template, place) {
  container.insertAdjacentHTML(place, template);
};

render(tripControlsElement, setTripControls(), 'afterbegin');
render(tripControlFiltersElement, setTripFilters(), 'beforeend');
render(tripInfoElement, setTripInfo(), 'afterbegin');
render(tripEventsElement, setTripSort(), 'beforeend');
render(tripEventsElement, setTripEventList(), 'beforeend');
render(tripEventsElement, setNewPointTrip(), 'afterbegin');
