import User from '../../models/user.models.js';
import IUser from '../../interfaces/user.interfaces.js';

const findUserByEmail = async (email: string): Promise<IUser | null> => {
  try {
    const data = await User.findOne({ email });
    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error('Unknown Occurred In Database Operation');
    }
  }
};

export default findUserByEmail;
