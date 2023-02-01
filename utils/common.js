const db = require('../config/database');

/**
 * Util to calculate offset for pagination.
 * Returns number of rows to be skipped.
 */
module.exports.calculateOffset = (req, rowsPerPage) => {
    const page = req.query.page? req.query.page: 1;
    return (page - 1) * rowsPerPage;
}

/**
 * Util to build JSON response for Video list APIs.
 */
module.exports.buildVideosJsonResponse = (videos) => {
    return {
        count: videos.length,
        videos: videos
    }
}

/**
 * Util to test connection with DB server.
 */
module.exports.checkDBConnection = async () => {
    try {
        await db.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}