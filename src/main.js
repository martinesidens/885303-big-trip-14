import {render, RenderPosition} from './util.js';
import {generatePoint, MOCK_COUNT} from './mock/points.js';
import TripControlView from './view/trip-controls.js';
import TripFilterView from './view/trip-filters.js';
import TripInfoView from './view/trip-info.js';
import TripSortView from './view/trip-sort.js';
import TripPointView from './view/trip-point.js';
import FormPointTripView from './view/form-point-trip.js';

const points = getDataPointTrip();

const tripControlsElement = document.querySelector('.trip-controls');
const tripControlFiltersElement = document.querySelector('.trip-controls__filters');
const tripInfoElement = document.querySelector('.trip-main');
const tripEventsElement = document.querySelector('.trip-events');

render(tripControlsElement, new TripControlView().getElement(), RenderPosition.AFTERBEGIN);
render(tripControlFiltersElement, new TripFilterView().getElement());
render(tripInfoElement, new TripInfoView().getElement(), RenderPosition.AFTERBEGIN);
render(tripEventsElement, new TripSortView().getElement());

for (const point of points) {
  renderTripPoint(tripEventsElement, point);
}

function renderTripPoint (container, points) {
  const tripPoint = new TripPointView(points);
  const formPointTrip = new FormPointTripView(points);

  const replacePointToForm = () => {
    container.replaceChild(formPointTrip.getElement(), tripPoint.getElement());
    formPointTrip.getElement().addEventListener('submit', (evt) => {
      evt.preventDefault();
      replaceFormToPoint();
    });
  };

  const replaceFormToPoint = () => {
    container.replaceChild(tripPoint.getElement(), formPointTrip.getElement());
  };

  tripPoint.getElement().addEventListener('click', () => {
    replacePointToForm();
  });

  render(container, tripPoint.getElement(), RenderPosition.BEFOREEND);
}

function getDataPointTrip () {
  return new Array(MOCK_COUNT).fill('').map(() => generatePoint());
}

export {getDataPointTrip};
