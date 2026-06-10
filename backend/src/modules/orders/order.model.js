const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },

    lastName: {
      type: String,
      required: true,
    },

    age: {
      type: Number,
      required: true,
    },

    gender: {
      type: String,
      required: true,
    },

    patientAddress: {
      type: String,
      required: true,
    },

    dob: {
      type: Date,
      required: true,
    },

    hospitalNo: {
      type: String,
      required: true,
    },

    doctorId: {
      type: String,
    },

    categories: [String],

    orderDetails: String,

    patientDetailCardUrl: String,
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Order", orderSchema);
