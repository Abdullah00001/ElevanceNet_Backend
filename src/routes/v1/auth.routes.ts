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
import resendOtpController from '../../controllers/authentication/resendOtp.controllers.js';
import checkUserExistsMiddleware from '../../middlewares/authentication/checkUserExistMiddlewares.js';
import loginController from '../../controllers/authentication/login.controllers.js';
import checkPasswordMiddleware from '../../middlewares/authentication/checkPassoword.middlewares.js';
import loginInputValidationMiddleware from '../../middlewares/authentication/loginInputValidation.middlewares.js';
import checkAuthAccesstokenMiddleware from '../../middlewares/authentication/checkAuthAccesstoken.middlewares.js';
import checkAuthController from '../../controllers/authentication/checkAuth.controllers.js';
import checkAuthRefreshtokenMiddleware from '../../middlewares/authentication/checkAuthRefreshtoken.middlewares.js';
import refreshAuthControllers from '../../controllers/authentication/refreshAuth.controllers.js';

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
    checkBlackListMiddleware,
    checkVerifyPageAccessTokenMiddleware,
    otpInputValidationMiddleware,
    checkVerificationOtpMiddleware,
    accountVerificationController
  );

router
  .route('/auth/resend/')
  .post(
    checkBlackListMiddleware,
    checkVerifyPageAccessTokenMiddleware,
    resendOtpController
  );

router
  .route('/auth/login/')
  .post(
    loginInputValidationMiddleware,
    checkUserExistsMiddleware,
    checkPasswordMiddleware,
    loginController
  );

router
  .route('/auth/check')
  .post(checkAuthAccesstokenMiddleware, checkAuthController);

router
  .route('/auth/refresh')
  .post(checkAuthRefreshtokenMiddleware, refreshAuthControllers);

export default router;
