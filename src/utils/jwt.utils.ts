import jwt, { JwtPayload } from 'jsonwebtoken';
import { Payload } from '../interfaces/payload.interfaces.js';
import {
  ACCESS_TOKEN_EXPIRES_IN,
  JWT_ACCESS_TOKEN_SECRET_KEY,
  REFRESH_TOKEN_EXPIRES_IN,
  JWT_REFRESH_TOKEN_SECRET_KEY,
} from '../const.js';

export const generateAccessToken = (payload: Payload): string | null => {
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

export const generateRefreshToken = (payload: Payload): string | null => {
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
