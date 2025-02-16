import { Router } from 'express';

const router = Router();

import signupController from '../../controllers/authentication/signup.controllers.js';
import signupInputValidationMiddleware from '../../middlewares/authentication/signupInputValidation.middlewares.js';
import checkEmailExistsMiddleware from '../../middlewares/authentication/checkEmailExists.middlewares.js';

router
  .route('/auth/signup')
  .post(
    signupInputValidationMiddleware,
    checkEmailExistsMiddleware,
    signupController
  );

export default router;
