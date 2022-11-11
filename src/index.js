import Fetcher from "./scripts/fetcher";
import TitleSplash from "./scripts/title_splash";

document.addEventListener("DOMContentLoaded", () => {
  const title = document.getElementById("title");
  new TitleSplash(title);
});

// console.log("Hello World");
