class Footer {
  constructor(ele) {
    this.ele = ele;

    let container = document.createElement("div");
    container.setAttribute("id", "footer-container");
    this.ele.appendChild(container);
    let contentEl = document.createElement("div");
    contentEl.setAttribute("id", "footer-content");
    contentEl.innerHTML =
      '<a href="https://evanryan.dev" target="_blank" rel="noopener noreferrer"><p>ER 2024</p></a><a href="https://github.com/evanhundred" target="_blank" rel="noopener noreferrer"><img src="./assets/logos/github.png" alt="gh"/></a> <a href="https://www.linkedin.com/in/evan-ryan-dev/" target="_blank" rel="noopener noreferrer"><img src="./assets/logos/linkedin.png" alt="li"/></a>';
    container.appendChild(contentEl);
  }
}

export default Footer;
