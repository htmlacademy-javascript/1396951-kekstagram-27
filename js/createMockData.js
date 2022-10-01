import { getRandomInt, getlength } from './utils';

const COUNT_MOCK_ITEMS = 25;
const MIN_VALUE = 0;
const NAMES = ['Vadim', 'Anton', 'Vasya', 'Petya', 'Irina', 'Sacha', 'Ekaterina'];
const DESCRIPTION_PHOTOS = [
  'Всё отлично! В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.'
];

const createMockUrl = () => `photos/${ String(getRandomInt(MIN_VALUE, COUNT_MOCK_ITEMS)) }.jpg`;

const createAvatarUrl = () => `img/avatar-${ String(getRandomInt(MIN_VALUE, COUNT_MOCK_ITEMS))}.svg`;

const createMessageUser = () => DESCRIPTION_PHOTOS[getRandomInt(MIN_VALUE, getlength(DESCRIPTION_PHOTOS))];

const createNameUser = () => NAMES[getRandomInt(MIN_VALUE, getlength(NAMES))];

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


export const createMockObj = (countItems) => {
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
