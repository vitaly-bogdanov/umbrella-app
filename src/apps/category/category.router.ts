import { Router } from 'express';

import { CATEGORY_PATH } from './category.constant';
import {
  indexHandler,
  viewHandler,
  createHandler,
  updateHandler,
  destroyHandler,
} from './category.handler';
import { exeptionCatchService } from '../../common/exeption';

export const categoryRouter: Router = Router()
  .get(CATEGORY_PATH, exeptionCatchService(indexHandler))
  .get(`${CATEGORY_PATH}/:id`, exeptionCatchService(viewHandler))
  .post(CATEGORY_PATH, exeptionCatchService(createHandler))
  .put(`${CATEGORY_PATH}/:id`, exeptionCatchService(updateHandler))
  .delete(`${CATEGORY_PATH}/:id`, exeptionCatchService(destroyHandler));
