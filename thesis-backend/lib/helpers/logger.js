'use strict';

const Pino = require('pino');
const HapiPino = require('../plugins/hapi-pino').plugins;

module.exports = Pino(HapiPino.options, Pino.destination(HapiPino.options.stream));
