const pictureElement = document.querySelector('.picture');
const lastSection = pictureElement.querySelector('section');

const createDomElement = (tagName, className) => {
  const newElement = document.createElement(tagName);
  return newElement.classList.add(className);
};

const addAtributesForElement = (bildingElement) => {
  let sectionPicture = createDomElement('section', 'picture');
  let linkPicture = createDomElement('a', 'picture__img');
  let img = createDomElement('img', 'picture__img');
  let pictureInfo = createDomElement('p', 'picture__info');
  let pictureComments = createDomElement('span', 'picture__comments');
  let pictureLikes = createDomElement('span', 'picture__likes');
  return sectionPicture;
};

const bildDomElements = (createdElement) => addAtributesForElement(createdElement);

const createNewElements = (elemetsList) => {
  elemetsList.forEach(element => {
    const newElement = bildDomElements(element);
    pictureElement.appendChild(newElement);
  });
};

export {createNewElements};
