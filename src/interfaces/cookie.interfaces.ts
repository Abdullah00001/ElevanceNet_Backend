export default interface CookieOptions {
  httpOnly: boolean;
  secure: boolean;
  sameSite: 'None' | 'Lax' | 'Strict';
  path: string;
  domain: string;
  maxAge?: number;
}
