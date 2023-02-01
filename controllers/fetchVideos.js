require('dotenv').config();
const { google } = require('googleapis');

const PRE_DEFINED_QUERY = 'football';
const MAX_RESULTS_PER_PAGE = 50; // accepted range: 1 to 50; default: 5

const youtubeClient = google.youtube({
   version: 'v3',
   auth: process.env.YT_API_KEY
});

/**
 * Querying youtube service to fetch videos for a pre defined query.
 */
const fetchVideos = async (publishedAfter, pageToken, allVideos = []) => {
    try {
        const { data } = await youtubeClient.search.list({
            part: 'snippet',
            q: PRE_DEFINED_QUERY,
            order: 'date',
            type: 'video',
            publishedAfter: publishedAfter,
            maxResults: MAX_RESULTS_PER_PAGE,
            pageToken: pageToken
        })
        allVideos.push(...data.items);
        // fetching all pages for Youtube paginated response
        if (data.nextPageToken) {
            await fetchVideos(publishedAfter, data.nextPageToken, allVideos);
        }

    } catch(err) {
        if (err.response.status === 403 && err.errors[0].reason === 'quotaExceeded') {
            console.log('quota exceeeded, try different API key.');
        } 
        else console.log('error occured while calling YT API.', err);
    }

    return allVideos; 
}

module.exports.fetchVideos = fetchVideos;
