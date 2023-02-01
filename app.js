require('dotenv').config();

const express = require("express");
const { uploadVideoCronJob } = require("./controllers/uploadVideos");
const { Video } = require('./models/video');
const { checkDBConnection } = require('./utils/common');
const videoRoutes = require('./routes/videoRoutes');

const app = express();
const port = process.env.NODE_DOCKER_PORT || 8080;

checkDBConnection();

// Route middlewares
app.use('/api/v1/', videoRoutes);

app.listen(port, () => {
  console.log(`FamPay youtube app listening on port ${port}!`);
});

// syncing Video table with DB
Video.sync();

uploadVideoCronJob();