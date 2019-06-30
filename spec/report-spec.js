const Report = require("../src/report.js");
const Order = require("../src/order.js");

describe("test report", () => {
  it("test get promoted items and price", () => {
    let itemsMap = new Map([["ITEM0001", 1], ["ITEM0013", 2], ["ITEM0022", 1]]);
    let order = new Order(itemsMap);

    let report = new Report(order);

    expect(report.itemDetails).toEqual([
      { id: "ITEM0001", name: "黄焖鸡", price: 18.0, count: 1 },
      { id: "ITEM0013", name: "肉夹馍", price: 6.0, count: 2 },
      { id: "ITEM0022", name: "凉皮", price: 8.0, count: 1 }
    ]);
    expect(report.promotion).toEqual({
      type: "指定菜品半价",
      itemNames: ["黄焖鸡", "凉皮"],
      discountPrice: 13
    });
    expect(report.totalPrice).toEqual(25);
  });
});
