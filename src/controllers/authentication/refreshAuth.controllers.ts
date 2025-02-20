import { NextFunction, Request, Response } from 'express';
import refreshAuthService from '../../services/authentication/refreshAuth.services.js';
import cookieOption from '../../utils/cookie.utils.js';
import SuccessApiResponse from '../../utils/successApiResponse.utils.js';
import IGlobalError from '../../interfaces/globalError.interfaces.js';
import logger from '../../configs/logger.configs.js';

const refreshAuthControllers = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const decoded = req.authenticateTokenDecoded!;
  try {
    const { accesstoken, refreshtoken } = refreshAuthService(decoded);
    const response = new SuccessApiResponse(
      'Tokens refreshed successfully',
      null,
      decoded.sub!,
      null,
      req.originalUrl,
      null,
      null
    );
    res.cookie('accesstoken', accesstoken, cookieOption(30, null));
    res.cookie('refreshtoken', refreshtoken, cookieOption(null, 7));
    res.status(200).json(response);
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
        requestId: decoded.sub!,
      };
      next(errorResponse);
    }
  }
};

export default refreshAuthControllers;
