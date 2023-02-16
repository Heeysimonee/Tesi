'use strict';

const Confidence = require('confidence');
const Toys = require('toys');

// Glue manifest as a confidence store
module.exports = new Confidence.Store({
    server: {
        routes: {
            cors: true
        },
        port: {
            $env: 'PORT',
            $coerce: 'number',
            $default: 8080
        },
        host: {
            $env: 'HOST',
            $default: '0.0.0.0'
        },
        debug: false,
        app: {
            publicHostname: {
                $env: 'PUBLIC_HOSTNAME',
                $default: 'localhost'
            },
            log: {
                level: {
                    $env: 'LOG_LEVEL',
                    $default: 'info'
                },
                prettyPrint: {
                    $env: 'LOG_PRETTY_PRINT',
                    $coerce: 'boolean',
                    $default: false
                }
            }
        }
    },
    register: {
        plugins: [
            {
                plugin: '../lib' // Main plugin
            },
            {
                plugin: {
                    $filter: { $env: 'NODE_ENV' },
                    $default: 'hpal-debug',
                    production: Toys.noop
                }
            }

        ]
    }
});
