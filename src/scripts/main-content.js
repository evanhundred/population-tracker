class MainContent {
  constructor(ele) {
    this.ele = ele;
    this.ele.innerHTML = "<h2>Fetch Data</h2>";

    this.ele.addEventListener("click", this.handleClick.bind(this));
  }

  handleClick() {
    let dataEl = document.createElement("data");
    const dataBlock = require("/assets/sample_state_census_data.json");
    dataEl.innerText = dataBlock;
    this.ele.appendChild(dataEl);
    this.ele.children[0].innerText = "data fetched!";
  }
}

export default MainContent;