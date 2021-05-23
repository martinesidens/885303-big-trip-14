import TripPointView from '../view/trip-point';
import FormPointTripView from '../view/form-point-trip';
import {render, RenderPosition} from '../util';

export default class Point {
  constructor(container, point) {
    this._pointContainer = container;
    this.point = point;

    this._tripPoint = null;
    this._formPointTrip = null;

    this._onCloseButton = this._onCloseButton.bind(this);
    this._onEscFormClose = this._onEscFormClose.bind(this);
  }

  init () {
    this._tripPoint = new TripPointView(this.point);
    this._formPointTrip = new FormPointTripView(this.point);
    render(this._pointContainer, this._tripPoint.getElement(), RenderPosition.BEFOREEND);
    this._tripPoint.setClickHandler(() => {
      this._replacePointToForm();
    });
  }

  _onEscFormClose  (evt) {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      evt.preventDefault();
      this._replaceFormToPoint();
      document.removeEventListener('keydown', this._onEscFormClose);
    }
  }

  _onCloseButton (evt) {
    evt.preventDefault();
    this._replaceFormToPoint();
  }

  _replacePointToForm () {
    this._pointContainer.replaceChild(this._formPointTrip.getElement(), this._tripPoint.getElement());
    this._formPointTrip.setSubmitHandler(() => {
      this._replaceFormToPoint();
    });
    this._formPointTrip.getElement().querySelector('.event__rollup-btn').addEventListener('click', this._onCloseButton);
    document.addEventListener('keydown', this._onEscFormClose);
  }

  _replaceFormToPoint () {
    this._pointContainer.replaceChild(this._tripPoint.getElement(), this._formPointTrip.getElement());
    document.removeEventListener('keydown', this._onEscFormClose);
  }
}
