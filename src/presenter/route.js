import PointPresenter from './point.js';
import {render, RenderPosition} from '../util';
import EmptyListView from '../view/empty-list.js';


export default class Route {

  constructor (container, points) {
    this._container = container;
    this._points = points;

    this._pointPresenter = null;

  }

  init (points, container) {

    console.log(points);

    if (points.length === 0) {
      render(this._container, new EmptyListView.getElement());
    } else {
      for (const point of points) {
        this._pointPresenter = new PointPresenter(container, point);
      }
    }
  }


}

