const photo = document.querySelector('.big-picture__img').firstElementChild;
const describePhoto = document.querySelector('.social__caption');
const likesCount = document.querySelector('.likes-count');
// const containerOfPhoto = document.querySelector('.big-picture__social');
// const commentsOfPicture = document.querySelector('.social__comment-count');
// const allCountComments = document.querySelector('.comments-count');
// const commentText = document.querySelector('.social__text');
// const wrapperComment = document.querySelector('.social__comment');
// const avatar = wrapperComment.querySelector('.social__picture');


const changeInfoOfPhoto = (dataOfPhoto) => {
  photo.setAttribute('src', dataOfPhoto.url);
  describePhoto.textContent = dataOfPhoto.description;
  likesCount.textContent = dataOfPhoto.likes;
};

// const changeInfoOfComments = (dataOfComment) => {

// };

export { changeInfoOfPhoto };
