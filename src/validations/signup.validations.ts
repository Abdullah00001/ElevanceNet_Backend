import { z } from 'zod';
import { emailRegex } from '../const.js';

const signupInputValidationSchema = z.object({
  firstName: z
    .string()
    .min(3, 'First name must be at least 3 characters')
    .max(20, 'First name must not exceed 20 characters')
    .trim(),
  lastName: z
    .string()
    .min(3, 'Last name must be at least 3 characters')
    .max(20, 'Last name must not exceed 20 characters')
    .trim(),
  email: z
    .string({ required_error: 'Email is required' })
    .email('Invalid email format')
    .regex(emailRegex, 'Email format is incorrect'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

export default signupInputValidationSchema;
