import Joi from 'joi';
import { Schema, model } from "mongoose";

const orderSchema = Joi.object({
  customer: Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    phone: Joi.string().required(),
    address: Joi.string().required(),
  }).required(),
  items: Joi.array().items(
    Joi.object({
      name: Joi.string().required(),
      quantity: Joi.number().integer().min(1).required(),
      price: Joi.number().min(0).required(),
    })
  ).required(),
  total: Joi.number().min(0).required(),
});

export default orderSchema;
