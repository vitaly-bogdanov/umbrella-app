import { Router } from 'express';

import { categoryRouter } from '../../components/categories';

export const router = Router()
  .use(categoryRouter);
