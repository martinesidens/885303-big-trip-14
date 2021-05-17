import {getRandomInt, getRandomArray, getRandomElement} from './../util.js';
import dayjs from 'dayjs';

const MOCK_COUNT = 0;
const POINT_TYPE = ['Taxi', 'Bus', 'Train', 'Ship', 'Transport', 'Drive', 'Flight', 'Check-in', 'Sightseeng', 'Restaurant'];
const DESTINATION_TRIP = ['Genova', 'Milan', 'Torino', 'Como', 'Lugano'];
const DESTINATION_INFO_TEXT = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Cras aliquet varius magna, non porta ligula feugiat eget.', 'Fusce tristique felis at fermentum pharetra.', 'Aliquam id orci ut lectus varius viverra.', 'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.'];
const SRC_ICONS = ['/img/icons/taxi.png', '/img/icons/drive.png', '/img/icons/flight.png', '/img/icons/bus.png','/img/icons/check-in.png','/img/icons/restaurant.png', '/img/icons/ship.png', '/img/icons/sightseeing.png', '/img/icons/taxi.png', '/img/icons/train.png', '/img/icons/transport.png'];
const SRC_PHOTO = 'http://picsum.photos/248/152?r=';
const SRC_PHOTO_LIST = new Array(MOCK_COUNT).fill('').map(() => getPhotoList(SRC_PHOTO));

function getPhotoList (element) {
  return element + getRandomInt(0,5);
}

const OFFERS_LIST = [
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
    dateEvent: dayjs().format('DD MMM'),
    eventIcon: getRandomElement(SRC_ICONS),
    pointType: POINT_TYPE[getRandomInt(0, 9)],
    destination: DESTINATION_TRIP[getRandomInt(0, 4)],
    dataStartTrip: dayjs().format('DD/MM/YY HH:mm') ,
    dataEndTrip: dayjs().add(1, 'hour').format('DD/MM/YY HH:mm'),
    price: getRandomInt(100, 5000),

    offerList: getRandomArray(OFFERS_LIST),

    destinationInfo: {
      text: getRandomArray(DESTINATION_INFO_TEXT).join(),
      photos: getRandomArray(SRC_PHOTO_LIST),
    },
  };
}

export {generatePoint, MOCK_COUNT};

