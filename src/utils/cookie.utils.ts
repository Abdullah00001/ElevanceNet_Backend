import { CORS_ORIGIN_DEV, CORS_ORIGIN_PROD, environment } from '../const.js';
import CookieOptions from '../interfaces/cookie.interfaces.js';

const cookieOption = (min?: number, day?: number): CookieOptions => {
  const option: CookieOptions = {
    httpOnly: true,
    secure: environment === 'production',
    sameSite: environment === 'production' ? 'Strict' : 'None',
    path: '/',
    domain: environment === 'production' ? CORS_ORIGIN_PROD : CORS_ORIGIN_DEV,
  };

  if (min) {
    option.maxAge = min * 60 * 1000;
  }
  if (day) {
    option.maxAge = day * 24 * 60 * 60 * 1000;
  }

  return option;
};

export default cookieOption;
