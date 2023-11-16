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
  const splashModalContainer = document.createElement("div");
  splashModalContainer.setAttribute("id", "splash-modal-container");

  const splashModalOverlay = document.createElement("div");
  splashModalOverlay.classList.add("splash-modal-overlay");

  const splashModalBox = document.createElement("div");
  splashModalBox.classList.add("splash-modal-box");

  const splashModalContent = document.createElement("div");
  splashModalContent.classList.add("splash-modal-content");

  const closeX = document.createElement("div");
  closeX.classList.add("close-x");

  const modalText = document.createElement("div");
  modalText.classList.add("modal-text");
  const createModalText = () => {
    for (let i = 1; i <= 5; i++) {
      const p = document.createElement("p");
      p.classList.add(`modal-line-${i}`);
      modalText.appendChild(p);
    }
  };
  const firstLine = document.qurerySelector(
    "#splash-modal-container p.modal-line-1"
  );
  firstLine.innerText = "Welcome to Population Tracker.";

  // const splashModalLine1 = document.createElement("div");
  // splashModalLine1.classList.add("splash-modal-line-1");
});
