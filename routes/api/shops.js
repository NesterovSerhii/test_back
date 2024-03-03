import express from "express";
import shopsController from "../../controllers/shops-controller.js";
import { isValidId } from "../../middlewares/index.js";
// import { validateBody } from "../../decorators/index.js";

const shopsRouter = express.Router();
shopsRouter.get('/', shopsController.getAllShops);
shopsRouter.get('/:id', isValidId, shopsController.getShopById);

export default shopsRouter;