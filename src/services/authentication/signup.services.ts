import { ISignupRequestBody } from '../../interfaces/authRequestBody.interfaces.js';
import createUser from '../../repositories/authentication/createUser.repositories.js';
import otpGenerator from 'otp-generator';
import { generateVerifyPageAccessToken } from '../../utils/jwt.utils.js';
import { IVerifyPageTokenPayload } from '../../interfaces/payload.interfaces.js';
import redisClient from '../../configs/redis.configs.js';
import { OTP_EXPIRED_TIME } from '../../const.js';
import sendVerificationEmail from '../../utils/sendVerificationEmail.utils.js';
import { IVerificationEmailData } from '../../interfaces/verificationEmailData.interfaces.js';

const signupService = async (
  requestBody: ISignupRequestBody
): Promise<string> => {
  try {
    const createdUser = await createUser(requestBody);
    const verifyPageAccessToken = generateVerifyPageAccessToken({
      id: createdUser._id,
      email: createdUser.email,
    } as IVerifyPageTokenPayload);
    const otp = otpGenerator.generate(6, {
      digits: true,
      lowerCaseAlphabets: false,
      specialChars: false,
      upperCaseAlphabets: false,
    });
    await redisClient.set(
      `user:otp:${createdUser.email}`,
      otp,
      'EX',
      OTP_EXPIRED_TIME * 60
    );
    const emailData: IVerificationEmailData = {
      email: createdUser.email,
      expirationTime: OTP_EXPIRED_TIME,
      otp: otp,
      firstName: createdUser.firstName,
      lastName: createdUser.lastName,
    };
    sendVerificationEmail(emailData);
    return verifyPageAccessToken as string;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error('Unknown Error Occurred');
    }
  }
};

export default signupService;
