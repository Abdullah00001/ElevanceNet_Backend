import { NextFunction, Request, Response } from 'express';
import { verifyPageAccessToken } from '../../utils/jwt.utils.js';
import jwt from 'jsonwebtoken';
import ErrorApiResponse from '../../utils/errorApiResponse.utils.js';
import { IVerifyPageTokenPayload } from '../../interfaces/payload.interfaces.js';

const checkVerifyPageAccessTokenMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
):void => {
  try {
    const token = req.cookies['verify_page_accesstoken'];
    const decoded = verifyPageAccessToken(token);
    req.verifyPageDecoded = decoded as IVerifyPageTokenPayload;
    next();
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      const errors: string[] = [
        'Token is not issued by our system.',
        'Authentication failed: Invalid token signature.',
        'Invalid or tampered token.',
      ];
      const hints: string[] = [
        'Make sure you are using the correct token issued by our system.',
        'Log in again to get a new token.',
        'Check if your token has been tampered with or corrupted.',
      ];
      const response = new ErrorApiResponse(
        'Invalid token. Not issued by our system.',
        errors,
        hints,
        null,
        null,
        req.originalUrl,
        null,
        null
      );
      res.status(401).json(response);
      return;
    } else if (error instanceof jwt.JsonWebTokenError) {
      const errors = [
        'Token has expired.',
        'Session has ended due to inactivity.',
        'Authentication failed: Token expired.',
      ];
      const hints = [
        'Please log in again to refresh your session.',
        'If you were logged out automatically, check if your token has expired.',
        'Refresh your token or request a new one.',
      ];
      const response = new ErrorApiResponse(
        'Session expired',
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
  }
};

export default checkVerifyPageAccessTokenMiddleware;
