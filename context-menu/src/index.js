// 1
// const items = document.querySelectorAll(".item");
// items.forEach((item) => {
//   item.addEventListener("click", (e) => {
//     item.classList.toggle("open");
//     items.forEach((element) => {
//       if (element !== item) element.classList.remove("open");
//     });
//   });
// });

// 2
// const wrapper = document.querySelector(".wrapper");
// const items = document.querySelectorAll(".item");

// wrapper.addEventListener("click", (e) => {
//   e.stopPropagation();
//   const target = e.target;

//   if (!target.classList.contains("item")) return;
//   target.classList.toggle("open");
//   items.forEach((item) => {
//     if (item !== target) item.classList.remove("open");
//   });
// });

// document.addEventListener("click", (e) => {
//   const target = e.target;

//   if (target.classList.contains("context")) return;
//   items.forEach((item) => item.classList.remove("open"));
// });

// 3
// const wrapper = document.querySelector(".wrapper");
// const items = document.querySelectorAll(".item");

// document.addEventListener("click", (e) => {
//   const targetClassList = e.target.classList;
//   if (targetClassList.contains("context")) return;
//   if (targetClassList.contains("item")) {
//     targetClassList.toggle("open");
//     items.forEach((item) => {
//       if (item !== e.target) item.classList.remove("open");
//     });
//     return;
//   }
//   items.forEach((item) => item.classList.remove("open"));
// });

// 4
// const containerEl = document.querySelector('.wrapper');

// let latestOpnedEl = null;

// document.addEventListener('click', (e) => {
// 	if (latestOpnedEl) {
// 		latestOpnedEl?.classList.remove('open');
// 		latestOpnedEl = null;
// 	}
// });

// containerEl.addEventListener('click', (e) => {
// 	e.stopPropagation();
// 	const targetEl = e.target;
// 	latestOpnedEl?.classList.remove('open');
// 	if (latestOpnedEl === targetEl) {
// 		latestOpnedEl = targetEl;
// 		return;
// 	}
// 	targetEl?.classList.add('open');
// 	latestOpnedEl = targetEl;
// });
