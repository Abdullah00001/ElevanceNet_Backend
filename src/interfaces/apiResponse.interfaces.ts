/**
 * Interface representing additional information for the API response.
 *
 * Contains metadata such as requestId, timestamp, version, and environment.
 *
 * @interface
 */
export interface IInfo {
  requestId: string | null;
  timestamp: string;
  version: string;
  environment: string;
}

/**
 * Interface representing pagination details for paginated API responses.
 *
 * Provides information on the current page, items per page, and total pages/items.
 *
 * @interface
 */
export interface IPagination {
  current_page: number;
  per_page: number;
  total_pages: number;
  total_items: number;
  has_next: boolean;
  has_previous: boolean;
}

/**
 * Interface representing the hypermedia links for an API response.
 *
 * Contains links for the current, next, and previous pages, as well as the documentation link.
 *
 * @interface
 */
export interface ILinks {
  self: string;
  next: string | null;
  previous: string | null;
  documentation: string;
}

/**
 * Interface representing the meta information of the API response.
 *
 * Contains additional information about the response, including pagination details.
 *
 * @interface
 */
export interface IMeta {
  info: IInfo;
  pagination: IPagination | null;
}

/**
 * Interface representing the structure of a successful API response.
 *
 * Contains success status, message, data, errors, hints, meta information, and hypermedia links.
 *
 * @template T - The type of data included in the response.
 * @interface
 */
export default interface IApiResponse<T> {
  success: boolean;
  message: string;
  data: T | null;
  errors: string[];
  hints: string[];
  meta: IMeta;
  links: ILinks;
}
