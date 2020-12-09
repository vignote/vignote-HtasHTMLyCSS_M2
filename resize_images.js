const sharp = require('sharp');
const fs = require('fs');

if (process.argv.length < 5) {
  console.log(process.argv.length);
  console.log(
    'Sintaxis: node resize_images in_directory out_directory out_dimen1 out_dimen2 ... out_dimenN '
  );
} else {
  const in_directory = process.argv[2];

  const out_directory = process.argv[3];
  const dimensions = process.argv[4];

  const regexp = /\.(jpe?g|png|gif|webP)$/i;

  //recorremos los ficheros del directorio proporcionado
  fs.readdirSync(in_directory).forEach((file) => {
    if (regexp.test(file)) {
      const filename = file.slice(0, file.lastIndexOf('.'));
      const extension = file.slice(file.lastIndexOf('.'));
      console.log(`Resizing file ${in_directory}/${file} to:`);

      for (let index = 4; index < process.argv.length; index++) {
        const dimension = process.argv[index];
        const out_filename = `${out_directory}/${filename}_${dimension}${extension}`;
        console.log(` - ${dimension}: ${out_filename}`);

        //Redimensionamos a ${dimension}
        sharp(`${in_directory}/${file}`)
          .resize(parseInt(dimension)) // width
          .toFile(`${out_filename}`);
      }
    }
  });
}
