const photo = document.querySelector('.big-picture__img').firstElementChild;
const describePhoto = document.querySelector('.social__caption');
const likesCount = document.querySelector('.likes-count');
// const containerOfPhoto = document.querySelector('.big-picture__social');
// const commentsOfPicture = document.querySelector('.social__comment-count');
// const allCountComments = document.querySelector('.comments-count');
// const commentText = document.querySelector('.social__text');
// const wrapperComment = document.querySelector('.social__comment');
// const avatar = wrapperComment.querySelector('.social__picture');


const renderPopup = (dataOfPhoto) => {
  photo.setAttribute('src', dataOfPhoto.url);
  describePhoto.textContent = dataOfPhoto.description;
  likesCount.textContent = dataOfPhoto.likes;
//   changeInfoOfComments()
  // deletedOldComments();
};

const changeInfoOfComments = (dataOfComment) => {
  let fragment = document.createDocumentFragment();
  const comment = document.querySelector('.social__comments').cloneNode(true);

  dataOfComment.forEach(element => {
    comment.querySelector('img').setAttribute('src',dataOfComment.avatar);
    comment.querySelector('p').textContent = dataOfComment.message;
    fragment.append(comment);
    console.log(comment)
  });


};

const deletedOldComments = () => {
  const oldComments = document.querySelector('.social__comments');
  if(oldComments) {
    oldComments.remove();
  }
};

export { renderPopup };
