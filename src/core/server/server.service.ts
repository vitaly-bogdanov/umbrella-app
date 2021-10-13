import http from 'http';
import { Application } from 'express';

export const startHttpServerService = (app: Application): http.Server => http
  .createServer(app)
  .listen(process.env.PORT, () => console.log(`⚡ SERVER START pid: ${process.pid} ⚡`));
