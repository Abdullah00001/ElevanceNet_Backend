import { NextFunction, Request, Response } from 'express';
import ErrorApiResponse from '../../utils/errorApiResponse.utils.js';
import redisClient from '../../configs/redis.configs.js';
import { TOKEN_BLACKLIST } from '../../const.js';
import logger from '../../configs/logger.configs.js';
import IGlobalError from '../../interfaces/globalError.interfaces.js';

const checkBlackListMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const token = req.cookies['verify_page_accesstoken'];
    if (!token) {
      const errors = [
        'Missing authentication token.',
        'Access denied due to missing credentials.',
        'Authorization failed: No token provided.',
      ];
      const hints = [
        'Ensure you include a valid authorization token in the request headers.',
        'Check if your session is active and refresh your token if expired.',
        'Refer to the API documentation for the correct authentication method.',
      ];

      const response = new ErrorApiResponse(
        'Token missingMissing token. Access denied.',
        errors,
        hints,
        null,
        null,
        req.originalUrl,
        '/api/v1/auth/signup',
        null
      );
      res.status(401).json(response);
      return;
    } else {
      const blacklist = await redisClient.lrange(TOKEN_BLACKLIST, 0, -1);
      const isBlacklisted = blacklist.includes(token);
      if (!isBlacklisted) {
        next();
      } else {
        const errors: string[] = [
          'Token is blacklisted.',
          'Access denied.',
          'Invalid authentication attempt.',
        ];
        const hints: string[] = [
          'Try logging in again to get a new token.',
          'If you believe this is a mistake, contact support.',
          'Clear your cookies and attempt authentication again.',
        ];
        const response = new ErrorApiResponse(
          'Access denied',
          errors,
          hints,
          null,
          null,
          req.originalUrl,
          null,
          null
        );
        res.status(403).json(response);
        return;
      }
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

export default checkBlackListMiddleware;
