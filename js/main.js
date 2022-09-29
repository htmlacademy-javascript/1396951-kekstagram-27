
const getRandomInt = (min, max) => {
  if (min > max) {
    return NaN;
  } else {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
};

const getlength = (checkingString, maxLength) => {
  return checkingString.length === maxLength ? true : false;
};

