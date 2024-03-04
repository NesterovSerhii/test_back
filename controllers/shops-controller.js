import HttpError from '../helpers/HttpError.js';
import { ctrlWrapper } from '../decorators/index.js';
import { Shop } from '../models/Shop.js';

const getAllShops = async (req, res) => {
  const result = await Shop.find();
   if (!result) {
    throw HttpError(404, `Not found`);
  }
  res.json(result);
};

 const getShopById = async (req, res) => {
  const { id } = req.params;
  const result = await Shop.findById(id);
  if (!result) {
    throw HttpError(404, `Not found`);
  }
  res.json(result);
};

const submitOrder = async (req, res) => {
  const { customer, items, total } = req.body;

  // Save the order data to the database (assuming you have an Order model)
  // Example: create an Order model and use it to save the order data
  // const order = new Order({ customer, items, total });
  // await order.save();

  // For demonstration purposes, you can log the order data
  console.log('Order Submitted:', { customer, items, total });

  res.json({ message: 'Order submitted successfully!' });
};
export default {
  getAllShops: ctrlWrapper(getAllShops),
  getShopById: ctrlWrapper(getShopById),
  submitOrder: ctrlWrapper(submitOrder),
};