const ytdl = require('ytdl-core');

async function downloadYouTubeVideo(url) {
  try {
    const video = await ytdl(url, { filter: 'audioandvideo' });
    return video;
  } catch (error) {
    console.error('Error downloading YouTube video:', error);
    throw error;
  }
}

module.exports = { downloadYouTubeVideo };
