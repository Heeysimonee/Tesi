'use strict';

module.exports = (server, options) => ({
    plugins: {

        options: {
            transport: process.env.NODE_ENV === 'production' ? false : {
                target: 'pino-pretty',
                options: {
                    colorize: true
                }
            },
            logRequestStart: true,
            logRequestComplete: true,
            logPayload: true,
            logQueryParams: true,
            level: server.settings.app.log.level,
            redact: { paths: ['req.headers.authorization', 'req.headers.referer', 'tags'], remove: true },
            stream: process.env.NODE_ENV === 'test' ? `logs/test.log` : process.stdout,
            formatters: {
                level(label) {

                    return { level: label.toUpperCase() };
                }
            }
        }
    }
});
