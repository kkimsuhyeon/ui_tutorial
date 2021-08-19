import "./index.css";

document.addEventListener("DOMContentLoaded", () => {
  let theme = localStorage.getItem("theme"); // 로컬 스토리지를 통해서 theme 설정을 확인

  if (!theme) {
    const { matches } = window.matchMedia("(prefers-color-scheme: dark)"); // 만약 로컬 스토리지에 theme가 없으면 os 테마를 사용
    theme = matches ? "dark" : "light";
    localStorage.setItem("theme", theme)
  }
});
