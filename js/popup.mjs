import {mockData}from './createMockData.mjs';
import { getDataForCurrPhoto } from './getDataCurrentPhoto.mjs';
import { changeInfoOfPhoto } from './renderingPopup.mjs';

const popup = document.querySelector('.big-picture ');
const containerOfPhotos = document.querySelector('.pictures');
const closeButton = document.querySelector('#picture-cancel');

const closePopup = (evt) => {
  if (evt.key === 'Escape' || evt.button === 0 ) {
    popup.classList.add('hidden');
    closeButton.removeEventListener('click', closePopup);
    document.removeEventListener('keydown', closePopup);
  }
};

const openPopup = (evt) => {
  evt.preventDefault();
  closeButton.addEventListener('click', closePopup);
  document.addEventListener('keydown', closePopup);
  changeInfoOfPhoto(getDataForCurrPhoto(evt, mockData));
  popup.classList.remove('hidden');
};


const catchEvents = (evt, dataList) => {
  const nameElement = evt.target.tagName;
  if (nameElement !== 'IMG') { evt.preventDefault(); }
  openPopup(evt, dataList);
};

const defineListeners = () => {
  containerOfPhotos.addEventListener('click', catchEvents);
};

export { defineListeners };
