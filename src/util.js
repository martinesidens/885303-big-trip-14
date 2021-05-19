import Abstract from './view/abstract';

const RenderPosition = {
  AFTERBEGIN: 'afterbegin',
  BEFOREEND: 'beforeend',
};

function getRandomInt (minNumber, maxNumber) {
  if(minNumber >= 0 && maxNumber >= 0 && (maxNumber >= minNumber)) {
    return parseInt(Math.random() * (maxNumber - minNumber) + minNumber);
  }
}

function getRandomArray (data) {
  return Array.from(data.slice(0, getRandomInt (0, data.length)));
}

function getRandomElement (data) {
  return data[getRandomInt(0, data.length)];
}

function render (container, child, place = RenderPosition.BEFOREEND) {
  if (container instanceof Abstract) {
    container = container.getElement();
  }

  if (child instanceof Abstract) {
    child = child.getElement();
  }

  switch (place) {
    case RenderPosition.AFTERBEGIN:
      container.prepend(child);
      break;
    case RenderPosition.BEFOREEND:
      container.append(child);
      break;
  }
}

function createElement (template) {
  const newElement = document.createElement('div');
  newElement.innerHTML = template;
  return newElement.firstElementChild;
}

export {getRandomInt, getRandomArray, getRandomElement, createElement, render, RenderPosition };
