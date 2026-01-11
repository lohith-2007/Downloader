const TikTokScraper = require('tiktok-scraper');

async function downloadTikTokVideo(url) {
  try {
    const scraper = new TikTokScraper();
    const video = await scraper.getVideoMeta(url);
    return video.collector[0].videoUrl;
  } catch (error) {
    console.error('Error downloading TikTok video:', error);
    throw error;
  }
}

module.exports = { downloadTikTokVideo };
