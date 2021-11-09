import sharp from 'sharp';
import path from 'path';

const dir = path.resolve();
const imgPath = '/static/images/';
const folder = path.join(dir, imgPath);

export const lowRes = async (file) => {
	const source = folder + file;

	try {
		const image = sharp(source);
		const buffer = await image
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

		return `data:image/jpeg;base64,${buffer.toString('base64')}`;
	} catch (error) {
		return error;
	}
};
