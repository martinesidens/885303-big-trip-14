
import {setTripControls} from './view/stats.js';
import {setTripFilters} from './view/filters.js';
import {setTripInfo} from './view/trip-info.js';
import {setNewPointTrip} from './view/newPoint.js';
import {setSortDay} from './view/sort-day.js';
import {setEditPoint} from './view/edit-point.js';
import {setPoint} from './view/point.js';

const tripControls = document.querySelector('.trip-controls');
const tripFilters = document.querySelector('.trip-controls__filters');
const tripInfo = document.querySelector('.trip-main');
const sortDay = document.querySelector('.trip-events');
const editPoint = document.querySelector('.event');

function render  (container, template, place) {
  container.insertAdjacentHTML(place, template);
};

render(tripControls, setTripControls(), 'afterbegin');
render(tripFilters, setTripFilters(), 'beforeend');
render(tripInfo, setTripInfo(), 'afterbegin');
render(sortDay, setSortDay(), 'afterbegin');
// render(addNewPoint, setNewPointTrip(), 'afterbegin');
render(sortDay, setEditPoint(), 'beforeend');
render(editPoint, setNewPointTrip(), 'beforeend');
render(sortDay, setPoint(),'beforeend');
