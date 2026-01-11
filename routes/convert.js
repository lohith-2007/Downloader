const express = require('express');
const router = express.Router();
const { convertVideo } = require('../utils/ffmpeg');

router.post('/', async (req, res) => {
  try {
    const file = req.body.file;
    const format = req.body.format;

    const convertedVideo = await convertVideo(file, format);
    res.set("Content-Disposition", `attachment; filename="converted-video.${format}"`);
    res.set("Content-Type", `video/${format}`);
    res.send(convertedVideo);
  } catch (error) {
    console.error('Error converting video:', error);
    res.status(500).send('Error converting video');
  }
});

module.exports = router;
