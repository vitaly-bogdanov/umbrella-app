import { Server, createServer } from 'http';
import { Application } from 'express';

export const startHttpServerService = (app: Application): Server => createServer(app)
  .listen(process.env.PORT, () => console.log(`⚡ SERVER START pid: ${process.pid} ⚡`));
