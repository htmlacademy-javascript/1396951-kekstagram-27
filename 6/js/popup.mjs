import {mockData}from './createMockData.mjs';
import { getDataForCurrPhoto } from './getDataCurrentPhoto.mjs';
import { changeInfoOfPhoto } from './renderingPopup.mjs';

const popup = document.querySelector('.big-picture ');
const containerOfPhotos = document.querySelector('.pictures');
const closeButton = document.querySelector('#picture-cancel');

const closePopup = (evt) => {
  if (evt.key === 'Escape' || evt.button === 0 ) {
    popup.classList.add('hidden');
  }
};

const openPopup = (evt) => {
  evt.preventDefault();
  changeInfoOfPhoto(getDataForCurrPhoto(evt, mockData));
  popup.classList.remove('hidden');
};


const catchEvents = (evt, dataList) => {
  const nameElement = evt.target.tagName;

  if (nameElement === 'SPAN' || nameElement !== 'IMG') { evt.preventDefault(); }

  openPopup(evt, dataList);
};

const defineListeners = () => {
  document.addEventListener('keydown', closePopup);
  closeButton.addEventListener('click', closePopup);
  containerOfPhotos.addEventListener('click', catchEvents);
};

export { defineListeners };
