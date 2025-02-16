import { Model, model, Schema } from 'mongoose';
import IUser, { IRole } from '../interfaces/user.interfaces.js';

const UserSchema = new Schema<IUser>({
  firstName: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 20,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    maxlength: 20,
    minlength: 3,
    trim: true,
  },
  email: { type: String, required: true, unique: true },
  avatar: { type: String, default: null },
  isVerified: { type: Boolean, default: false },
  password: { type: String, minlength: 8, required: true },
  role: { type: String, default: IRole.User },
});

UserSchema.index({ firstName: 'text', lastName: 'text' });

const User: Model<IUser> = model<IUser>('User', UserSchema);

export default User;
