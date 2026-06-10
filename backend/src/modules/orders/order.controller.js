const service = require("./order.service");

const { createOrderSchema } = require("./order.validation");

exports.createOrder = async (req, res) => {
  try {
    const validated = createOrderSchema.parse(req.body);

    const order = await service.createOrder(validated);

    return res.status(201).json({
      success: true,
      data: order,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getOrders = async (req, res) => {
  const orders = await service.getOrders();

  res.json({
    success: true,
    data: orders,
  });
};

exports.getOrderById = async (req, res) => {
  const order = await service.getOrderById(req.params.id);

  res.json({
    success: true,
    data: order,
  });
};
