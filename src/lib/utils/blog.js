import path from 'path';
import fs from 'fs';
import { compile } from 'mdsvex';

const dir = path.resolve();
export const folder = path.join(dir, '/src/lib/content/blog');
// const blogs = fs.readdirSync(folder).map((file) => file.replace('.md', ''));

export const getContent = async (slug) => {
	const contentPath = path.join(folder, `${slug}.md`);
	const fileContent = fs.readFileSync(contentPath, { encoding: 'utf-8' });
	const content = await compile(fileContent);
	const body = content.code;
	const metas = content.data.fm;
	return { contentPath, body, metas };
};
