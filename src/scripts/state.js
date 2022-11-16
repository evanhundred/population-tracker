class State {
  constructor(ele) {
    this.ele = ele;
    this.name = ele.__data__.properties.name;
    this.ele.addEventListener("click", console.log("clicked"));
  }

  addPopulationClass() {}
}
