import { getWebp } from '$util/webp';
// import { dominantColor } from '$util/placeholder';
import { lowRes } from '$util/placeholder';

export async function get({ params }) {
	const { image } = params;

	const generatePlaceholder = lowRes(image);
	const placeholder = await generatePlaceholder;

	const toWebp = getWebp(image);
	const webp = await toWebp;

	return {
		body: { webp, placeholder }
	};
}
