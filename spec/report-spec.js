// const Report = require("../src/report.js");
// const Order = require("../src/order.js");

// describe("test report", () => {
//   it("test get promoted items and price", () => {
//     let itemDetails = new Map([
//       ["ITEM0001", 1],
//       ["ITEM0013", 2],
//       ["ITEM0022", 1]
//     ]);
//     let order = new Order(itemDetails);

//     let promotedItemsObj = Report.getPromotedItemsObj(order);
//     expect(promotedItemsObj).toEqual({
//       type: "指定菜品半价",
//       items: ["黄焖鸡", "凉皮"],
//       discountPrice: 8
//     });
//   });
// });
