const https = require('https');
const fs = require('fs');
const path = require('path');

const images = [
  {
    url: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b',
    filename: 'wifi-security.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1617791160505-6f00504e3519',
    filename: 'cnn-brain.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713',
    filename: 'bsu-tech.jpg'
  }
];

const downloadImage = (url, filename) => {
  const filepath = path.join(__dirname, 'public', 'images', filename);
  const file = fs.createWriteStream(filepath);

  https.get(url, (response) => {
    response.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log(`Downloaded ${filename}`);
    });
  }).on('error', (err) => {
    fs.unlink(filepath, () => {});
    console.error(`Error downloading ${filename}:`, err.message);
  });
};

images.forEach(img => downloadImage(img.url, img.filename)); 