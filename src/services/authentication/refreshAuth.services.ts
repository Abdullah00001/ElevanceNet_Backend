import { JwtPayload } from 'jsonwebtoken';
import { IRefreshAuthServiceReturn } from '../../interfaces/authRequestBody.interfaces.js';
import {
  generateAccessToken,
  generateRefreshToken,
} from '../../utils/jwt.utils.js';
import logger from '../../configs/logger.configs.js';

const refreshAuthService = (decoded: JwtPayload): IRefreshAuthServiceReturn => {
  try {
    const accesstoken = generateAccessToken({
      sub: decoded.sub!,
      role: decoded.role!,
    }) as string;
    const refreshtoken = generateRefreshToken({
      sub: decoded.sub!,
      role: decoded.role!,
    }) as string;
    return { accesstoken, refreshtoken };
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

export default refreshAuthService;
