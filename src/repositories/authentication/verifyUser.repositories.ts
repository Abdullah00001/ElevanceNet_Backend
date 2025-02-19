import logger from '../../configs/logger.configs.js';
import User from '../../models/user.models.js';

const verifyUserRepository = async (email: string): Promise<void> => {
  try {
    await User.findOneAndUpdate({ email }, { isVerified: true });
  } catch (error) {
    if (error instanceof Error) {
      logger.error(`Database Error:${error.message}`);
      throw error;
    } else {
      logger.error(`Database Error: Unknown Error Occurred`);
      throw new Error('Unknown Error Occurred In Database Operation');
    }
  }
};

export default verifyUserRepository;
