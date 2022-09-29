
const getRandomInt = (min, max) => {
  if (min > max) {
    return NaN;
  } else {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
};

const getlength = (checkingString, maxLength) => checkingString.length === maxLength;

getRandomInt(2,90);
getlength('fjkdhfk', 8);
