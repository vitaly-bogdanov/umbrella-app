
import dotenv from 'dotenv';

import { startMaster } from './root.master';
import { startWorker } from './root.worker';

dotenv.config({ path: `./.env.${process.env.NODE_ENV}` });

startMaster();
startWorker();
