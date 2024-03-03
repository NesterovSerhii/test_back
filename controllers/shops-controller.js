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

export default {
  getAllShops: ctrlWrapper(getAllShops),
  getShopById: ctrlWrapper(getShopById),
};