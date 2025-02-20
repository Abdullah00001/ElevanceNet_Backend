import { NextFunction, Request, Response } from 'express';
import ErrorApiResponse from '../../utils/errorApiResponse.utils.js';
import { verifyAccessToken } from '../../utils/jwt.utils.js';
import { JwtPayload } from 'jsonwebtoken';

const checkAuthAccesstokenMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const { accesstoken } = req.cookies;
  if (accesstoken) {
    const decode: JwtPayload | null = verifyAccessToken(accesstoken);
    if (decode) {
      req.authenticateTokenDecoded = decode;
      next();
    } else {
      const errors: string[] = [
        'Invalid access token.',
        'Failed to decode access token.',
        'Token verification failed.',
      ];
      const hints: string[] = [
        "Check the token's expiration date and ensure it is not expired.",
        'Verify that the correct secret key is used to decode the token.',
        'Ensure the token was signed correctly and not tampered with.',
      ];
      const response = new ErrorApiResponse(
        'Invalid access token provided',
        errors,
        hints,
        null,
        null,
        req.originalUrl,
        '/auth/refresh',
        null
      );
      res.status(400).json(response);
    }
  } else {
    const errors: string[] = [
      'Access token missing.',
      'Token not found in cookies.',
      'User is not authenticated.',
    ];
    const hints: string[] = [
      'Ensure the access token is set in the cookies.',
      'Check if the client is sending the token correctly.',
      'Make sure the token is attached to the cookies in the request.',
    ];
    const response = new ErrorApiResponse(
      'Access token is missing',
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
};

export default checkAuthAccesstokenMiddleware;
