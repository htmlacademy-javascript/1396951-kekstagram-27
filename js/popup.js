import {mockData} from './createMockData.js';
import { getDataForCurrentPhoto } from './getDataCurrentPhoto.js';
import { clearWrapperComment, renderPopup } from './renderingPopup.js';
import { isClick, isEscape } from './utils.js';

const popup = document.querySelector('.big-picture ');
const containerOfPhotos = document.querySelector('.pictures');
const closeButton = document.querySelector('#picture-cancel');
const body = document.querySelector('body');

const onClosePopup = () => {
  popup.classList.add('hidden');
  body.classList.remove('modal-open');
  clearWrapperComment();
  closeButton.removeEventListener('click', onClosePopup);
  document.removeEventListener('keydown', onClosePopup);
};

const onEscButtonKeyDown = (evt) => {
  if (isEscape(evt)) {
    onClosePopup(evt);
  }
};

const onClick = (evt) => {
  if (isClick(evt)) {
    onClosePopup(evt);
  }
};

const onOpenPopup = (evt) => {
  evt.preventDefault();
  body.classList.add('modal-open');
  closeButton.addEventListener('click', onClick);
  document.addEventListener('keydown', onEscButtonKeyDown);
  renderPopup(getDataForCurrentPhoto(evt, mockData));
  popup.classList.remove('hidden');
};

const catchEvents = (evt, dataList) => {
  const nameElement = evt.target.tagName;
  if (nameElement !== 'IMG') {
    evt.preventDefault();
  }
  onOpenPopup(evt, dataList);
};

const defineListeners = () => {
  containerOfPhotos.addEventListener('click', catchEvents);
};

export { defineListeners };
