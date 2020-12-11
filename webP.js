const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');

imagemin(['in_png/*'], {
  destination: 'webP_images',
  plugins: [imageminWebp({ quality: 50 })],
}).then(() => {
  console.log('Done!');
});
