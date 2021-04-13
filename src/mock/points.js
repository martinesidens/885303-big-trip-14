import {getRandomInt, getRandomArray} from './../util.js';
import dayjs from 'dayjs';

const pointType = ['Taxi', 'Bus', 'Train', 'Ship', 'Transport', 'Drive', 'Flight', 'Check-in', 'Sightseeng', 'Restaurant'];
const destinationTrip = ['Genova', 'Milan', 'Torino', 'Como', 'Lugano'];
const destinationInfoText = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Cras aliquet varius magna, non porta ligula feugiat eget.', 'Fusce tristique felis at fermentum pharetra.', 'Aliquam id orci ut lectus varius viverra.', 'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.'];
const srcPhoto = 'http://picsum.photos/248/152?r=';
const srcPhotoList = new Array(5).fill('').map(() => getPhotoList(srcPhoto));

function getPhotoList (element) {
  return element + getRandomInt(0,5);
}

const offerList = [
  {
    service: 'Сервис номер один',
    price: 10,
  },
  {
    service: 'Сервис номер два',
    price: 20,
  },
  {
    service: 'Сервис номер три',
    price: 30,
  },
  {
    service: 'Сервис номер четыре',
    price: 40,
  },
  {
    service: 'Сервис номер пять',
    price: 50,
  },
];

function generatePoint () {
  return {
    pointType: pointType[getRandomInt(0, 9)],
    destination: getRandomArray(destinationTrip),
    dataStartTrip: dayjs().format('DD/MM/YYYY') ,
    dataEndTrip: dayjs().format('DD/MM/YYYY'),
    price: getRandomInt(100, 5000),

    offerList: getRandomArray(offerList),

    destinationInfo: {
      text: getRandomArray(destinationInfoText).join(),
      photos: getRandomArray(srcPhotoList),
    },
  };
}

console.log(generatePoint());

export {generatePoint};

