import {getRandomArray, getRandomInt} from './util.js';

const pointType = ['Taxi', 'Bus', 'Train', 'Ship', 'Transport', 'Drive', 'Flight', 'Check-in', 'Sightseeng', 'Restaurant'];
const destinationTrip = ['Genova', 'Milan', 'Torino', 'Como', 'Lugano'];
const destinationInfoText = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Cras aliquet varius magna, non porta ligula feugiat eget.', 'Fusce tristique felis at fermentum pharetra.', 'Aliquam id orci ut lectus varius viverra.', 'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.'];
const srcPhoto = 'http://picsum.photos/248/152?r=';
const srcPhotoList = [].fill(srcPhoto, 0, getRandomInt(1, 5));

console.log(srcPhotoList);


const offerList = [
  optionOne: {
    service: 'Сервис номер один',
    price: 10,
  },
  optionTwo: {
    service: 'Сервис номер два',
    price: 20,
  },
  optionThree: {
    service: 'Сервис номер три',
    price: 30,
  },
  optionFour: {
    service: 'Сервис номер четыре',
    price: 40,
  },
  optionFive: {
    service: 'Сервис номер пять',
    price: 50,
  },
]

function generatePoint () {
  return {
    pointType: getRandomArray(pointType),
    destination: getRandomArray(destinationTrip),
    dataStartTrip: '',
    dataEndTrip: '',
    price: getRandomInt(100, 5000),

    offerList: {},

    destinationInfo: {
      text: getRandomArray(destinationInfoText),
      photos: '',
    },
  }
}
