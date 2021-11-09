let mutationObserver;

function checkMutationObserver() {
	if (mutationObserver) return;

	mutationObserver = new MutationObserver((mutations) => {
		mutations.forEach((mutation) => {
			if (mutation.attributeName === 'src') {
				console.log(mutation.attributeName);
			}
		});
	});
}

var config = {
	childList: true,
	attributes: true
	//   attributeFilter: ["src"]
};

export default function observeMutation(target) {
	checkMutationObserver();

	mutationObserver.observe(target, config);

	return {
		destroy() {
			mutationObserver.disconnect();
		}
	};
}
