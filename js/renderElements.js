const pictureElement = document.body.querySelector('.pictures');

const createElement = (bildingElement, template) => {
  const {url, id, likes} = bildingElement;
  template.querySelector('.picture').setAttribute('href', url);
  template.querySelector('.picture').setAttribute('data-id', id);
  template.querySelector('.picture__img').setAttribute('src', url);
  template.querySelector('.picture__comments').textContent = bildingElement.comments.length;
  template.querySelector('.picture__likes').textContent = likes;
  return template;
};

const renderPhotos = (elemetsList) => {
  let fragment = document.createDocumentFragment();
  elemetsList.forEach((element) => {
    const template = document.querySelector('#picture').content.cloneNode(true);
    fragment = createElement(element, template);
    pictureElement.appendChild(fragment);
  });
};

export {renderPhotos};
