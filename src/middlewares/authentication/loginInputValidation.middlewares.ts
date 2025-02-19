import { NextFunction, Request, Response } from 'express';
import ErrorApiResponse from '../../utils/errorApiResponse.utils.js';
import loginValidationSchema from '../../validations/login.validation.js';

const loginInputValidationMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const validationResult = loginValidationSchema.safeParse(req.body);
  if (!validationResult.success) {
    const formatErrors = validationResult.error.format();
    const errors = Object.entries(formatErrors)
      .filter(([key]) => key !== '_errors')
      .map(([field, value]) => {
        let message = '';

        if (Array.isArray(value)) {
          message = value[0];
        } else if (value?._errors) {
          message = value._errors[0];
        }
        return { field, message };
      });
    const hints = errors.map((err) => ({
      field: err.field,
      hint: `Check the ${err.field} field and correct it.`,
    }));
    const response = new ErrorApiResponse(
      'Validation Error',
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
  } else {
    next();
  }
};

export default loginInputValidationMiddleware;
