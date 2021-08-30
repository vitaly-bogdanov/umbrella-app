import 'reflect-metadata';
import express, { json } from 'express';
import hemlet from 'helmet';
import cors from 'cors';
import dotenv from 'dotenv';

import { router } from './src/core/api';

dotenv.config({ path: `./.env.${process.env.NODE_ENV}` });

export const app = express()
  .use(hemlet())
  .use(cors())
  .use(json())
  .use(router);
