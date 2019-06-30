class PromotionStrategy {
  constructor(order) {
    this.order = order;
  }
  discountPrice() {
    throw new Error("You have to implement the method!");
  }
}

module.exports = PromotionStrategy;
