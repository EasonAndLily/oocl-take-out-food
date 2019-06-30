let OverThirtyDiscountSix = require("../src/promotions/over-thirty-discount-six.js");
let Order = require("../src/order.js");
let SpecifiedItemHalfDiscount = require("../src/promotions/specified-item-half-discount.js");
let ChoosePromotions = require("../src/promotions/choose-promotions.js");

describe("test promotions type", () => {
  it("over thirty discount six", () => {
    let itemDetails = new Map([["ITEM0013", 4], ["ITEM0022", 1]]);
    let overThirtyDiscountSix = new OverThirtyDiscountSix(
      new Order(itemDetails)
    );

    let result = overThirtyDiscountSix.discountPrice();
    expect(result).toEqual(6);
    expect(overThirtyDiscountSix.discountType).toEqual("满30减6元");
  });

  it("specified items will discount half", () => {
    let itemDetails = new Map([
      ["ITEM0001", 1],
      ["ITEM0013", 2],
      ["ITEM0022", 1]
    ]);
    let specifiedItemHalfDiscount = new SpecifiedItemHalfDiscount(
      new Order(itemDetails)
    );

    let result = specifiedItemHalfDiscount.discountPrice();
    expect(result).toEqual(13);
    expect(specifiedItemHalfDiscount.discountType).toEqual("指定菜品半价");
    expect(specifiedItemHalfDiscount.discountItems).toEqual([
      { id: "ITEM0001", name: "黄焖鸡", price: 18, count: 1 },
      { id: "ITEM0022", name: "凉皮", price: 8, count: 1 }
    ]);
  });

  it("not discount when item not include in specificed items", () => {
    let itemDetails = new Map([["ITEM0013", 4]]);
    let specifiedItemHalfDiscount = new SpecifiedItemHalfDiscount(
      new Order(itemDetails)
    );

    let result = specifiedItemHalfDiscount.discountPrice();
    expect(result).toEqual(0);
    expect(specifiedItemHalfDiscount.discountType).toEqual("指定菜品半价");
    expect(specifiedItemHalfDiscount.discountItems).toEqual([]);
  });

  it("test choose the best promotion that specificed item half discount", () => {
    let itemDetails = new Map([
      ["ITEM0001", 1],
      ["ITEM0013", 2],
      ["ITEM0022", 1]
    ]);

    let order = new Order(itemDetails);
    let choosePromotions = new ChoosePromotions(order);
    let result = choosePromotions.getBestPromotion();
    expect(result).toEqual({
      type: "指定菜品半价",
      itemNames: ["黄焖鸡", "凉皮"],
      discountPrice: 13
    });
  });

  it("test choose the best promotion that over thirty will discount six", () => {
    let itemDetails = new Map([["ITEM0013", 4], ["ITEM0022", 1]]);

    let order = new Order(itemDetails);
    let choosePromotions = new ChoosePromotions(order);
    let result = choosePromotions.getBestPromotion();
    expect(result).toEqual({
      type: "满30减6元",
      discountPrice: 6,
      itemNames: []
    });
  });

  it("test choose the best promotion that not discount", () => {
    let itemDetails = new Map([["ITEM0013", 4]]);

    let order = new Order(itemDetails);
    let choosePromotions = new ChoosePromotions(order);
    let result = choosePromotions.getBestPromotion();
    expect(result).toEqual({
      type: "",
      discountPrice: 0,
      itemNames: []
    });
  });
});
