const fs = require('fs');

const fsPromise = require('fs/promises');

async function log(logData) {
    try {
        logData = `\n ${new Date().toString()} - ${logData}`;
        await fsPromise.appendFile(
            'production logs/log.txt',
            logData
            );
    } catch(err) {
        console.log(err);
    }
}

const loggerMiddleware = async (req, res, next) => {
    const logData = `${req.method} ${req.url} - ${JSON.stringify(req.body)}`;
    await log(logData);
    next();
};

module.exports = loggerMiddleware;