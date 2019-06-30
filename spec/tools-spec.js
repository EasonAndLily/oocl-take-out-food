const tools = require("../src/tools.js");
const Order = require("../src/order.js");
const Report = require("../src/report.js");

describe("Take out food", function() {
  it("should return a map of items when parse input string", () => {
    let inputs = ["ITEM0001 x 1", "ITEM0013 x 2", "ITEM0022 x 1"];
    let result = tools.covertInputsToItemsMap(inputs);
    expect(result).toEqual(
      new Map([["ITEM0001", 1], ["ITEM0013", 2], ["ITEM0022", 1]])
    );
  });

  it("test print report method", () => {
    let itemsMap = new Map([["ITEM0001", 1], ["ITEM0013", 2], ["ITEM0022", 1]]);
    let order = new Order(itemsMap);

    let report = new Report(order);
    let result = tools.printReport(report);

    let expected =
      "============= 订餐明细 =============\n" +
      "黄焖鸡 x 1 = 18元\n" +
      "肉夹馍 x 2 = 12元\n" +
      "凉皮 x 1 = 8元\n" +
      "-----------------------------------\n" +
      "使用优惠:\n" +
      "指定菜品半价(黄焖鸡，凉皮)，省13元\n" +
      "-----------------------------------\n" +
      "总计：25元\n" +
      "===================================";
    expect(result).toEqual(expected);
  });

  it("test print order method", () => {
    let orderDetails = [
      { id: "ITEM0001", name: "黄焖鸡", price: 18.0, count: 1 },
      { id: "ITEM0013", name: "肉夹馍", price: 6.0, count: 2 },
      { id: "ITEM0022", name: "凉皮", price: 8.0, count: 1 }
    ];

    let result = tools.printOrderDetails(orderDetails);

    let expected =
      "黄焖鸡 x 1 = 18元\n" + "肉夹馍 x 2 = 12元\n" + "凉皮 x 1 = 8元\n";
    expect(result).toEqual(expected);
  });

  it("test print promotion", () => {
    let promotion = {
      type: "指定菜品半价",
      itemNames: ["黄焖鸡", "凉皮"],
      discountPrice: 13
    };

    let result = tools.printPromotion(promotion);

    let expected = "使用优惠:\n" + "指定菜品半价(黄焖鸡，凉皮)，省13元\n";
    expect(result).toEqual(expected);
  });
});
