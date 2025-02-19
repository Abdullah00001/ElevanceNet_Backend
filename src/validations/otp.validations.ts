import { z } from 'zod';
const otpValidationSchema = z.object({
  otp: z.string().min(6, 'OTP must be at least 6 characters long'),
});

export default otpValidationSchema;
