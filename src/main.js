import {render, renderElement} from './util.js';
import {generatePoint} from './mock/points.js';
import {renderTripControls} from './view/trip-controls.js';
import {renderTripFilters} from './view/trip-filters.js';
import {renderTripInfo} from './view/trip-info.js';
import {renderTripSort} from './view/trip-sort.js';
import TripPointView from './view/trip-point.js';
import {renderNewPointTrip} from './view/render-new-point-trip.js';
// import {renderEditPoint} from './view/edit-point-trip.js';

const points = getDataPointTrip();

const tripControlsElement = document.querySelector('.trip-controls');
const tripControlFiltersElement = document.querySelector('.trip-controls__filters');
const tripInfoElement = document.querySelector('.trip-main');
const tripEventsElement = document.querySelector('.trip-events');

render(tripControlsElement, renderTripControls(), 'afterbegin');
render(tripControlFiltersElement, renderTripFilters(), 'beforeend');
render(tripInfoElement, renderTripInfo(), 'afterbegin');
render(tripEventsElement, renderTripSort(), 'beforeend');

for (const element of points) {
  renderElement(tripEventsElement, new TripPointView(element).getElement(), 'beforeend');
}

render(tripEventsElement, renderNewPointTrip(points[0]), 'afterbegin');

function getDataPointTrip () {
  return new Array(5).fill('').map(() => generatePoint());
}

export {getDataPointTrip};
