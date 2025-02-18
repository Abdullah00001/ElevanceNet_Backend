import { JwtPayload } from 'jsonwebtoken';
import { IVerifyPageTokenPayload } from '../interfaces/payload.interfaces.ts';

declare global {
  namespace Express {
    interface Request {
      user?: JwtPayload;
      verifyPageDecoded?: IVerifyPageTokenPayload;
    }
  }
}
export {};
