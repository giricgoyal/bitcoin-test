
import express from 'express';
import * as controller from './controller';

export const addressRouter = express.Router();

addressRouter.get('/:addressId/details', controller.getById);

addressRouter.get('/:addressId/transactions', controller.getTransactionById);