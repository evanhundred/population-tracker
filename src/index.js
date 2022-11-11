import Fetcher from "./scripts/fetcher";
import TitleSplash from "./scripts/title_splash";

document.addEventListener("DOMContentLoaded", () => {
  const main = document.getElementById("main");
  new TitleSplash(main);
});

// console.log("Hello World");
