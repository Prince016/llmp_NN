const { z } = require("zod");

const createOrderSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  age: z.number(),
  gender: z.string(),
  patientAddress: z.string(),
  dob: z.string(),
  hospitalNo: z.string(),
  doctorId: z.string(),
  categories: z.array(z.string()),
  orderDetails: z.string(),
});

module.exports = { createOrderSchema };
