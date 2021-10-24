import { Router } from 'express';

import { CATEGORY_PATH } from './categories.constant';
import {
  indexHandler,
  viewHandler,
  createHandler,
  updateHandler,
  destroyHandler,
} from './categories.handler';

export const categoryRouter: Router = Router()
  .get(CATEGORY_PATH, indexHandler)
  .get(`${CATEGORY_PATH}/:id`, viewHandler)
  .post(CATEGORY_PATH, createHandler)
  .put(`${CATEGORY_PATH}/:id`, updateHandler)
  .delete(`${CATEGORY_PATH}/:id`, destroyHandler);
