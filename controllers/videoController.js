const { Video } = require('../models/video');

const VIDEOS_PER_PAGE = 10;

module.exports.getAllVideos = (req, res) => {
    const page = req.query.page? req.query.page: 1;
    Video.findAll({
        attributes: ['title', 'description', 'thumbnail', 'published_date'],
        offset: (page - 1) * VIDEOS_PER_PAGE,
        limit: VIDEOS_PER_PAGE,
        order: [['published_date', 'DESC']],
        raw: true
    }).then((videos) => {
        const response = {
            count: videos.length,
            videos: videos
        }
        res.status(200).json(response);
    }).catch((err) => {
        console.log('Unexpected error occured. while fetching videos from DB.', err)
        res.status(500).send('Unexpected error occured.');
    })
}