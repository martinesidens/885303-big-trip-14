function getRandomInt (minNumber, maxNumber) {
  if(minNumber >= 0 && maxNumber >= 0 && (maxNumber >= minNumber)) {
    return parseInt(Math.random() * (maxNumber - minNumber) + minNumber);
  }
}

function getRandomArray (data) {
  return Array.from(data.slice(0, getRandomInt (0, data.length)));
}

function render  (container, template, place) {
  container.insertAdjacentHTML(place, template);
}

export {getRandomInt, getRandomArray, render};