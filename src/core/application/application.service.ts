import express, { json, Application } from 'express';
import hemlet from 'helmet';
import cors from 'cors';

import { router } from './application.router';
import { errorHandlerMiddleware } from '../../common/error';

export const createAplicationService = (): Application => express()
  .use(hemlet())
  .use(cors())
  .use(json())
  .use(router)
  .use(errorHandlerMiddleware);
