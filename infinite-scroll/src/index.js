import "./index.css";
import renderList from "./listRenderer";
import { debounce } from "./util";

const app = document.querySelector("#app");
const fetchMoreTrigger = document.querySelector("#fetchMore");
let page = 0;

const loadMore = async () => {
  const target = page ? fetchMoreTrigger : app;
  target.classList.add("loading");
  await renderList(page++);
  target.classList.remove("loading");
};

// const onScroll = (e) => {
//   const { clientHeight, scrollTop, scrollHeight } = e.target.scrollingElement;
//   if (scrollTop + clientHeight === scrollHeight) {
//     loadMore();
//   }
// };

// document.addEventListener("scroll", debounce(onScroll, 300));

// const fetchMoreObserver = new IntersectionObserver((entries, observer) => {
//   // fetchMoreTrigger의 margin-top, display style 수정해야함
//   if (entries[0].isIntersecting) loadMore();
// });
// fetchMoreObserver.observe(fetchMoreTrigger);

loadMore();
