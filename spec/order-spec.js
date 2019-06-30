let Order = require("../src/order.js");

describe("Test order", function() {
  it("should return array of item details when get a map of items", () => {
    let itemsMap = new Map([["ITEM0001", 1], ["ITEM0013", 2], ["ITEM0022", 1]]);
    let result = Order.covertItemMapToDetails(itemsMap);
    expect(result).toEqual([
      { id: "ITEM0001", name: "黄焖鸡", price: 18.0, count: 1 },
      { id: "ITEM0013", name: "肉夹馍", price: 6.0, count: 2 },
      { id: "ITEM0022", name: "凉皮", price: 8.0, count: 1 }
    ]);
  });

  it("should return total price when get array of item details", () => {
    let itemDetails = new Map([
      ["ITEM0001", 1],
      ["ITEM0013", 2],
      ["ITEM0022", 1]
    ]);
    let order = new Order(itemDetails);
    let result = order.calTotalPrice(itemDetails);
    expect(result).toEqual(38);
  });
});
