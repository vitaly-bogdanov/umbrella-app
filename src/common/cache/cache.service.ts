// import { RedisClient, createClient } from 'redis';

// let client: RedisClient;

// export const cacheRedisService = async <CachedValue>(key, callback): Promise<CachedValue> => {
//   client.get(key, (error, value) => {
//     Promise.resolve(value);
//   });
//   const newValue = await callback();
//   client.set(key, newValue, (error, value) => {

//   });
  
// };

// export const startRedisService = (): void => {
//   client = createClient();
// };
