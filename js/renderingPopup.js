const photo = document.querySelector('.big-picture__img').firstElementChild;
const describePhoto = document.querySelector('.social__caption');
const likesCount = document.querySelector('.likes-count');
const countShowLikes = document.querySelector('.social__comment-count');
const containerComment = document.querySelector('.social__comments');
const loadButton = document.querySelector('.social__comments-loader');

const deletedOldComments = (comments) => {
  if(comments) {
    comments.forEach((el) => el.remove());
  }
};

function wrapperMoreComments (dataOfComment) {
  return function() {
    const countComment = document.querySelectorAll('.social__comment').length;

    const pastOfComments = dataOfComment.slice(countComment, countComment + 4);
    pastOfComments.forEach((element) => {
      const firstNode = containerComment.firstElementChild.cloneNode(true);
      firstNode.querySelector('img').setAttribute('src', element.avatar);
      firstNode.querySelector('p').textContent = element.message;
      containerComment.append(firstNode);
    });
    countShowLikes.innerHTML = `${countComment} из <span class="comments-count">${dataOfComment.length}</span> комментариев`;
  };
}

const renderComments = (dataOfComment) => {
  const elementsComment = document.querySelectorAll('.social__comment');

  for (let index = 0; index < 4; index++) {
    const firstNode = containerComment.firstElementChild.cloneNode(true);
    deletedOldComments(elementsComment);
    firstNode.querySelector('img').setAttribute('src', dataOfComment[index].avatar);
    firstNode.querySelector('p').textContent = dataOfComment[index].message;
    containerComment.append(firstNode);
  }
  const countComment = document.querySelectorAll('.social__comment').length;
  countShowLikes.innerHTML = `${countComment} из <span class="comments-count">${dataOfComment.length}</span> комментариев`;
};

const renderPopup = (dataOfPhoto) => {
  const renderMoreComments = wrapperMoreComments(dataOfPhoto.comments);
  photo.setAttribute('src', dataOfPhoto.url);
  describePhoto.textContent = dataOfPhoto.description;
  likesCount.textContent = dataOfPhoto.likes;
  renderComments(dataOfPhoto.comments);
  loadButton.addEventListener('click', renderMoreComments);
};

export { renderPopup };
