'use strict';

const Wreck = require('@hapi/wreck');
const { ArgumentError } = require('./errors');
const Fs = require('fs');
const { parse } = require('csv-parse');

module.exports.readCsvFile = async ({ path, delimiter, skipFirstRow, objectScheme }) => {

    const getHandlerType = ({ type }) => {

        return {
            string: (value) => {
                return value.toString();
            },
            number: (value) => {
                return parseInt(value);
            },
            float: (value) => {
                return parseFloat(value);
            },
            boolean: (value) => {
                return Boolean(parseInt(value));
            },
            timestamp: (value) => {
                return new Date(value);
            },
            undefined: (value) => {
                return value;
            },
            custom_children_ages: (value) => {
                const objAges = {};
                const arrayAges = value.split(' ');
                arrayAges.map((item) => {
                    objAges[item] ? objAges[item] = objAges[item] + 1 : objAges[item] = 1;
                });
                return objAges;
            },
            percentage: (value) => {
                const floatValue = parseFloat(value.replace(/%/g, ''));
                return floatValue;
            },
            currency: (value) => {
                const floatValue = parseFloat(value.replace('EUR ', '').replace(',', '.'));
                return floatValue;
            },
            skip: () => {
                return 'NULL';
            }
        }[type];
    };

    return new Promise((resolve, reject) => {
        const csvData = [];
        Fs.createReadStream(path)
            .pipe(parse({ delimiter, skip_lines_with_error: true, trim: true }))
            .on('error', (err) => {
                reject(err);
            })
            .on('data', (csvrow) => {
                const csvrowobj = {};
                csvrow.forEach((element, index) => {
                    const objectSchemeItem = objectScheme[index];
                    if (objectSchemeItem) {
                        if (objectSchemeItem[Object.keys(objectSchemeItem)[0]] === 'skip') {
                            return;
                        }

                        const handler = getHandlerType({ type: objectSchemeItem[Object.keys(objectSchemeItem)[0]] });
                        csvrowobj[Object.keys(objectSchemeItem)[0]] = element === 'NULL' ? null : handler(element);
                    }

                });
                csvData.push(csvrowobj);
            })
            .on('end', () => {
                if (skipFirstRow) {
                    const csvDataSliced = csvData.slice(1);
                    resolve(csvDataSliced);
                }

                resolve(csvData);
            });
    });
};

/**
 * Returns a slug from a string
 * @param {string} str
 *  The string to slug
//  */
// module.exports.slugify = (str) => {

//     return str.toString().toLowerCase()
//         .replace(/\s+/g, '-')           // Replace spaces with -
//         .replace(/[^\w-]+/g, '')       // Remove all non-word chars
//         .replace(/--+/g, '-')         // Replace multiple - with single -
//         .replace(/^-+/, '')             // Trim - from start of text
//         .replace(/-+$/, '');            // Trim - from end of text
// };

// /**
//  * Gets a boolean value from `process.env`, parsing also
//  * the string form (i.e., 'true').
//  *
//  * @param {string} varname
//  *  The name of the environment variable.
//  * @param {boolean} defaultValue
//  *  The default value (to be used when the environment
//  *  variable is not defined).
//  */
// module.exports.getEnvBoolean = (varname, defaultValue) => {

//     const value = process.env[varname] || defaultValue;
//     return value === true || value === 'true';
// };

// /**
//  * Convert a `Date` object to a string representation
//  * that can be used for mysql db timestamp columns.
//  *
//  * @param {Date} date
//  *  The date to convert.
//  */
// module.exports.dateToMysqlTimestamp = (date) => date.toISOString().replace(/T/, ' ').replace(/\..+/, '');

// /**
//  * Asynchronously sleep for a given time.
//  *
//  * @param {int} milliseconds
//  *  The time to sleep (in milliseconds).
//  */
// module.exports.sleep = async (milliseconds = 0) => await new Promise((resolve) => setTimeout(resolve, milliseconds));

