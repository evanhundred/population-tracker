import TitleSplash from "./scripts/title_splash";
import MainContent from "./scripts/main-content";
import Footer from "./scripts/footer";

document.addEventListener("DOMContentLoaded", () => {
  const title = document.getElementById("title");
  new TitleSplash(title);
  const footer = document.getElementById("footer");
  new Footer(footer);
  // debugger;
  const main = document.getElementById("main-content");
  new MainContent(main);
});
