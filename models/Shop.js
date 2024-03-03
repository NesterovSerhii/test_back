import { Schema, model } from "mongoose";
import Joi from "joi";

const drugSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  isInCart: {
    type: Boolean,
    default: false
  }
});

const shopSchema = new Schema({
  title: {
    type: String,
    required: [true, "Set title for shop"]
  },
  drugs: {
    type: [drugSchema],
    required: true
  }
});

const Shop = model("Shop", shopSchema);

const validateShop = (shop) => {
  const schema = Joi.object({
    title: Joi.string().required(),
    drugs: Joi.array().items(
      Joi.object({
        name: Joi.string().required(),
        price: Joi.number().required(),
        url: Joi.string().required(),
        isInCart: Joi.boolean()
      })
    ).required()
  });
  return schema.validate(shop);
};

export { Shop, validateShop };
