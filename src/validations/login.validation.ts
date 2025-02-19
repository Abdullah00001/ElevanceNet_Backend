import { z } from 'zod';
import { emailRegex } from '../const.js';

const loginValidationSchema = z.object({
  email: z
    .string({ required_error: 'Email is required' })
    .email('Invalid email format')
    .regex(emailRegex, 'Email format is incorrect'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

export default loginValidationSchema;
