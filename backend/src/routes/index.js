const express = require("express");

const orderRoutes = require("../modules/orders/order.routes");

const router = express.Router();

router.use("/orders", orderRoutes);

module.exports = router;
