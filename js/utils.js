
export const getRandomInt = (min, max) => {
  const isChecking = min > max || min < 0 || max < 0;
  if (isChecking) {
    throw new RangeError('Parameter min is less then parameter max or parameters are less zero. Change value.');
  }
  return Math.floor(Math.random() * (max - min) + min);
};

export const checkinglength = (checkingString, maxLength) => checkingString.length > maxLength;

export const getlength = (value) => value.length;
