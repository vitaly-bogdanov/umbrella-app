import { credentialsEnv } from 'node-credentials';

import { TCredentialsForDatabase } from './credentials.type';

export const getCredentialsForDatabase = (): TCredentialsForDatabase => {
  console.log(credentialsEnv);
  return { ...credentialsEnv.DATABASE };
};
