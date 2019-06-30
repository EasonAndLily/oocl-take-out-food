let PromotionStrategy = require("./promotion-strategy.js");

class OverThirtyDiscountSix extends PromotionStrategy {
  constructor(order) {
    super(order);
    this.discountType = "满30减6元";
  }

  discountPrice() {
    if (this.order.calTotalPrice() > 30) {
      return 6;
    }

    return 0;
  }
}

module.exports = OverThirtyDiscountSix;
