"use strict";

var _stats = require("./view/stats.js");

var _filters = require("./view/filters.js");

var _tripInfo = require("./view/trip-info.js");

var _newPoint = require("./view/newPoint.js");

var _sortDay = require("./view/sort-day.js");

var _editPoint = require("./view/edit-point.js");

var _point = require("./view/point.js");

var tripControls = document.querySelector('.trip-controls');
var tripFilters = document.querySelector('.trip-controls__filters');
var tripInfo = document.querySelector('.trip-main');
var sortDay = document.querySelector('.trip-events');
var editPoint = document.querySelector('.event');

function render(container, template, place) {
  container.insertAdjacentHTML(place, template);
}

;
render(tripControls, (0, _stats.setTripControls)(), 'afterbegin');
render(tripFilters, (0, _filters.setTripFilters)(), 'beforeend');
render(tripInfo, (0, _tripInfo.setTripInfo)(), 'afterbegin');
render(sortDay, (0, _sortDay.setSortDay)(), 'afterbegin'); // render(addNewPoint, setNewPointTrip(), 'afterbegin');

render(sortDay, (0, _editPoint.setEditPoint)(), 'beforeend');
render(editPoint, (0, _newPoint.setNewPointTrip)(), 'beforeend');
render(sortDay, (0, _point.setPoint)(), 'beforeend');