import { documentation, environment, version } from '../const.js';
/**
 * Represents a standard API response structure for successful cases.
 * @template T The type of data that the API returns.
 *
 * This class is designed to provide a consistent structure for API responses when the operation is successful,
 * including relevant metadata, response data, and links for navigation.
 */
export default class SuccessApiResponse {
    /**
     * Creates an instance of the `SuccessApiResponse` class.
     * @param message The message describing the success, typically a user-friendly description.
     * @param data The data returned by the API in case of success. This can be any type of data, or `null` if not applicable.
     * @param requestId A unique identifier for the API request, useful for tracing.
     * @param pagination The pagination details, if available, to assist with paginated responses.
     * @param self The URL for the current page of the response.
     * @param next The URL for the next page, if applicable.
     * @param previous The URL for the previous page, if applicable.
     */
    constructor(message, data, requestId, pagination, self, next, previous) {
        this.success = true;
        this.message = message;
        this.data = data;
        this.errors = [];
        this.hints = [];
        this.meta = {
            info: {
                requestId,
                timestamp: new Date().toISOString(),
                environment,
                version,
            },
            pagination,
        };
        this.links = {
            self,
            next,
            previous,
            documentation,
        };
    }
    /**
     * Generates and returns the structured success response.
     * This method formats the response data into a standardized structure to be sent to the client.
     *
     * @returns {Object} A standardized success response object containing the success flag, message, data, metadata, and links.
     */
    successResponse() {
        return {
            success: this.success,
            message: this.message,
            data: this.data,
            errors: this.errors,
            hints: this.hints,
            meta: this.meta,
            links: this.links,
        };
    }
}
