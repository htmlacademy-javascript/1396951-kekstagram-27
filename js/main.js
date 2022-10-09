import { mockData } from './createMockData.mjs';
import { createNewElements } from './renderElements.mjs';
import { defineListeners } from './popup.mjs';

createNewElements(mockData);
defineListeners(mockData);

