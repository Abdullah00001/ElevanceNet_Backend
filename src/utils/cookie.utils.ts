import { CORS_ORIGIN_PROD, environment } from '../const.js';
import CookieOptions from '../interfaces/cookie.interfaces.js';

const cookieOption = (
  min?: number | null,
  day?: number | null
): CookieOptions => {
  const option: CookieOptions = {
    httpOnly: true,
    secure: environment === 'production',
    sameSite: environment === 'production' ? 'strict' : 'none',
    path: '/',
    domain: environment === 'production' ? CORS_ORIGIN_PROD : '',
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
