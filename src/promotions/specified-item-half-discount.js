let PromotionStrategy = require("./promotion-strategy.js");
let specifiedItems = require("../promotions.js").loadPromotions()[1];

class SpecifiedItemHalfDiscount extends PromotionStrategy {
  constructor(order) {
    super(order);
    this.discountType = "指定菜品半价";
    this.discountItems = this.order.itemDetails.filter((item) =>
      specifiedItems.items.includes(item.id)
    );
  }

  discountPrice() {
    if (this.discountItems.length <= 0) {
      return 0;
    }
    return this.discountItems
      .map((item) => (item.price * item.count) / 2)
      .reduce((sum, price) => sum + price);
  }
}

module.exports = SpecifiedItemHalfDiscount;
