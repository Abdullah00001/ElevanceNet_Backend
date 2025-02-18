import { Router } from 'express';

const router = Router();

import signupController from '../../controllers/authentication/signup.controllers.js';
import signupInputValidationMiddleware from '../../middlewares/authentication/signupInputValidation.middlewares.js';
import checkEmailExistsMiddleware from '../../middlewares/authentication/checkEmailExists.middlewares.js';
import checkBlackListMiddleware from '../../middlewares/authentication/checkBlackList.middlewares.js';
import checkVerifyPageAccessTokenMiddleware from '../../middlewares/authentication/checkVerifyPageAccessToken.middlewares.js';
import protectVerifyPageController from '../../controllers/authentication/protectVerifyPage.controllers.js';
import otpInputValidationMiddleware from '../../middlewares/authentication/otpInputValidation.middlewares.js';
import checkVerificationOtpMiddleware from '../../middlewares/authentication/checkVerificationOtp.middlewares.js';
import accountVerificationController from '../../controllers/authentication/accountVerification.controllers.js';

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

router
  .route('/auth/verify')
  .post(
    checkVerifyPageAccessTokenMiddleware,
    otpInputValidationMiddleware,
    checkVerificationOtpMiddleware,
    accountVerificationController
  );

export default router;
