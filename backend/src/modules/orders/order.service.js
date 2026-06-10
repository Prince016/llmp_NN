const repository = require("./order.repository");

class OrderService {
  async createOrder(data) {
    return repository.create(data);
  }

  async getOrders() {
    return repository.findAll();
  }

  async getOrderById(id) {
    return repository.findById(id);
  }
}

module.exports = new OrderService();
