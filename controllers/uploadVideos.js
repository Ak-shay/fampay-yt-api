const cron = require('node-cron');

const { parseYTResponse } = require('../utils/parseYoutubeResponse');
const { Video } = require('../models/video');
const { fetchVideos } = require('./fetchVideos');

const REFRESH_INTERVAL_SECS = 60; // 1 minute

const saveVideosToDB = async (ytVideoResponse) => {
    const parsedVideos = await parseYTResponse(ytVideoResponse);
    try {
        Video.bulkCreate(parsedVideos, {
            ignoreDuplicates: true
        })
        console.log('successfully inserted videos into DB');
    } catch (err) {
        console.log('error ocurred while inserting videos into DB', err);
    }
}

// running cron job every 1 minute to upload latest videos in DB
exports.uploadVideoCronJob = () => {
    cron.schedule('* * * * *', async () => {
        const publishedAfter = new Date();
        publishedAfter.setSeconds(publishedAfter.getSeconds() - REFRESH_INTERVAL_SECS);

        // fetching videos published during last 60 secs
        const videos = await fetchVideos(publishedAfter);
        if (videos.length > 0) saveVideosToDB(videos);
    })
};
