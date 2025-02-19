import bcrypt from 'bcrypt';
import { NextFunction, Request, Response } from 'express';
import logger from '../../configs/logger.configs.js';
import IGlobalError from '../../interfaces/globalError.interfaces.js';
import IUser from '../../interfaces/user.interfaces.js';
import ErrorApiResponse from '../../utils/errorApiResponse.utils.js';

const checkPasswordMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const userPass = req.body.password; // extract password that user provide from req.body
    const { password } = req.user as IUser;
    const isMatched = await bcrypt.compare(userPass, password);
    if (isMatched) {
      next();
    } else {
      const errors: string[] = [
        'The password you entered is incorrect.',
        'Ensure you are using the correct password.',
        'Passwords are case-sensitive.',
      ];
      const hints: string[] = [
        'Try resetting your password if you forgot it.',
        'Make sure Caps Lock is off.',
        'Use a password manager to avoid mistakes.',
      ];
      const response = new ErrorApiResponse(
        'Invalid password or credential',
        errors,
        hints,
        null,
        null,
        req.originalUrl,
        null,
        null
      );
      res.status(401).json(response);
    }
  } catch (error) {
    if (error instanceof Error) {
      logger.error(error.message);
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
export default checkPasswordMiddleware;
