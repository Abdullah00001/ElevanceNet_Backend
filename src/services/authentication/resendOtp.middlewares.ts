import logger from '../../configs/logger.configs.js';
import otpGenerator from 'otp-generator';
import findUserByEmail from '../../repositories/authentication/findUserByEmail.repositories.js';
import redisClient from '../../configs/redis.configs.js';
import sendVerificationEmail from '../../utils/sendVerificationEmail.utils.js';
import { OTP_EXPIRED_TIME } from '../../const.js';
import { IVerificationEmailData } from '../../interfaces/verificationEmailData.interfaces.js';

const resendOtpMiddleware = async (id: string): Promise<void> => {
  try {
    // const user = (await findUserByEmail(email)) as IUser;
    const stringifyUser = (await redisClient.get(
      `user:profile:${id}`
    )) as string;
    const user = JSON.parse(stringifyUser);
    const otp = otpGenerator.generate(6, {
      digits: true,
      lowerCaseAlphabets: false,
      specialChars: false,
      upperCaseAlphabets: false,
    });
    await redisClient.set(
      `user:otp:${user.email}`,
      otp,
      'EX',
      OTP_EXPIRED_TIME * 60
    );
    const emailData: IVerificationEmailData = {
      email: user.email,
      expirationTime: OTP_EXPIRED_TIME,
      otp: otp,
      firstName: user.firstName,
      lastName: user.lastName,
    };
    sendVerificationEmail(emailData);
  } catch (error) {
    if (error instanceof Error) {
      logger.error(`Service Error: ${error.message}`);
      throw error;
    } else {
      logger.error(`Service Error: Unknown Error Occurred`);
      throw new Error('Unknown Error Occurred In Service');
    }
  }
};

export default resendOtpMiddleware;
