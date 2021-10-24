import { PrismaClient } from '@prisma/client';

import {
  getCredentialsForDatabase,
  TCredentialsForDatabase,
} from '../../common/credentials';
import { HOST, PORT } from './database.constant';

export const createPrismaClientService = () => {
  const { NAME, USER, PASSWORD }: TCredentialsForDatabase = getCredentialsForDatabase();
  return new PrismaClient({
    datasources: {
      db: { url: `mongodb://${USER}:${PASSWORD}@${HOST}:${PORT}/${NAME}` },
    },
  });
};

const prisma = createPrismaClientService();

export const connectDatabaseService = async () => {
  console.log('Connection start');
  await prisma.$connect();
  console.log('Connection success');
};

export const disconnectDatabaseService = async () => prisma.$disconnect();

export const seedDatabaseService = () => {};
