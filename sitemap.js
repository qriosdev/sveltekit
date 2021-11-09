import fs from 'fs';
import path from 'path';
import pkg from './package.json';

const dir = path.resolve() + '/build';
const hostname = pkg.url;
const exc = ['_app', 'fonts', 'images'];
const list = [];

const getRoutes = (directory) => {
	let files = fs.readdirSync(directory);
	files.forEach((file) => {
		let newPath = path.join(directory, file);
		let isFolder = fs.statSync(newPath).isDirectory();

		if (isFolder && !exc.includes(file)) {
			return getRoutes(newPath);
		}

		if (path.extname(file) === '.html') {
			let base = path.basename(path.dirname(newPath));
			let url = base === 'build' ? hostname : `${hostname}/${base}/`;
			list.push(url);
		}
	});
};

getRoutes(dir);

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
	xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
	xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
	xmlns:xhtml="http://www.w3.org/1999/xhtml"
	xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
	xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
	xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
    ${list
			.map((item) => {
				const date = new Date().toISOString();
				return `<url>
        <loc>${item}</loc>
        <lastmod>${date}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>
    `;
			})
			.join('')}
</urlset>
`;

const sitemapPath = path.join(dir, 'sitemap.xml');
fs.writeFileSync(sitemapPath, sitemap);

console.log(hostname);
