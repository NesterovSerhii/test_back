import HttpError from '../helpers/HttpError.js';
import { ctrlWrapper } from '../decorators/index.js';
import { Shop } from '../models/Shop.js';
import Order from '../models/Order.js';

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
  try {
    console.log('Received order:', req.body);
    const { customer, items, total } = req.body;

    const order = new Order({
      customer,
      items,
      total,
    });

    await order.save();
    console.log('Order Submitted:', { customer, items, total });

    res.json({ message: 'Order submitted successfully!' });
  } catch (error) {

    console.error('Error submitting order:', error);
    throw HttpError(500, 'Internal Server Error');
  }
};

export default {
  getAllShops: ctrlWrapper(getAllShops),
  getShopById: ctrlWrapper(getShopById),
  submitOrder: ctrlWrapper(submitOrder),
};