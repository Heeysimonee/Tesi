'use strict';

const Schmervice = require('schmervice');

const errorMessages = {
    400: 'Bad request',
    401: 'Unauthorized',
    403: 'Forbidden',
    404: 'Not found',
    415: 'Unsupported media type',
    422: 'Unprocessable Entity',
    500: 'Internal server error',
    502: 'Bad Gateway'
};

module.exports = class ApiService extends Schmervice.Service {

    /**
     * This function returns a standard array defined on the API's contract
     *
     * @param int   statusCode
     * @param array data
     * @param array errors
     *
     * @return array
     */
    output(statusCode = 200, data = [], errors = []) {

        return {
            statusCode,
            data,
            errors
        };
    }

    /**
     * Returns the payload and a custom status code
     *
     * @param h (TBD)
     * @param array output
     * @param null|int code
     *
     * @return h
     */
    response(h, output, code = null) {

        const statusCode = code || output.statusCode;
        return h.response(output).code(statusCode);
    }

    /**
     * Returns the formatted response
     *
     * @param {object} h
     *  The h object
     * @param {array|object} data
     *  The data to be returned
     * @param {int} statusCode
     *  The HTTP status code
     * @param {array} errors
     *  The list of error messages
     *
     * @return h
     */
    formatResponse(h, data, statusCode = 200, errors = []) {

        const formattedResponse = this.output(statusCode, data, errors);

        return h.response(formattedResponse).code(statusCode);
    }

    /**
     * Returns a standardized error based on the provided error code.
     *
     * @param h (TBD)
     * @param {int} code
     *  The error code (default 404)
     * @param {array} infos
     *  Additional informations on the error (optional).
     */
    error(h, code = 404, infos = []) {

        if (!errorMessages[code]) {
            throw new Error(`API helper does not support returning errors with code ${code}`);
        }

        return this.response(h, this.output(code, [], [errorMessages[code]].concat(infos)), code);
    }
};
