import express from "express";
import shopsController from "../../controllers/shops-controller.js";
import { isValidId } from '../../middlewares/index.js'
import validateBody from '../../decorators/validateBody.js'
import orderSchema from "../../models/Order.js";

const shopsRouter = express.Router();
shopsRouter.get('/', shopsController.getAllShops);
shopsRouter.get('/:id', isValidId, shopsController.getShopById);
shopsRouter.post('/submit-order', validateBody(orderSchema), shopsController.submitOrder);

export default shopsRouter;