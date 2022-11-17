class TitleSplash {
  constructor(ele) {
    this.ele = ele;
    this.ele.innerHTML = "<h1>Population Track<span class='egg'>e</span>r</h1>";
    this.textStyle = "normal";

    this.ele.addEventListener("click", this.handleClick.bind(this));
  }

  handleClick(e) {
    let eventTarget = e.target;
    if (eventTarget.classList.contains("egg")) {
      if (this.textStyle === "normal") {
        this.textStyle = "spooky";
        this.ele.children[0].innerHTML =
          "<h1>...pOpUl<span class='egg'>A</span>tIoN tRaCkEr...</h1>";
      } else {
        this.textStyle = "normal";
        this.ele.children[0].innerHTML =
          "<h1>Population Track<span class='egg'>e</span>r</h1>";
      }
    }
  }
}

export default TitleSplash;
