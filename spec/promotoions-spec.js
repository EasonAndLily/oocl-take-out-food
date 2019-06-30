let OverThirtyDiscountSix = require("../src/promotions/over-thirty-discount-six.js");
let Order = require("../src/order.js");
let SpecifiedItemHalfDiscount = require("../src/promotions/specified-item-half-discount.js");

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
});
