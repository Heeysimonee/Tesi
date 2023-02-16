'use strict';

const CustomError = class extends Error { };

const createCustomError = ({ statusCode }) => {

    return class extends CustomError {

        constructor(message, originalError) {

            super(message);
            this.statusCode = statusCode;
            this.originalError = originalError;
            Error.captureStackTrace(this, this.constructor);
        }
    };
};

const rethrow = (errorClass, errorMessage, originalError) => {

    if (originalError !== undefined) {
        throw new errorClass(errorMessage, originalError);
    }

    return (err) => rethrow(errorClass, errorMessage, err);
};

module.exports = {
    CustomError,
    ArgumentError: createCustomError({ statusCode: 500 }),
    ValidationError: createCustomError({ statusCode: 400 }),
    InternalError: createCustomError({ statusCode: 500 }),
    NotFoundError: createCustomError({ statusCode: 404 }),
    UnauthorizedError: createCustomError({ statusCode: 401 }),
    UnauthenticatedError: createCustomError({ statusCode: 401 }),
    rethrow
};
