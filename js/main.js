import { mockData } from './createMockData.mjs';
import { renderPhotos } from './renderElements.mjs';
import { defineListeners } from './popup.mjs';

renderPhotos(mockData);
defineListeners(mockData);
