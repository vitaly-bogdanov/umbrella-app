import http from 'http';

import { app } from './root.app.js';

export const startServer = () => {
  http
    .createServer(app)
    .listen(process.env.PORT, () => console.log(`⚡ SERVER START pid: ${process.pid} ⚡`));
};
