import sharp from 'sharp';
import path from 'path';

const dir = path.resolve();
const imgPath = '/static/images/';
const folder = path.join(dir, imgPath);

export const getWebp = async (file) => {
	const source = folder + file;
	const [name, ext] = file.split('.');

	try {
		const image = sharp(source);
		const result = await image.webp().toFile(`${folder}${name}.webp`);
		return result;
	} catch (error) {
		return error;
	}
};
