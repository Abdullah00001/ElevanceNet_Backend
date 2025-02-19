import nodemailer, { TransportOptions } from 'nodemailer';
import { SMTP_HOST, SMTP_PASS, SMTP_PORT, SMTP_USER } from '../const.js';

const mailTransporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587, // Use 465 for SSL
  secure: false,
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
} as TransportOptions);

export default mailTransporter;
