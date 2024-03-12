import TitleSplash from "./scripts/title_splash";
import MainContent from "./scripts/main-content";
import instructionsModal from "./scripts/instructionsModal";

document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("header");
  new TitleSplash(header);

  const main = document.getElementById("main-content");
  new MainContent(main);

  const instructionsModalContainer = document.createElement("div");
  instructionsModalContainer.setAttribute("id", "instructions-modal-container");
  main.appendChild(instructionsModalContainer);
  new instructionsModal(instructionsModalContainer);
});
