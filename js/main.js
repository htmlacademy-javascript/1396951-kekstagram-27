
const getRandomInt = (min, max) => {
  const isChecking = min > max || min < 0 || max < 0;
  if (isChecking) {
    throw new RangeError('Parameter min is less then parameter max or parameters are less zero. Change value.');
  }
  return Math.floor(Math.random() * (max - min) + min);
};

const getlength = (checkingString, maxLength) => checkingString.length > maxLength;

getRandomInt(2,90);
getlength('fjkdhfk', 8);
