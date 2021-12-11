import fs from 'fs';
import path from 'path';

const dir = path.resolve();
const folder = path.join(dir, '/static/fonts/');
const fontData = path.join(dir, '/src/lib/data/fontData.js');

const list = [];
const files = fs.readdirSync(folder);

export const getFonts = () => {
	for (const file of files) {
		const font = `/fonts/${file}`;
		list.push(font);

		const fontFiles = JSON.stringify(list, null, 4);

		const fontList = `export const fonts = ${fontFiles}`;
		fs.writeFileSync(fontData, fontList, 'utf-8');
	}
};

getFonts();
