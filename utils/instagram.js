const { IgApiClient } = require('instagram-private-api');

async function downloadInstagramVideo(url) {
  try {
    const ig = new IgApiClient();
    // Login to Instagram
    await ig.state.generateDevice('your-instagram-username');
    await ig.account.login('your-instagram-username', 'your-instagram-password');

    const mediaId = await getMediaId(url);
    const video = await ig.media.info(mediaId);
    return video.items[0].video_versions[0].url;
  } catch (error) {
    console.error('Error downloading Instagram video:', error);
    throw error;
  }
}

async function getMediaId(url) {
  try {
    // Extract media ID from URL
    const mediaId = url.match(/"media_id":"(\d+)"/)[1];
    return mediaId;
  } catch (error) {
    console.error('Error getting media ID:', error);
    throw error;
  }
}

module.exports = { downloadInstagramVideo };
