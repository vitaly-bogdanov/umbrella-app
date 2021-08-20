import express from 'express';
import dotenv from 'dotenv';

import { router } from './src/core/api';

const app = express();
const port = 3000;

app.use(router);

app.listen(port, () => {
  console.log(`Timezones by location application is running on port ${port}.`);
});
