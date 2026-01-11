const ffmpeg = require('fluent-ffmpeg');

async function convertVideo(file, format) {
  try {
    const command = ffmpeg(file);
    command.setFormat(format);
    const convertedVideo = await command;
    return convertedVideo;
  } catch (error) {
    console.error('Error converting video:', error);
    throw error;
  }
}

module.exports = { convertVideo };
