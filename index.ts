import { startHttpServerService } from './src/core/http-server';
import { createAplicationService } from './src/core/application';
import { connectDatabaseService } from './src/core/database';

(async () => {
  try {
    const application = createAplicationService();
    await connectDatabaseService();
    startHttpServerService(application);
  } catch (error) {
    console.log(error.message);
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