// /**
//  * Poll an URL until a given callback is satisfied, with a given frequency
//  * and limited amount of retries.
//  * NOTE: exceptions raised when trying to connect to the URL are ignored.
//  *
//  * @param {string} url
//  *  The remote URL to poll.
//  * @param {Function} untilCallback
//  *  The callback to determine whether the polling is finished or not, taking as an
//  *  input a { res, payload } object as returned by `Wreck`. The polling stops when
//  *  this callback returns true.
//  * @param {int} frequency
//  *  The polling frequency (in milliseconds).
//  * @param {int} maxRetries
//  *  The maximum number of attempts to do. Optional.
//  */
// module.exports.pollUrlUntil = async ({ url, untilCallback, frequency, maxRetries = -1 }) => {

//     let retries = 0;

//     while (await Wreck.get(url)
//         .then(({ res, payload }) => untilCallback({ res, payload }))
//         .catch(() => false) !== true) {

//         if (maxRetries >= 0 && ++retries >= maxRetries) {
//             throw new Error(`Polling for ${url} failed after reaching the maximum of ${maxRetries} attempts`);
//         }

//         await this.sleep(frequency);
//     }
// };

// /**
//  * Remove a given set of keys from one or more objects.
//  *
//  * @param {object|array} data
//  *  The data to be filtered, either as a single object or as an
//  *  array of objects (all with the same format).
//  * @param {array} keys
//  *  The array of keys to be removed.
//  */
// module.exports.removeKeys = ({ data, keys }) => {

//     const keySet = new Set(keys);
//     const remover = (obj) => Object.fromEntries(Object.entries(obj).filter(([key, _]) => !keySet.has(key)));
//     return (data instanceof Array) ? data.map(remover) : remover(data);
// };

// /**
//  * Fetch the original domain of the request, as sent by the requester.
//  * NOTE: we support the parse of "x-forwarded-host" header to get the
//  * original host also in the case of multiple reverse proxy in the middle.
//  *
//  * @param {Request} request
//  *  The request object.
//  */
// module.exports.getDomainFromRequest = (request) => {

//     const xForwardedHeaders = request.headers['x-forwarded-host'];
//     const fullHost = xForwardedHeaders ? xForwardedHeaders.split(',')[0] : request.info.host;
//     const [host] = fullHost.split(':');
//     return host;
// };

// /**
//  * Generate a pseudo-random string of len characters.
//  *
//  * @param {int} len
//  *  The length of the string to be generated.
//  */
// module.exports.generateRandString = (len) => {

//     let randomString = '';
//     for (; randomString.length < len; randomString += Math.random().toString(36).substr(2)) { }
//     return randomString.substr(0, len);
// };

// /** Concatenate a set of regular expressions into a single one.
//  *
//  * @param {Array} regExps
//  *  The regular expressions to concatenate (either as strings or RegExp objects).
//  */
// module.exports.concatenateRegExps = (regExps) => RegExp(regExps.map((re) => re.source || re).join(''));

// /**
//  * Check that all required arguments of a function have been provided.
//  *
//  * @param {object} argumentObj
//  *  An object containing the arguments to be checked.
//  */
// module.exports.requireArguments = (argumentObj) => {

//     Object.entries(argumentObj).forEach(([key, value]) => {

//         if (!value) {
//             throw new ArgumentError(`Missing required parameter ${key}`);
//         }
//     });
// };

// /**
//  * Filter one or more objects' keys.
//  *
//  * @param {object|array} data
//  *  The data to be filtered, either as a single object or as an
//  *  array of objects (all with the same format).
//  * @param {array} keys
//  *  The array of keys to be kept.
//  */
// module.exports.filterKeys = ({ data, keys }) => {

//     const keySet = new Set(keys);
//     const mapFunc = (element) => Object.fromEntries(Object.entries(element).filter(([key, _]) => keySet.has(key)));
//     return (data instanceof Array) ? data.map(mapFunc) : mapFunc(data);
// };

// /**
//  * Decorate a database query with a count statement and unwrap the
//  * results in a convenient way.
//  *
//  * @param {QueryBuilder} baseQuery
//  *  The objection query builder object representing the base query.
//  *
//  * @return {int} the result of the count query.
//  */
// module.exports.countQuery = (baseQuery) => {

//     return baseQuery.count('* as n').then((res) => {

//         if (res instanceof Array && res.length > 0) {
//             return res[0].n || 0;
//         }

//         throw new Error('Knex count query gave inconsistent results');
//     });
// };

