
const getRandomInt = (min, max) => {
  const isValid = min > max || min < 0 || max < 0;
  if (isValid) {
    throw new RangeError('Parameter min is less then parameter max or parameters are less zero. Change value.');
  }
  return Math.floor(Math.random() * (max - min) + min);
};

const getlength = (checkingString, maxLength) => {
  if (checkingString.length > maxLength) {
    throw new RangeError('This string is too big.');
  }
  return true;
};

getRandomInt(2,90);
getlength('fjkdhfk', 8);
