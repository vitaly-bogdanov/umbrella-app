import cluster from 'cluster';
import os from 'os';

export const startMaster = () => {
  if (cluster.isMaster) {
    cluster.schedulingPolicy = cluster.SCHED_RR;
    os.cpus().forEach(() => {
      cluster.fork();
    });
    cluster
      .on('fork', (worker) => {
        console.log(`Worker #${worker.id} is online =)`);
      })
      .on('listening', (worker, address) => {
        console.log(`The worker #${worker.id} is now connected to ${JSON.stringify(address)}`);
        // Worker is waiting for Master's message
        //worker.on('message', messageHandler);
      })
      .on('disconnect', (worker) => {
        console.log(`The worker #${worker.id} has disconnected`);
      })
      .on('exit', (worker, code, signal) => {
        console.error(`Node cluster worker ${worker.process.pid} exited: code ${code}, signal ${signal}`);
        cluster.fork();
      });
  }
};
