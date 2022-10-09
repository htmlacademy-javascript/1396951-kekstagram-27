const pictureElement = document.body.querySelector('.pictures');
let fragment = document.createDocumentFragment();

const addAtributesForElement = (bildingElement, template) => {
  template.querySelector('.picture').setAttribute('href', bildingElement.url);
  template.querySelector('.picture').setAttribute('data-id', bildingElement.id);
  template.querySelector('.picture__img').setAttribute('src', bildingElement.url);
  template.querySelector('.picture__comments').textContent = bildingElement.comments.length > 0 ? bildingElement.comments.length : 0;
  template.querySelector('.picture__likes').textContent = bildingElement.likes;
  return template;
};

const bildDomElements = (createdElement, templateNode) => addAtributesForElement(createdElement, templateNode);

const createNewElements = (elemetsList) => {
  elemetsList.forEach((element) => {
    const template = document.querySelector('#picture').content.cloneNode(true);
    fragment = bildDomElements(element, template);
    pictureElement.appendChild(fragment);
  });
};

export {createNewElements};
