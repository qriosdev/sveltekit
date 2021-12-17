import fs from 'fs';
import path from 'path';

const routes = ['*'];

const dir = path.resolve();
const blogFolder = path.join(dir, '/src/lib/content/blog');
const destination = path.join(dir, '/src/lib/data/routesData.js');

fs.readdirSync(blogFolder).map((file) => {
	const route = `/blog/${file.replace('.md', '')}/`;
	routes.push(route);
});

const routesData = `export const routes = ${JSON.stringify(routes, null, 4)}`;
fs.writeFileSync(destination, routesData);
