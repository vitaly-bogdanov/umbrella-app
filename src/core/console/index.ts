import { connectDatabaseService } from '../database';

(async () => {
  try {
    await connectDatabaseService();


  } catch (error) {
    console.log(error);
  }
})();
