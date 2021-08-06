import { throttle, debounce } from './util.js';
import './index.css';

const navElem = document.querySelector('#nav');
const navItems = Array.from(navElem.children);
const contentsElem = document.querySelector('#contents');
const contentItems = Array.from(contentsElem.children);

// normal
/* let offsetTops = [];

const getOffsetTops = () => {
	offsetTops = contentItems.map((elem) => {
		const [ofs, clh] = [elem.offsetTop, elem.clientHeight];
		// offsetTop 위에서 부터 얼마나 떨어져있는지
		// clientHeight element의 높이
		return [ofs - clh / 2, ofs + clh / 2];
	});
};

getOffsetTops();

window.addEventListener(
	'scroll',
	throttle((e) => {
		const { scrollTop } = e.target.scrollingElement; // 스크롤 위치를 가지고 온다.
		const targetIndex = offsetTops.findIndex(([from, to]) => scrollTop >= from && scrollTop < to);

		navItems.forEach((c, i) => {
			if (i !== targetIndex) c.classList.remove('on');
			else c.classList.add('on');
		});
	}, 300)
);

window.addEventListener('resize', debounce(getOffsetTops, 300));

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

*/

// intersectionObserver
/*
const scrollSpyObserver = new IntersectionObserver(
	// https://heropy.blog/2019/10/27/intersection-observer/
	(entries, observer) => {
		const { target } = entries.find((entry) => entry.isIntersecting === true);
		// isIntersecting 현재 화면에 표현되면 true, 아니면 false

		const index = contentItems.indexOf(target);
		Array.from(navElem.children).forEach((element, i) => {
			if (i === index) element.classList.add('on');
			else element.classList.remove('on');
		});
	},
	{
		root: null, // root를 설정함, 지정안 할 경우 viewport로 설정
		rootMargin: '0px',
		threshold: 0.5, // 지정된 요소가 50% 보여졌을때 콜백 함수가 실행되는 것을 의미
	}
);

contentItems.forEach((item) => scrollSpyObserver.observe(item)); // 해당 element을 등록
// unobserve(element) 등록 취소
// disconnect() 전체 취소

navElem.addEventListener('click', (e) => {
	const targetElem = e.target;
	if (targetElem.tagName === 'BUTTON') {
		const targetIndex = navItems.indexOf(targetElem.parentElement);
		contentItems[targetIndex].scrollIntoView({
			block: 'start',
			behavior: 'smooth',
		});
	}
});
*/
