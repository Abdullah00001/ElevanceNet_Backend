import nodemailer, { TransportOptions } from 'nodemailer';
import { SMTP_HOST, SMTP_PASS, SMTP_PORT, SMTP_USER } from '../const.js';

const mailTransporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: SMTP_PORT,
  secure: SMTP_PORT === 465 ? true : false,
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
} as TransportOptions);

export default mailTransporter;
