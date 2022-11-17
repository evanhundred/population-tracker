class Footer {
  constructor(ele) {
    this.ele = ele;

    let container = document.createElement("div");
    container.setAttribute("id", "footer-container");
    this.ele.appendChild(container);
    let contentEl = document.createElement("div");
    contentEl.setAttribute("id", "footer-content");
    contentEl.innerHTML =
      '<p>ER 2022</p><a href="https://github.com/evanhundred" target="_blank"><img src="./assets/logos/github.png" alt="gh"/></a> <a href="https://www.linkedin.com/in/evan-ryan-1a2b07131/" target="_blank"><img src="./assets/logos/linkedin.png" alt="li"/></a>';
    container.appendChild(contentEl);
  }
}

export default Footer;

// 'ER 2022 <a href="https://github.com/evanhundred" target="_blank">gh</a> <a href="https://www.linkedin.com/in/evan-ryan-1a2b07131/" target="_blank">li</a>';
