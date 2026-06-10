const express = require("express");

const { createOrder, getOrders, getOrderById } = require("./order.controller");

const router = express.Router();

router.post("/", createOrder);

router.get("/", getOrders);

router.get("/:id", getOrderById);

module.exports = router;
