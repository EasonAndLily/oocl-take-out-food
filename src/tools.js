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
  let itemDetailsStr = this.printOrderDetails(report.itemDetails);
  let printPromiton = this.printPromotion(report.promotion);
  let promotionStr =
    printPromiton +
    `
      ` +
    "-----------------------------------";
  let totalPriceStr = report.totalPrice;
  return (
    `
      ============= 订餐明细 =============
      ${itemDetailsStr}
      -----------------------------------` +
    (printPromiton == ""
      ? ""
      : `
      ${promotionStr}`) +
    `
      总计：${totalPriceStr}元
      ===================================`
  ).trim();
}

function printOrderDetails(orderDetails) {
  let result = ``;
  orderDetails.forEach((item) => {
    result +=
      item.name +
      " x " +
      item.count +
      " = " +
      item.count * item.price +
      "元" +
      `
      `;
  });
  return result.trim();
}

function printPromotion(promotion) {
  if (promotion.discountPrice == 0) {
    return "";
  }
  let promotionsItems =
    promotion.itemNames.length > 0
      ? "(" + promotion.itemNames.join("，") + ")"
      : "";
  return (
    "使用优惠:" +
    `
      ` +
    promotion.type +
    promotionsItems +
    "，省" +
    promotion.discountPrice +
    "元" +
    `
    `
  ).trim();
}

module.exports = {
  covertInputsToItemsMap: covertInputsToItemsMap,
  printReport: printReport,
  printOrderDetails: printOrderDetails,
  printPromotion: printPromotion
};
