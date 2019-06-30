function covertInputsToItemsMap(inputs) {
  let itemsMap = new Map();
  inputs.forEach((item) => {
    let matchs = item.split(" x ");
    let count = parseInt(matchs[1]);
    itemsMap.set(matchs[0], count);
  });
  return itemsMap;
}

module.exports = {
  covertInputsToItemsMap: covertInputsToItemsMap
};
