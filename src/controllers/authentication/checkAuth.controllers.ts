import { Request, Response } from 'express';
import SuccessApiResponse from '../../utils/successApiResponse.utils.js';

const checkAuthController = (req: Request, res: Response): void => {
  const { sub } = req.authenticateTokenDecoded!;
  const response = new SuccessApiResponse(
    'User is authenticated',
    null,
    sub!,
    null,
    req.originalUrl,
    null,
    null
  );
  res.status(200).json(response);
  return;
};

export default checkAuthController;
