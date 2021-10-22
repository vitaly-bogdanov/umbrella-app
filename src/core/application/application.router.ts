import { Router } from 'express';

import { categoryRouter } from '../../components/category';

export const router = Router()
  .use(categoryRouter);