// /**
//  * check if element into objects are all undefined or null.
//  *
//  *  @param {object|array} data
//  *  The data to be check, either as a single object or more objects (all with the same format).
//  *
//  * @return {boolean} true if all data are undefined or null, otherwise false.
//  */
// module.exports.checkUndefined = ({ data }) => {

//     const valueChecker = (currentValue) => currentValue === undefined || currentValue === null;
//     const dataArray = new Array(data);

//     return dataArray.every(valueChecker);
// };

// /**
//  * Perform an actions until it succeeds with no errors, or until a specified
//  * maximum amount of retries.
//  *
//  * @param {Function} action
//  *  The action to perform.
//  * @param {int} timeout
//  *  The time (in milliseconds) to wait between successive retries.
//  * @param {Function} timeoutUpdateCallback
//  *  A function taking the old timeout and returning the new one (can
//  *  be used to increase/decrese it at each retry). Optional.
//  * @param {int} maxRetries
//  *  The maximum number of retries (default: 0).
//  * @param {Function} onRetryCallback
//  *  A callback to be invoked each time a new retry is scheduled, taking
//  *  as input an object with the format `{ err, timeout }`. Optional.
//  */
// module.exports.doWithRetries = async ({ action, timeout, timeoutUpdateCallback = (t) => t, maxRetries = 0, onRetryCallback = (_) => { } }) => {

//     try {
//         return await action();
//     }
//     catch (err) {
//         if (maxRetries > 0) {
//             timeout = timeoutUpdateCallback(timeout);
//             await onRetryCallback({ err, timeout });
//             await this.sleep(timeout);
//             await this.doWithRetries({ action, timeout, timeoutUpdateCallback, maxRetries: maxRetries - 1, onRetryCallback });
//         }
//         else {
//             throw err;
//         }
//     }
// };

// /**
//  * Groups an array of objects by one or more keys
//  * See {@link https://gist.github.com/robmathers/1830ce09695f759bf2c4df15c29dd22d}
//  * or {@link https://stackoverflow.com/questions/14446511/most-efficient-method-to-groupby-on-an-array-of-objects}
//  * for further info.
//  *
//  * @param {array} arr
//  *  The array of objects to be grouped.
//  * @param {array} keys
//  *  The array of string keys.
//  */
// module.exports.groupObjectsByKeys = (arr, keys) => {

//     return arr.reduce((storage, item) => {

//         const objKey = keys.map((key) => item[key]).join(':');
//         if (storage[objKey]) {
//             storage[objKey].push(item);
//         }
//         else {
//             storage[objKey] = [item];
//         }

//         return storage;
//     }, {});
// };

// /**
//  * Decorate a database query with a sum statement and unwrap the
//  * results in a convenient way.
//  *
//  * @param {QueryBuilder} baseQuery
//  *  The objection query builder object representing the base query.
//  * @param {String} sumValue
//  *  The value to use in the sum query
//  *
//  * @return {int} the result of the sum query.
//  */
// module.exports.sumQuery = (baseQuery, sumValue) => {

//     return baseQuery.sum(sumValue, { as: 'tot' }).then((res) => {

//         if (res instanceof Array && res.length > 0) {
//             return res[0].tot || 0;
//         }

//         throw new Error('Knex sum query gave inconsistent results');
//     });
// };

// /**
//  * Remove duplicate entries from an array of strings
//  *
//  * @param {array} arr
//  *  The array to scan for duplicates.
//  */
// module.exports.removeDuplicates = (arr) => Array.from(new Set(arr));

// /**
//   * Consumes a readable stream into a string.
//   *
//   * @param {ReadableStream} stream
//   *  The readable stream to consume.
//   * @param {string} encoding
//   *  The encoding to use to build the string (default: 'utf8').
//   */
// module.exports.streamToString = async ({ stream, encoding = 'utf8' }) => {

//     const chunks = [];

//     for await (const chunk of stream) {
//         chunks.push(chunk);
//     }

//     return Buffer.concat(chunks).toString(encoding);
// };

// /**
//  * Check whether or not we are in a development environment.
//  * NOTE: this is based on the `NODE_ENV` environment variable.
//  */
// module.exports.isDev = () => process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'testing';
