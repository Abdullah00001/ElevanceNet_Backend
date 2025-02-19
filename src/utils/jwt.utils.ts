import jwt, { JwtPayload } from 'jsonwebtoken';
import {
  ITokenPayload,
  IVerifyPageTokenPayload,
} from '../interfaces/payload.interfaces.js';
import {
  ACCESS_TOKEN_EXPIRES_IN,
  JWT_ACCESS_TOKEN_SECRET_KEY,
  REFRESH_TOKEN_EXPIRES_IN,
  JWT_REFRESH_TOKEN_SECRET_KEY,
  JWT_VERIFY_PAGE_TOKEN_SECRET_KEY,
  VERIFY_PAGE_EXPIRES_IN,
} from '../const.js';

export const generateAccessToken = (payload: ITokenPayload): string | null => {
  try {
    const token = jwt.sign(payload, JWT_ACCESS_TOKEN_SECRET_KEY, {
      expiresIn: ACCESS_TOKEN_EXPIRES_IN,
    });
    return token;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const generateRefreshToken = (payload: ITokenPayload): string | null => {
  try {
    const token = jwt.sign(payload, JWT_REFRESH_TOKEN_SECRET_KEY, {
      expiresIn: REFRESH_TOKEN_EXPIRES_IN,
    });
    return token;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const generateVerifyPageAccessToken = (
  payload: IVerifyPageTokenPayload
): string | null => {
  try {
    const token = jwt.sign(payload, JWT_VERIFY_PAGE_TOKEN_SECRET_KEY, {
      expiresIn: VERIFY_PAGE_EXPIRES_IN,
    });
    return token;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const verifyAccessToken = (token: string): JwtPayload | null => {
  try {
    const decoded = jwt.verify(
      token,
      JWT_ACCESS_TOKEN_SECRET_KEY
    ) as JwtPayload;
    return decoded;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const verifyRefreshToken = (token: string): JwtPayload | null => {
  try {
    const decoded = jwt.verify(
      token,
      JWT_REFRESH_TOKEN_SECRET_KEY
    ) as JwtPayload;
    return decoded;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const verifyPageAccessToken = (token: string): JwtPayload | null => {
  try {
    const decoded = jwt.verify(
      token,
      JWT_VERIFY_PAGE_TOKEN_SECRET_KEY
    ) as JwtPayload;
    return decoded;
  } catch (error) {
    console.error(error);
    return null;
  }
};
