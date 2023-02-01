const router= require('express').Router();
const videoController = require('../controllers/videoController');

/**
 * GET API to fetch all videos that contains search query in title or description.
 */
router.get('/getVideos', videoController.getSearchedVideos);
/**
 * GET API to fetch all videos reverse chronological order of their publishing date-time.
 */
router.get('/getAllVideos', videoController.getAllVideos);


module.exports=router;