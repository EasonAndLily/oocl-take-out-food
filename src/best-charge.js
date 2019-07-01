const Report = require("../src/report.js");
const Order = require("../src/order.js");
const tools = require("../src/tools.js");

function bestCharge(selectedItems) {
  let itemsMap = tools.covertInputsToItemsMap(selectedItems);
  let order = new Order(itemsMap);
  let report = new Report(order);
  return tools.printReport(report);
}

module.exports = bestCharge;
