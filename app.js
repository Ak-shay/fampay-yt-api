require('dotenv').config();

const express = require("express");
const { uploadVideoCronJob } = require("./controllers/uploadVideos");
const { Video } = require('./models/video');
const { checkDBConnection } = require('./utils/checkDBConnection');

const app = express();
const port = process.env.PORT;

checkDBConnection();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`FamPay youtube app listening on port ${port}!`);
});

// syncing Video table with DB
Video.sync();

uploadVideoCronJob();