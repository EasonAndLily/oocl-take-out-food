let Items = require("./items.js");

class Order {
  constructor(itemsMap) {
    this.itemDetails = Order.covertItemMapToDetails(itemsMap);
  }

  get getItemDetails() {
    return this.itemDetails;
  }

  calTotalPrice() {
    return this.itemDetails
      .map((item) => item.count * item.price)
      .reduce((sum, price) => {
        return sum + price;
      });
  }

  static covertItemMapToDetails(itemsMap) {
    let allItems = Items.loadAllItems();
    return allItems
      .filter((item) => Array.from(itemsMap.keys()).includes(item.id))
      .map((item) => {
        let count = itemsMap.get(item.id);
        item.count = count;
        return item;
      });
  }
}

module.exports = Order;
