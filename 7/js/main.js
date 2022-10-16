import { mockData } from './createMockData.js';
import { renderPhotos } from './renderElements.js';
import { defineListeners } from './popup.js';

renderPhotos(mockData);
defineListeners(mockData);
