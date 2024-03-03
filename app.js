import express from 'express'
import logger from 'morgan'
import cors from 'cors'
import 'dotenv/config'
// import contactsRouter from './routes/api/contacts.js'
import shopsRouter from './routes/api/shops.js'
import {
  handleNotFound,
  handleBadRequest,
  handleInternalServerError,
} from './middlewares/errorHandler.js';
const app = express()
const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'
app.use(logger(formatsLogger))
const corsOptions = {
  origin: ['http://localhost:3000', 'http://192.168.1.56:3000'],
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json())
app.use('/api/shops', shopsRouter);
app.use(handleNotFound);
app.use(handleBadRequest);
app.use(handleInternalServerError);
export default app
