const photo = document.querySelector('.big-picture__img').firstElementChild;
const describePhoto = document.querySelector('.social__caption');
const likesCount = document.querySelector('.likes-count');
const countShowLikes = document.querySelector('.social__comment-count');
const containerComment = document.querySelector('.social__comments');
const loadButton = document.querySelector('.social__comments-loader');
const firstNode = containerComment.firstElementChild;
const MIN_COUNT_COMMENT = 5;

const isShowButton = (countRendered, countAllComments) => {
  if (countRendered === countAllComments) {
    loadButton.classList.add('hidden');
  } else {
    loadButton.classList.remove('hidden');
  }
};

const clearWrapperComment = () => {
  containerComment.replaceChildren();
};

const setAttribute = (listOfElements, fragment) => {
  listOfElements.forEach(({avatar, message}) => {
    const cloneElement = firstNode.cloneNode(true);
    cloneElement.querySelector('.social__picture').setAttribute('src', avatar);
    cloneElement.querySelector('.social__text').textContent = message;
    fragment.append(cloneElement);
  });
  return fragment;
};

function wrapperMoreComments (dataOfComment) {
  return function() {
    let countComment = document.querySelectorAll('.social__comment').length;
    const nextComments = dataOfComment.slice(countComment, countComment + 5);
    const fragment = document.createDocumentFragment();
    containerComment.append(setAttribute(nextComments, fragment));
    countComment = document.querySelectorAll('.social__comment').length;
    countShowLikes.innerHTML = `${countComment} из <span class="comments-count">${dataOfComment.length}</span> комментариев`;
    isShowButton(countComment, dataOfComment.length);
  };
}

const renderComments = (dataOfComment) => {
  const fragment = document.createDocumentFragment();
  const slicedData = dataOfComment.slice(0, MIN_COUNT_COMMENT);
  clearWrapperComment();
  containerComment.append(setAttribute(slicedData, fragment));
  const countComment = document.querySelectorAll('.social__comment').length;
  countShowLikes.innerHTML = `${countComment} из <span class="comments-count">${dataOfComment.length}</span> комментариев`;
  isShowButton(countComment, dataOfComment.length);
};

const renderPopup = (dataOfPhoto) => {
  const onRenderMoreComments = wrapperMoreComments(dataOfPhoto.comments);
  photo.setAttribute('src', dataOfPhoto.url);
  describePhoto.textContent = dataOfPhoto.description;
  likesCount.textContent = dataOfPhoto.likes;
  renderComments(dataOfPhoto.comments);
  loadButton.onclick = onRenderMoreComments;
};

export { renderPopup, clearWrapperComment, wrapperMoreComments };
