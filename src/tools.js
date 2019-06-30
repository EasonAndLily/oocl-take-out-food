function covertInputsToItemsMap(inputs) {
  let itemsMap = new Map();
  inputs.forEach((item) => {
    let matchs = item.split(" x ");
    let count = parseInt(matchs[1]);
    itemsMap.set(matchs[0], count);
  });
  return itemsMap;
}

function printReport(report) {
  return (
    "============= 订餐明细 =============\n" +
    this.printOrderDetails(report.itemDetails) +
    "-----------------------------------\n" +
    this.printPromotion(report.promotion) +
    "-----------------------------------\n" +
    "总计：" +
    report.totalPrice +
    "元\n" +
    "==================================="
  );
}

function printOrderDetails(orderDetails) {
  let result = "";
  orderDetails.forEach((item) => {
    result =
      result +
      item.name +
      " x " +
      item.count +
      " = " +
      item.count * item.price +
      "元\n";
  });
  return result;
}

function printPromotion(promotion) {
  return (
    "使用优惠:\n" +
    promotion.type +
    "(" +
    promotion.itemNames.join("，") +
    ")，省" +
    promotion.discountPrice +
    "元\n"
  );
}

module.exports = {
  covertInputsToItemsMap: covertInputsToItemsMap,
  printReport: printReport,
  printOrderDetails: printOrderDetails,
  printPromotion: printPromotion
};
