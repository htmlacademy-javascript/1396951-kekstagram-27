const pictureElement = document.body.querySelector('.pictures');
let fragment = document.createDocumentFragment();

function createDomElement(tagName, className) {
  const newElement = document.createElement(tagName);
  newElement.classList.add(className);
  return newElement;
}

const addAtributesForElement = (bildingElement) => {
  const sectionPicture = createDomElement('div');
  const linkPicture = createDomElement('a', 'picture');
  const img = createDomElement('img', 'picture__img');
  const pictureInfo = createDomElement('p', 'picture__info');
  const pictureComments = createDomElement('span', 'picture__comments');
  const pictureLikes = createDomElement('span', 'picture__likes');
  sectionPicture.setAttribute('id','picture');
  linkPicture.setAttribute('href', bildingElement.url);
  img.setAttribute('src', bildingElement.url);
  img.setAttribute('width', '182');
  img.setAttribute('height', '182');
  img.setAttribute('alt', 'Случайная фотография');
  pictureComments.innerHTML = bildingElement.comments.length > 0 ? bildingElement.comments.length : 0;
  pictureLikes.innerHTML = bildingElement.likes;
  sectionPicture.appendChild(linkPicture);
  linkPicture.appendChild(img);
  linkPicture.appendChild(pictureInfo);
  pictureInfo.appendChild(pictureComments);
  pictureInfo.appendChild(pictureLikes);
  return sectionPicture;
};

const bildDomElements = (createdElement) => addAtributesForElement(createdElement);

const createNewElements = (elemetsList) => {
  elemetsList.forEach((element) => {
    fragment = bildDomElements(element);
    pictureElement.appendChild(fragment);
  });
};

export {createNewElements};
