import { throttle, debounce } from './util.js';

const navElem = document.querySelector('#nav');
const navItems = Array.from(navElem.children);
const contentsElem = document.querySelector('#contents');
const contentItems = Array.from(contentsElem.children);

let offsetTops = [];

const getOffsetTops = () => {
	offsetTops = contentItems.map((elem) => {
		const [ofs, clh] = [elem.offsetTop, elem.clientHeight];
		// offsetTop 위에서 부터 얼마나 떨어져있는지
		// clientHeight element의 높이
		return [ofs - clh / 2, ofs + clh / 2];
	});
};

getOffsetTops();

window.addEventListener('scroll', (e) => {
	const { scrollTop } = e.target.scrollingElement; // 스크롤 위치를 가지고 온다.
	const targetIndex = offsetTops.findIndex(([from, to]) => scrollTop >= from && scrollTop < to);

	navItems.forEach((c, i) => {
		if (i !== targetIndex) c.classList.remove('on');
		else c.classList.add('on');
	});
});

window.addEventListener('resize', getOffsetTops);

navElem.addEventListener('click', (e) => {
	const targetElem = e.target;
	if (targetElem.tagName === 'BUTTON') {
		const targetIndex = navItems.indexOf(targetElem.parentElement);
		contentItems[targetIndex].scrollIntoView({
			// https://developer.mozilla.org/ko/docs/Web/API/Element/scrollIntoView
			block: 'start',
			behavior: 'smooth',
		});
	}
});

// window.innerHeight = 화면 크기
