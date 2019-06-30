let OverThirtyDiscountSix = require("./over-thirty-discount-six.js");
let SpecidfiedItemHalfDiscount = require("./specified-item-half-discount.js");

class ChoosePromotions {
  constructor(order) {
    this.order = order;
    this.promotionStrategy = [];
    this.promotionStrategy.push(new OverThirtyDiscountSix(this.order));
    this.promotionStrategy.push(new SpecidfiedItemHalfDiscount(this.order));
  }

  getBestPromotion() {
    let bestPromtion = this.promotionStrategy.sort((typeA, typeB) =>
      typeA.discountPrice() > typeB.discountPrice() ? -1 : 1
    )[0];
    let itemNames = [];
    if (bestPromtion.discountItems && bestPromtion.discountItems.length > 0) {
      itemNames = bestPromtion.discountItems.map((item) => item.name);
    }
    return {
      type: bestPromtion.discountPrice() == 0 ? "" : bestPromtion.discountType,
      itemNames: itemNames,
      discountPrice: bestPromtion.discountPrice()
    };
  }
}

module.exports = ChoosePromotions;
