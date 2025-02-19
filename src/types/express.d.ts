import { JwtPayload } from 'jsonwebtoken';
import {
  ITokenPayload,
  IVerifyPageTokenPayload,
} from '../interfaces/payload.interfaces.ts';
import IUser from '../interfaces/user.interfaces.ts';

declare global {
  namespace Express {
    interface Request {
      user?: IUser;
      authenticateTokenDecoded?: JwtPayload;
      verifyPageDecoded?: IVerifyPageTokenPayload;
    }
  }
}
export {};
