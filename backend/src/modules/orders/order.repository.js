const Order = require("./order.model");

class OrderRepository {
  async create(data) {
    return Order.create(data);
  }

  async findAll() {
    return Order.find().sort({
      createdAt: -1,
    });
  }

  async findById(id) {
    return Order.findById(id);
  }
}

module.exports = new OrderRepository();
