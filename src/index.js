import TitleSplash from "./scripts/title_splash";
import MainContent from "./scripts/main-content";
import Footer from "./scripts/footer";
// import Map from "./scripts/map";
import Fetcher from "./scripts/fetcher";
import SplashModal from "./scripts/splashModal";

window.fetcher = Fetcher;

document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("header");
  new TitleSplash(header);
  // const footer = document.getElementById("footer");
  // new Footer(footer);

  const main = document.getElementById("main-content");
  new MainContent(main);
  // new Map();
  // window.fetcher = new Fetcher();

  const splashModalContainer = document.createElement("div");
  splashModalContainer.setAttribute("id", "splash-modal-container");
  main.appendChild(splashModalContainer);
  const splashModal = new SplashModal(splashModalContainer);

  // const splashModalLine1 = document.createElement("div");
  // splashModalLine1.classList.add("splash-modal-line-1");
});
