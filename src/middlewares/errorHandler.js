const logger = require('../logger');

const errorHandler = (err, req, res, next) => {
    logger.error(`${err.message}\n${err.stack}`);
    res.status(err.status || 500).json({
        error: {
            message: err.message,
            stack: err.stack,
        },
    });
};

module.exports = errorHandler;
