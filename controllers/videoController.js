const { Op } = require("sequelize");
const { Video } = require('../models/video');
const {calculateOffset, buildVideosJsonResponse} = require('../utils/common');

const VIDEOS_PER_PAGE = 10;

/**
 * Builds SQL query to fetch paginated response of videos 
 * in reverse chronological order of their publishing date-time.
 */
const buildQueryToFindAllVideos = (req) => {
    const offset = calculateOffset(req, VIDEOS_PER_PAGE);
    return {
        attributes: ['title', 'description', 'thumbnail', 'published_date'],
        limit: VIDEOS_PER_PAGE,
        order: [['published_date', 'DESC']],
        offset: offset,
        raw: true
    }
}

/**
 * Returns paginated response of videos in reverse chronological order of their publishing date-time.
 */
module.exports.getAllVideos = (req, res) => {
    Video.findAll({
        ...buildQueryToFindAllVideos(req),
    }).then((videos) => {
        const response = buildVideosJsonResponse(videos);
        res.status(200).json(response);
    }).catch((err) => {
        console.log('Unexpected error occured while fetching all videos from DB.', err)
        res.status(500).send('Unexpected error occured.');
    })
}

/**
 * Returns paginated response of videos that contains search pattern in title OR description.
 */
module.exports.getSearchedVideos = (req, res) => {
    const searchPattern = '%' + req.query.pattern + '%';
    Video.findAll({
        ...buildQueryToFindAllVideos(req),
        where: {
            [Op.or]: [
                {
                    title: {
                        [Op.like]: searchPattern
                    }
                },
                {
                    description: {
                        [Op.like]: searchPattern
                    }
                },
            ]
        }
    }).then((videos) => {
        const response = buildVideosJsonResponse(videos);
        res.status(200).json(response);
    }).catch((err) => {
        console.log('Unexpected error occured. while searching videos from DB.', err)
        res.status(500).send('Unexpected error occured.');
    })
}