class Footer {
  constructor(ele) {
    this.ele = ele;

    let container = document.createElement("div");
    container.setAttribute("id", "footer-container");
    this.ele.appendChild(container);
    let contentEl = document.createElement("div");
    contentEl.setAttribute("id", "footer-content");
    contentEl.innerHTML =
      'ER 2022 <a href="https://github.com/evanhundred" target="_blank">gh</a>';
    container.appendChild(contentEl);
  }
}

export default Footer;
