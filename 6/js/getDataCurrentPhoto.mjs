const getDataForCurrentlyPhoto = (evt, dataList) => {
  const idPhoto = evt.target.parentNode.dataset.id;
  return dataList[idPhoto];
};

export { getDataForCurrentlyPhoto };
