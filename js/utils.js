const getRandomInt = (min, max) => {
  const isChecking = min > max || min < 0 || max < 0;
  if (isChecking) {
    throw new RangeError('Parameter min is less then parameter max or parameters are less zero. Change value.');
  }
  return Math.floor(Math.random() * (max - min) + min);
};

const checkinglength = (checkingString, maxLength) => checkingString.length > maxLength;

const isEscape = (evt) => {
  if (evt.key === 'Escape' ) {
    return true;
  }
};

const isClick = (evt) => {
  if ( evt.button === 0 ) {
    return true;
  }
};

export {getRandomInt, checkinglength, isEscape, isClick};
