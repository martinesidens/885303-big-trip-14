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

function render  (container, template, place) {
  container.insertAdjacentHTML(place, template);
}

function createElement (template) {
  const newElement = document.createElement('div');
  newElement.innerHTML = template;
  console.log(template, newElement.firstChild);
  return newElement.firstChild;
}

export {getRandomInt, getRandomArray, render, getRandomElement, createElement};
