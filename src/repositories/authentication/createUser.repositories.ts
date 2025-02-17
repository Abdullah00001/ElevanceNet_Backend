import { ISignupRequestBody } from '../../interfaces/authRequestBody.interfaces.js';
import IUser from '../../interfaces/user.interfaces.js';
import User from '../../models/user.models.js';

const createUser = async (requestBody: ISignupRequestBody): Promise<IUser> => {
  try {
    const newUser = new User(requestBody);
    await newUser.save();
    return newUser;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error('Unknown Occurred In Database Operation');
    }
  }
};

export default createUser;
