import logger from '../../configs/logger.configs.js';
import redisClient from '../../configs/redis.configs.js';
import verifyUserRepository from '../../repositories/authentication/verifyUser.repositories.js';

const accountVerificationService = async (email: string,id:string): Promise<void> => {
  try {
    await verifyUserRepository(email);
    await redisClient.del(`user:otp:${email}`);
    await redisClient.del(`user:profile:${id}`)
  } catch (error) {
    if (error instanceof Error) {
      logger.error(`Service Error: ${error.message}`);
      throw error;
    } else {
      logger.error(`Service Error: Unknown Error Occurred`);
      throw new Error('Unknown Error Occurred In Service');
    }
  }
};

export default accountVerificationService;
