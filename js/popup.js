import {mockData} from './createMockData.js';
import { getDataForCurrentPhoto } from './getDataCurrentPhoto.js';
import { renderPopup } from './renderingPopup.js';
import { isClick, isEscape } from './utils.js';

const popup = document.querySelector('.big-picture ');
const containerOfPhotos = document.querySelector('.pictures');
const closeButton = document.querySelector('#picture-cancel');
const body = document.querySelector('body');

const onClosePopup = (evt) => {
  if (isEscape(evt) || isClick(evt)) {
    popup.classList.add('hidden');
    body.classList.remove('modal-open');
    closeButton.removeEventListener('click', onClosePopup);
    document.removeEventListener('keydown', onClosePopup);
  }
};

const onOpenPopup = (evt) => {
  evt.preventDefault();
  body.classList.add('modal-open');
  closeButton.addEventListener('click', onClosePopup);
  document.addEventListener('keydown', onClosePopup);
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
