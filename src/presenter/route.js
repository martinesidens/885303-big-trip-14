import PointPresenter from './point.js';
import {render, RenderPosition} from '../util';
import EmptyListView from '../view/empty-list.js';


export default class Route {

  constructor (container, points) {
    this._container = container;
    this._points = points;

    this._pointPresenter = new PointPresenter();
    this._emptyList = new EmptyListView();
  }



  init () {

    if (this._points.length === 0) {
      render(this._container, this._emptyList.getElement());
    } else {
      for (const point of this._points) {
        const pointPresenter = new PointPresenter(this._container, point);
      }
    }
  }
}

