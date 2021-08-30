import { createConnection, Connection, ConnectionOptions } from 'typeorm';

import { TYPE_DATA_BASE } from './typeorm.constant';

const config: ConnectionOptions = {
  type: TYPE_DATA_BASE,
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  entities: [
    './src/apps/**/*.entity{.ts,.js}',
  ],
  migrations: [
    './src/apps/**/*.migration{.ts,.js}',
  ],
  cli: {
    migrationsDir: './src/core/typeorm/migrations',
  },
};

export const typeormGetConnectionService = async (): Promise<Connection> => createConnection(config);
