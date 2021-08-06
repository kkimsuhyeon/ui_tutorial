export const throttle = (func, delay) => {
	// 한번 실행되면 지정한 시간 안에는 실행되지 않는다.
	let throttled = false;
	return (...args) => {
		if (!throttled) {
			throttled = true;
			setTimeout(() => {
				func(...args);
				throttled = false;
			}, delay);
		}
	};
};

export const debounce = (func, delay) => {
	// 시간안에 들어온 함수중에 제일 마지막 함수만 실행됨
	let timeoutId = null;
	return (...args) => {
		clearTimeout(timeoutId);
		timeoutId = setTimeout(func.bind(null, ...args), delay);
	};
};
