const getDataForCurrentPhoto = (evt, dataList) => {
  const idPhoto = evt.target.parentNode.dataset.id;
  return dataList[idPhoto];
};

export { getDataForCurrentPhoto };
