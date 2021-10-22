import express, { json, Application } from 'express';
import hemlet from 'helmet';
import cors from 'cors';

import { router } from './application.router';

export const createApllicationService = (): Application => express()
  .use(hemlet())
  .use(cors())
  .use(json())
  .use(router);
