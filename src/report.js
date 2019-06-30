let ChoosePromotions = require("./promotions/choose-promotions.js");

class Report {
  constructor(order) {
    this.itemDetails = order.itemDetails;
    this.promotion = new ChoosePromotions(order).getBestPromotion();
    this.totalPrice = order.calTotalPrice() - this.promotion.discountPrice;
  }
}

module.exports = Report;
