import TitleSplash from "./scripts/title_splash";
import MainContent from "./scripts/main-content";
import Footer from "./scripts/footer";
// import Map from "./scripts/map";
import Fetcher from "./scripts/fetcher";

window.fetcher = Fetcher;

document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("header");
  new TitleSplash(header);
  // const footer = document.getElementById("footer");
  // new Footer(footer);
  // debugger;
  const main = document.getElementById("main-content");
  new MainContent(main);
  // new Map();
  // window.fetcher = new Fetcher();
});
