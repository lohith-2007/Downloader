const express = require('express');
const router = express.Router();
const { downloadYouTubeVideo } = require('../utils/youtube');
const { downloadInstagramVideo } = require('../utils/instagram');
const { downloadTikTokVideo } = require('../utils/tiktok');

router.post('/', async (req, res) => {
  try {
    const url = req.body.url;
    const platform = req.body.platform;

    if (platform === 'youtube') {
      const video = await downloadYouTubeVideo(url);
      res.set("Content-Disposition", `attachment; filename="youtube-video.mp4"`);
      res.set("Content-Type", "video/mp4");
      res.send(video);
    } else if (platform === 'instagram') {
      const video = await downloadInstagramVideo(url);
      res.set("Content-Disposition", `attachment; filename="instagram-video.mp4"`);
      res.set("Content-Type", "video/mp4");
      res.send(video);
    } else if (platform === 'tiktok') {
      const video = await downloadTikTokVideo(url);
      res.set("Content-Disposition", `attachment; filename="tiktok-video.mp4"`);
      res.set("Content-Type", "video/mp4");
      res.send(video);
    } else {
      res.status(400).send('Unsupported platform');
    }
  } catch (error) {
    console.error('Error downloading video:', error);
    res.status(500).send('Error downloading video');
  }
});

module.exports = router;
