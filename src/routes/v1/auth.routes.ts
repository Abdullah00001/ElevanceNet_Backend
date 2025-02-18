import { Router } from 'express';

const router = Router();

import signupController from '../../controllers/authentication/signup.controllers.js';
import signupInputValidationMiddleware from '../../middlewares/authentication/signupInputValidation.middlewares.js';
import checkEmailExistsMiddleware from '../../middlewares/authentication/checkEmailExists.middlewares.js';
import checkBlackListMiddleware from '../../middlewares/authentication/checkBlackList.middlewares.js';
import checkVerifyPageAccessTokenMiddleware from '../../middlewares/authentication/checkVerifyPageAccessToken.middlewares.js';
import protectVerifyPageController from '../../controllers/authentication/protectVerifyPage.controllers.js';

router
  .route('/auth/signup')
  .post(
    signupInputValidationMiddleware,
    checkEmailExistsMiddleware,
    signupController
  );
router
  .route('/auth/protected/verify-page')
  .get(
    checkBlackListMiddleware,
    checkVerifyPageAccessTokenMiddleware,
    protectVerifyPageController
  );

export default router;
