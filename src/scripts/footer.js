class Footer {
  constructor(ele) {
    this.ele = ele;

    let container = document.createElement("div");
    container.setAttribute("id", "footer-container");
    this.ele.appendChild(container);
    let contentEl = document.createElement("div");
    contentEl.setAttribute("id", "footer-content");
    contentEl.innerText = "ER 2022";
    container.appendChild(contentEl);
  }
}

export default Footer;
