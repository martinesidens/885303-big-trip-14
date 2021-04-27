import {render} from './util.js';
import {generatePoint} from './mock/points.js';
import {renderTripControls} from './view/trip-controls.js';
import {renderTripFilters} from './view/trip-filters.js';
import {renderTripInfo} from './view/trip-info.js';
import {renderTripSort} from './view/trip-sort.js';
import {renderTripPoint} from './view/render-trip-point.js';
import {renderNewPointTrip} from './view/new-point-trip.js';
// import {renderEditPoint} from './view/edit-point-trip.js';


const tripControlsElement = document.querySelector('.trip-controls');
const tripControlFiltersElement = document.querySelector('.trip-controls__filters');
const tripInfoElement = document.querySelector('.trip-main');
const tripEventsElement = document.querySelector('.trip-events');

render(tripControlsElement, renderTripControls(), 'afterbegin');
render(tripControlFiltersElement, renderTripFilters(), 'beforeend');
render(tripInfoElement, renderTripInfo(), 'afterbegin');
render(tripEventsElement, renderTripSort(), 'beforeend');

for (const variable of getDataPointTrip()) {
  render(tripEventsElement, renderTripPoint(variable), 'beforeend');
}

for (const variable of getDataPointTrip()) {
  render(tripEventsElement, renderTripPoint(variable), 'beforeend');
}

render(tripEventsElement, renderNewPointTrip(), 'afterbegin');

function getDataPointTrip () {
  return new Array(20).fill('').map(() => generatePoint());
}

export {getDataPointTrip};
