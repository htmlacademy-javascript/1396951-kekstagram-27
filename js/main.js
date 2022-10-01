const COUNT_MOCK_ITEMS = 25;
const MIN_VALUE = 0;
const desriptionsPhotos = ['Пляж крутой', 'Красивое фото', 'Wow! It is Amaizing!', 'Where is it?', 'Thas\'s cool!'];
const NAMES = ['Vadim', 'Anton', 'Vasya', 'Petya', 'Irina', 'Sacha', 'Ekaterina'];
const getRandomInt = (min, max) => {
  const isChecking = min > max || min < 0 || max < 0;
  if (isChecking) {
    throw new RangeError('Parameter min is less then parameter max or parameters are less zero. Change value.');
  }
  return Math.floor(Math.random() * (max - min) + min);
};
const getlength = (checkingString, maxLength) => checkingString.length > maxLength;
const createMockUrl = () => `photos/${ String(getRandomInt(0,25)) }.jpg`;
const createAvatarUrl = () => `img/avatar-${ String(getRandomInt(0,25))}.svg`;
const createMessageUser = () => desriptionsPhotos[getRandomInt(0,5)];
const createNameUser = () => NAMES[getRandomInt(0,7)];
const createMockComments = (countItems) => {
  const commentsList = [];
  for(let i = 0; i < countItems; i++) {
    commentsList.push(
      {
        id:2,
        avatar: createAvatarUrl(),
        message: createMessageUser(),
        name: createNameUser()
      }
    );
  }
  // console.log(commentsList);
  return commentsList;
};
const createMockObj = (countItems) => {
  const mockDataObjects = [];
  for(let i = 0; i < countItems; i++) {
    mockDataObjects.push(
      {
        id:2,
        url: createMockUrl(),
        description:'',
        likes: getRandomInt(MIN_VALUE, COUNT_MOCK_ITEMS),
        comments: createMockComments(1)
      }
    );
  }
};

createMockObj(3);
getRandomInt(2,90);
getlength('fjkdhfk', 8);
