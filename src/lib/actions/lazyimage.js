import viewport from '$act/viewport';
// import { getWebp } from '$util/webp';

export default function lazyimage(element) {
	// const file = element.dataset.file;
	// const img = getWebp(file);
	// console.log(img);
	const viewportActionMethods = viewport(element);
	element.addEventListener('enterViewport', enterViewport);
	window.addEventListener('resize', removeSize);

	function enterViewport() {
		if (element.tagName === 'IMG') {
			element.src = element.dataset.src;
		}

		if (element.tagName === 'SOURCE') {
			element.srcset = element.dataset.srcset;
		}

		element.removeEventListener('enterViewport', enterViewport);
	}

	function removeSize() {
		element.removeAttribute('width');
		element.removeAttribute('height');

		window.removeEventListener('resize', removeSize);
	}

	return {
		destroy() {
			viewportActionMethods.destroy();
			element.removeEventListener('enterViewport', enterViewport);
		}
	};
}
