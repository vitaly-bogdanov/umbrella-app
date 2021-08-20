import { Router } from 'express';

import { CATEGORY_PATH } from './category.constant';
import {
  indexHandler,
  viewHandler,
  createHandler,
  updateHandler,
  destroyHandler,
} from './category.handler';

export const categoryRouter = new Router()
  .get(CATEGORY_PATH, indexHandler)
  .get(`${CATEGORY_PATH}/:id`, viewHandler)
  .post(CATEGORY_PATH, createHandler)
  .put(`${CATEGORY_PATH}/:id`, updateHandler)
  .delete(`${CATEGORY_PATH}/:id`, destroyHandler);
