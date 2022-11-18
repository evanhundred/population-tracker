class TitleSplash {
  constructor(ele) {
    this.ele = ele;
    let oldTitleDiv = document.getElementById("title");
    let newTitleDiv = document.createElement("div");
    newTitleDiv.setAttribute("id", "title");
    let h1 = document.createElement("h1");
    h1.innerHTML = "Population Track<span class='egg'>e</span>r";
    newTitleDiv.appendChild(h1);
    this.ele.replaceChild(newTitleDiv, oldTitleDiv);
    this.textStyle = "normal";

    this.ele.addEventListener("click", this.handleClick.bind(this));

    let contentEl = document.createElement("div");
    // contentEl.setAttribute("id", "personal");
    contentEl.innerHTML =
      '<p>ER 2022</p><a href="https://github.com/evanhundred" target="_blank"><img src="./assets/logos/github.png" alt="gh"/></a> <a href="https://www.linkedin.com/in/evan-ryan-1a2b07131/" target="_blank"><img src="./assets/logos/linkedin.png" alt="li"/></a>';
    document.getElementById("personal").appendChild(contentEl);
  }

  handleClick(e) {
    let eventTarget = e.target;
    if (eventTarget.classList.contains("egg")) {
      if (this.textStyle === "normal") {
        this.textStyle = "spooky";
        this.ele.children[0].innerHTML =
          "..pOpUl<span class='egg'>A</span>tIoN tRaCkEr...";
      } else {
        this.textStyle = "normal";
        this.ele.children[0].innerHTML =
          "Population Track<span class='egg'>e</span>r";
      }
    }
  }
}

export default TitleSplash;
