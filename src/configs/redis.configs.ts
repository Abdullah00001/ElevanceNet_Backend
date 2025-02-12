import { Redis } from 'ioredis';
import {
  environment,
  REDIS_DEVELOPMENT_URI,
  REDIS_PRODUCTION_URI,
} from '../const.js';

const redisClient = new Redis(
  environment === 'production' ? REDIS_PRODUCTION_URI : REDIS_DEVELOPMENT_URI
);

redisClient.on('connect', () => {
  console.log('✔️ Connected to Redis');
});

redisClient.on('error', (err) => {
  console.error('❌ Redis connection error:', err);
});

export default redisClient;
