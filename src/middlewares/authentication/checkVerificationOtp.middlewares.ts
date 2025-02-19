import { NextFunction, Request, Response } from 'express';
import logger from '../../configs/logger.configs.js';
import IGlobalError from '../../interfaces/globalError.interfaces.js';
import redisClient from '../../configs/redis.configs.js';
import ErrorApiResponse from '../../utils/errorApiResponse.utils.js';

const checkVerificationOtpMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { otp } = req.body;
    const { email } = req.verifyPageDecoded!;
    const savedOtp = await redisClient.get(`user:otp:${email}`);
    if (!savedOtp) {
      const errors: string[] = [
        'OTP has expired.',
        'The provided OTP is no longer valid.',
        'Session timed out due to OTP expiration.',
      ];
      const hints: string[] = [
        'Request a new OTP and try again.',
        'Ensure you enter the OTP within the valid time frame.',
        'Check if your email or phone has received a new OTP and use the latest one.',
      ];
      const response = new ErrorApiResponse(
        'OTP has expired',
        errors,
        hints,
        null,
        null,
        req.originalUrl,
        null,
        null
      );
      res.status(400).json(response);
      return;
    }
    if (savedOtp !== otp) {
      const errors: string[] = [
        'Provided OTP is incorrect.',
        'The entered OTP does not match our records.',
        'Authentication failed due to an incorrect OTP.',
      ];
      const hints: string[] = [
        'Double-check the OTP you entered and try again.',
        'Make sure you are using the latest OTP sent to your email or phone.',
        'If you entered the OTP manually, ensure there are no typos or extra spaces.',
      ];
      const response = new ErrorApiResponse(
        'Provided OTP is incorrect',
        errors,
        hints,
        null,
        null,
        req.originalUrl,
        null,
        null
      );
      res.status(400).json(response);
      return;
    }
    if (savedOtp === otp) {
      next();
    }
  } catch (error) {
    if (error instanceof Error) {
      logger.error(`Otp Middleware Error: ${error.message}`);
      const response: IGlobalError = {
        code: 500,
        errors: [
          'Server error occurred.',
          'Internal server issue.',
          'Unexpected server error.',
        ],
        hints: [
          'Please contact support if the issue persists.',
          'Our team is working to resolve the issue.',
          'Try again later or reach out to support.',
        ],
        requestId: null,
        message: 'Internal server error',
      };
      next(response);
    }
  }
};

export default checkVerificationOtpMiddleware;
