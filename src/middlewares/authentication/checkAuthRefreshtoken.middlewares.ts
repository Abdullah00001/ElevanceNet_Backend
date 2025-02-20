import { NextFunction, Request, Response } from 'express';
import ErrorApiResponse from '../../utils/errorApiResponse.utils.js';
import { verifyRefreshToken } from '../../utils/jwt.utils.js';
import { JwtPayload } from 'jsonwebtoken';
import IGlobalError from '../../interfaces/globalError.interfaces.js';
import logger from '../../configs/logger.configs.js';

const checkAuthRefreshtokenMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  try {
    const { refreshtoken } = req.cookies;
    if (refreshtoken) {
      const decode: JwtPayload | null = verifyRefreshToken(refreshtoken);
      if (decode) {
        req.authenticateTokenDecoded = decode;
        next();
      } else {
        const errors: string[] = [
          'Invalid or unverified refresh token',
          'Token may be expired, tampered with, or not issued by this system',
          'Access denied due to authentication failure',
        ];
        const hints: string[] = [
          'Ensure you are using a valid refresh token issued by this system',
          'Try logging in again to generate a new refresh token',
          'If the issue persists, clear cookies and re-login',
        ];
        const response = new ErrorApiResponse(
          'Invalid or expired token',
          errors,
          hints,
          null,
          null,
          req.originalUrl,
          '/auth/refresh',
          null
        );
        res.status(403).json(response);
      }
    } else {
      const errors: string[] = [
        'Refresh token is missing',
        'User session has expired or was manually cleared',
        'Authentication credentials required',
      ];
      const hints: string[] = [
        'Ensure you are logged in before accessing this endpoint',
        'Check if cookies are enabled and not cleared manually',
        'Try re-logging in to start a new session',
      ];
      const response = new ErrorApiResponse(
        'Refresh token missing',
        errors,
        hints,
        null,
        null,
        req.originalUrl,
        '/auth/refresh',
        null
      );
      res.status(401).json(response);
    }
  } catch (error) {
    if (error instanceof Error) {
      logger.error(error.message);
      const errorResponse: IGlobalError = {
        code: 500,
        message: 'Internal server error',
        errors: [
          'The server failed to respond. Please try again later.',
          'The server may be experiencing temporary issues or may have become unresponsive.',
          'If the problem persists, it could indicate a more serious backend issue that requires attention.',
        ],
        hints: [
          'Please retry the operation after a few minutes, as the issue may be temporary.',
          'If the issue continues, clear your browser cache and refresh the page to ensure no stale data is causing the problem.',
          'If the problem persists, please contact our support team at elevancenet@support.com. Be sure to include your request ID and a detailed description of the issue for quicker assistance.',
          'You can also visit our status page at [link] for updates on server availability and ongoing maintenance.',
        ],
        requestId: null,
      };
      next(errorResponse);
    }
  }
};

export default checkAuthRefreshtokenMiddleware;
