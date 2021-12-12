import { getContent, folder } from '$util/blog';

export async function get({ params }) {
	const { slug } = params;
	const content = await getContent(slug);
	const { metas } = content;

	return {
		body: {
			folder,
			metas
		}
	};
}
