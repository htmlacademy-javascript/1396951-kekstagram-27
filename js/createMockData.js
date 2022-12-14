import { getRandomInt } from './utils.js';

const COUNT_MOCK_ITEMS = 25;
const COUNT_MOCK_AVATARS = 6;
const MIN_VALUE = 1;
const MAX_VALUE = 100;
const NAMES = ['Vadim', 'Anton', 'Vasya', 'Petya', 'Irina', 'Sacha', 'Ekaterina'];

const DESCRIPTION_PHOTOS = [
  'This is an amazing photo that I\'ve ever seen',
  'Wow! Awesome!',
  'Cool!!!',
  'Where is it plase?',
  'Where does make this photo?',
  'It is terrible...'
];

const COMMENTS_PHOTOS = [
  'Всё отлично! В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.'
];

const createMockUrl = () => `photos/${ String(getRandomInt(MIN_VALUE, COUNT_MOCK_ITEMS)) }.jpg`;

const createAvatarUrl = () => `img/avatar-${ String(getRandomInt(MIN_VALUE, COUNT_MOCK_AVATARS))}.svg`;

const createMessageUser = () => COMMENTS_PHOTOS[getRandomInt(MIN_VALUE, COMMENTS_PHOTOS.length)];

const createNameUser = () => NAMES[getRandomInt(MIN_VALUE, NAMES.length)];

const createDescription = () => DESCRIPTION_PHOTOS[getRandomInt(MIN_VALUE, DESCRIPTION_PHOTOS.length)];

const createMockDataList = (template, countItems) => {
  const objectList = new Array(countItems);
  return objectList.fill(template);
};

const createMockComments = (countComments) => {
  const commentsList = createMockDataList('', countComments);
  return commentsList.map((el, index) => (
    {
      id: index,
      avatar: createAvatarUrl(),
      message: createMessageUser(),
      name: createNameUser()
    }
  ));
};

const createMockDescriptionPhoto = () => {
  const listTemplates = createMockDataList('',COUNT_MOCK_ITEMS);
  return Array.from(listTemplates, (el, index) => ({
    id: index,
    url: createMockUrl(),
    description: createDescription(),
    likes: getRandomInt(MIN_VALUE, COUNT_MOCK_ITEMS),
    comments: createMockComments(getRandomInt(MIN_VALUE, MAX_VALUE))
  }));
};

const mockData = createMockDescriptionPhoto();

export {mockData};
