import {mockData}from './createMockData.mjs';
import { getDataForCurrentlyPhoto } from './getDataCurrentPhoto.mjs';
import { renderPopup } from './renderingPopup.mjs';
import { isEscapeOrClick } from './utils.mjs';

const popup = document.querySelector('.big-picture ');
const containerOfPhotos = document.querySelector('.pictures');
const closeButton = document.querySelector('#picture-cancel');

const onClosePopup = (evt) => {
  if (isEscapeOrClick(evt)) {
    popup.classList.add('hidden');
    closeButton.removeEventListener('click', onClosePopup);
    document.removeEventListener('keydown', onClosePopup);
  }
};

const onOpenPopup = (evt) => {
  evt.preventDefault();
  closeButton.addEventListener('click', onClosePopup);
  document.addEventListener('keydown', onClosePopup);
  renderPopup(getDataForCurrentlyPhoto(evt, mockData));
  popup.classList.remove('hidden');
};

const catchEvents = (evt, dataList) => {
  const nameElement = evt.target.tagName;
  if (nameElement !== 'IMG') { evt.preventDefault(); }
  onOpenPopup(evt, dataList);
};

const defineListeners = () => {
  containerOfPhotos.addEventListener('click', catchEvents);
};

export { defineListeners };
