class Example {
  constructor(ele) {
    this.ele = ele;
    this.ele.innerHTML = "<h1>Population Tracker</h1>";

    this.ele.addEventListener("click", this.handleClick.bind(this));
  }

  handleClick() {
    this.ele.children[0].innerText = "...pOpUlAtIoN tRaCkEr...";
  }
}

export default Example;
