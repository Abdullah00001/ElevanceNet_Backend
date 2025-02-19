import Handlebars from 'handlebars';
import { IVerificationEmailData } from '../interfaces/verificationEmailData.interfaces.js';
import verificationEmailTemplate from '../templates/verificationEmail.templates.js';
import mailTransporter from '../configs/nodemailer.configs.js';
import mailOption from './mailOption.utils.js';

const sendVerificationEmail = async (
  data: IVerificationEmailData
): Promise<void> => {
  try {
    const template = Handlebars.compile(verificationEmailTemplate);
    const personalizedTemplate = template(data);
    await mailTransporter.sendMail(
      mailOption(
        data.email,
        'Email Verification Required for Your Elevancenet Account',
        personalizedTemplate
      )
    );
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};

export default sendVerificationEmail;
