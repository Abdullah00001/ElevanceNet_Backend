import { documentation, environment, version } from '../const.js';
/**
 * Represents a standard API response structure for error cases.
 * @template T The type of data that the API may return, which will be `null` in error cases.
 *
 * This class is designed to provide a consistent structure for API responses when an error occurs,
 * including relevant metadata, error messages, and links for navigation.
 */
export default class ErrorApiResponse {
    /**
     * Creates an instance of the `ErrorApiResponse` class.
     * @param message The message describing the error, typically a user-friendly description.
     * @param errors A list of error messages that provide further details about the failure.
     * @param hints A list of hints or recommendations to help resolve the error.
     * @param requestId A unique identifier for the API request, useful for tracing.
     * @param pagination The pagination details, if available, to assist with paginated responses.
     * @param self The URL for the current page of the response.
     * @param next The URL for the next page, if applicable.
     * @param previous The URL for the previous page, if applicable.
     */
    constructor(message, errors, hints, requestId, pagination, self, next, previous) {
        this.success = false;
        this.message = message;
        this.data = null;
        this.errors = errors;
        this.hints = hints;
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
     * Generates and returns the structured error response.
     * This method formats the response data into a standardized structure to be sent to the client.
     *
     * @returns {Object} A standardized error response object containing the success flag, message, errors, hints, metadata, and links.
     */
    errorResponse() {
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
