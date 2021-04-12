
const pointType = ['Taxi', 'Bus', 'Train', 'Ship', 'Transport', 'Drive', 'Flight', 'Check-in', 'Sightseeng', 'Restaurant'];
const destinationTrip = ['Genova', 'Milan', 'Torino', 'Como', 'Lugano'];
const destinationInfo = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Cras aliquet varius magna, non porta ligula feugiat eget.', 'Fusce tristique felis at fermentum pharetra.', 'Aliquam id orci ut lectus varius viverra.', 'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.'];

const offerList = {
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
}

function generatePoint () {
  return {
    pointType: pointType[i],
    destination: destinationTrip[i],
    dataStartTrip: '',
    dataEndTrip: '',
    price: 100,

    offerList: {},

    destinationInfo: '',
  }
}
