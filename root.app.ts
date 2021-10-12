import express, { json, Express } from 'express';
import hemlet from 'helmet';
import cors from 'cors';

import { router } from './src/core/api';

export const app: Express = express()
  .use(hemlet())
  .use(cors())
  .use(json())
  .use(router);
