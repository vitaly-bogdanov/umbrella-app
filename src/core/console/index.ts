import { connectDatabaseService, disconnectDatabaseService } from '../database';

(async () => {
  try {
    await connectDatabaseService();


  } catch (error) {
    console.log(error);
  }
})();

process.on('exit', () => disconnectDatabaseService());