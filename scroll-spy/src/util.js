export const throttle = (func, delay) => {
	let throttled = false;

	return (...args) => {
		if (!throttle) {
			throttled = true;
			setTimeout(() => {
				func(...args);
				throttled = false;
			}, delay);
		}
	};
};

export const debounce = (func, delay) => {
	let timeoutId = null;
	return (...args) => {
		clearTimeout(timeoutId);
		timeoutId = setTimeout(func.bind(null, ...args), delay);
	};
};
