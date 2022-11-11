// import Fetcher from "./scripts/fetcher";
import TitleSplash from "./scripts/title_splash";
import MainContent from "./scripts/main-content";

document.addEventListener("DOMContentLoaded", () => {
  const title = document.getElementById("title");
  new TitleSplash(title);
  const main = document.getElementById("main");
  new MainContent(main);
});

// console.log("Hello World");
