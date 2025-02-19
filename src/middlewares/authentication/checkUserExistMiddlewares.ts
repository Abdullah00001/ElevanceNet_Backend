import { NextFunction, Request, Response } from 'express';
import findUserByEmail from '../../repositories/authentication/findUserByEmail.repositories.js';
import ErrorApiResponse from '../../utils/errorApiResponse.utils.js';
import logger from '../../configs/logger.configs.js';
import IGlobalError from '../../interfaces/globalError.interfaces.js';

const checkUserExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const user = await findUserByEmail(req.body.email);
    if (user) {
      req.user = user;
      next();
    } else {
      const errors = [
        'User not found.',
        'No account exists with this email.',
        'Email is not registered in our system.',
      ];

      const hints = [
        'Please check the email you entered.',
        'Try signing up if you don’t have an account.',
        'If you believe this is a mistake, contact support.',
      ];
      const response = new ErrorApiResponse(
        'Email already registered',
        errors,
        hints,
        null,
        null,
        req.originalUrl,
        null,
        null
      );
      res.status(409).json(response);
      return;
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

export default checkUserExistsMiddleware;
