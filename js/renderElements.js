const pictureElement = document.body.querySelector('.pictures');
let fragment = document.createDocumentFragment();

const createElement = (bildingElement, template) => {
  template.querySelector('.picture').setAttribute('href', bildingElement.url);
  template.querySelector('.picture').setAttribute('data-id', bildingElement.id);
  template.querySelector('.picture__img').setAttribute('src', bildingElement.url);
  template.querySelector('.picture__comments').textContent = bildingElement.comments.length;
  template.querySelector('.picture__likes').textContent = bildingElement.likes;
  return template;
};

const renderPhotos = (elemetsList) => {
  elemetsList.forEach((element) => {
    const template = document.querySelector('#picture').content.cloneNode(true);
    fragment = createElement(element, template);
    pictureElement.appendChild(fragment);
  });
};

export {renderPhotos};
