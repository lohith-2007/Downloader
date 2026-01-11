const downloadForm = document.getElementById('download-form');
const convertForm = document.getElementById('convert-form');

downloadForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const url = document.getElementById('url').value;
  const platform = document.getElementById('platform').value;

  try {
    const response = await fetch('/download', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url, platform }),
    });
    const blob = await response.blob();
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'video.mp4';
    link.click();
  } catch (error) {
    console.error('Error downloading video:', error);
  }
});

convertForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const file = document.getElementById('file').files[0];
  const format = document.getElementById('format').value;

  try {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('format', format);

    const response = await fetch('/convert', {
      method: 'POST',
      body: formData,
    });
    const blob = await response.blob();
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `converted-video.${format}`;
    link.click();
  } catch (error) {
    console.error('Error converting video:', error);
  }
});
