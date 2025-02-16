import { NextFunction, Request, Response } from 'express';
import ErrorApiResponse from '../utils/errorApiResponse.utils.js';
import IGlobalError from '../interfaces/globalError.interfaces.js';

const globalErrorMiddleware = (
  err: IGlobalError,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const response = new ErrorApiResponse(
    err.message,
    err.errors,
    err.hints,
    err.requestId,
    null,
    req.originalUrl,
    null,
    null
  );
  res.status(err.code).json(response);
  return;
};

export default globalErrorMiddleware;
