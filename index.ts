import { startServer } from './root.server';

(async () => {
  try {
    startServer();
  } catch (error) {

  }
})();

process
  .on('uncaughtException', (error) => {
    console.error(error.message);
    console.error(error.stack);
    process.exit(1);
  })
  .on('SIGINT', () => {
    console.log(`SIGINT ${process.pid}`);
    process.exit(0);
  })
  .on('SIGTERM', () => {
    console.log(`SIGTERM ${process.pid}`);
    process.exit(0);
  })
  .on('SIGUSR2', () => {
    console.log(`SIGUSR2 ${process.pid}`);
    process.exit(1);
  });
