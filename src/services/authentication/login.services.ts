import logger from '../../configs/logger.configs.js';
import { ILoginServiceReturn } from '../../interfaces/authRequestBody.interfaces.js';
import {
  generateAccessToken,
  generateRefreshToken,
} from '../../utils/jwt.utils.js';

const loginService = (id: string, role: string): ILoginServiceReturn => {
  try {
    const accessToken = generateAccessToken({ sub: id, role }) as string;
    const refreshToken = generateRefreshToken({ sub: id, role }) as string;
    return { accessToken, refreshToken };
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

export default loginService;
