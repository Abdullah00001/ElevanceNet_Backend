import { Document } from 'mongoose';

export enum IRole{
    User="user",
    Admin="admin"
}

interface IUser extends Document {
  firstName: string;
  lastName: string;
  email: string;
  avatar: string;
  isVerified: boolean;
  password: string;
  role: IRole;
}

export default IUser;
