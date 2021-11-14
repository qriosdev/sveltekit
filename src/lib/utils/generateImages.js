import sharp from 'sharp';
import path from 'path';
import fs from 'fs';

const dir = path.resolve();
const imgPath = '/static/images/';
const folder = path.join(dir, imgPath);

const imgDataPath = path.join(dir, '/src/lib/data/imgData.js');

const images = {};
const files = fs.readdirSync(folder);

const generateImages = async (folder) => {
	for (const file of files) {
		const [name, ext] = file.split('.');

		try {
			if (ext !== 'webp') {
				const filePath = path.join(folder, file);
				const getWebp = sharp(filePath);
				const webp = await getWebp.webp().toFile(`${folder}${name}.webp`);
				const width = webp.width;
				const height = webp.height;

				const getPlaceholder = sharp(filePath);
				const placeholder = await getPlaceholder
					.resize(10)
					.jpeg({
						quality: 10,
						progressive: true,
						optimiseScans: true,
						chromaSubsampling: '4:2:0',
						trellisQuantisation: true,
						quantisationTable: 2,
						force: true
					})
					.toBuffer({ resolveWithObject: false });

				const dataURI = `data:image/jpeg;base64,${placeholder.toString('base64')}`;

				const data = {
					width,
					height,
					dataURI
				};

				images[name] = data;
				const imagesData = JSON.stringify(images, null, 4);

				const imgData = `export const images = ${imagesData}`;
				fs.writeFileSync(imgDataPath, imgData, 'utf-8');
			}
		} catch (error) {
			console.log(error);
		}
	}
};

generateImages(folder);
