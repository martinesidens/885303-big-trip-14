import {render, RenderPosition} from './util.js';
import {generatePoint, MOCK_COUNT} from './mock/points.js';
import TripControlView from './view/trip-controls.js';
import TripFilterView from './view/trip-filters.js';
import TripInfoView from './view/trip-info.js';
import TripSortView from './view/trip-sort.js';
import EmptyListView from './view/empty-list.js';
import PointPresenter from './presenter/point.js';
import RoutePresenter from './presenter/route.js';

const points = getDataPointTrip();

const tripControlsElement = document.querySelector('.trip-controls');
const tripControlFiltersElement = document.querySelector('.trip-controls__filters');
const tripInfoElement = document.querySelector('.trip-main');
const tripEventsElement = document.querySelector('.trip-events');

render(tripControlsElement, new TripControlView().getElement(), RenderPosition.AFTERBEGIN);
render(tripControlFiltersElement, new TripFilterView().getElement());
render(tripInfoElement, new TripInfoView().getElement(), RenderPosition.AFTERBEGIN);
render(tripEventsElement, new TripSortView().getElement());

const routePresenter = new RoutePresenter(tripEventsElement, points);

routePresenter.init();

// if (points.length === 0) {
//   render(tripEventsElement, new EmptyListView().getElement());
// } else {
//   for (const point of points) {
//     const pointPresenter = new PointPresenter(tripEventsElement, point);
//     pointPresenter.init();
//   }
// }

function getDataPointTrip () {
  return new Array(MOCK_COUNT).fill('').map(() => generatePoint());
}

export {getDataPointTrip};
