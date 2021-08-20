import { Router } from 'express';

import { categoryRouter } from '../../apps/category';

export const router = new Router()
  .use(categoryRouter);
