class MainContent {
  constructor(ele) {
    this.ele = ele;
    this.ele.innerHTML = "<h2>Fetch Data</h2>";

    this.ele.addEventListener("click", this.handleClick.bind(this));
  }

  // sortData(data) {

  // }

  handleClick() {
    let dataEl = document.createElement("data");
    const dataBlock = require("/assets/2020_pop_by_state.json");
    const dataTitle = "2020 Census dataset";
    // const dataBlock = require("/assets/sample_state_census_data.json");
    const parsed_data = JSON.stringify(dataBlock);
    let ul = document.createElement("ul");
    // let li = document.createElement("li");
    // li.innerText = `State ID: Name`;
    // ul.appendChild(li);

    let first_entry_processed = false;
    dataBlock.forEach((subArray) => {
      if (!first_entry_processed) {
        let li = document.createElement("li");
        li.innerText = dataTitle;
        li.classList.add("data-header");
        ul.appendChild(li);
        li = document.createElement("li");
        li.innerText = "State: Population";
        li.classList.add("data-header", "subheader");
        ul.appendChild(li);
        first_entry_processed = true;
      } else {
        let li = document.createElement("li");
        li.innerText = `${subArray[1]}: ${subArray[0]}`;
        li.classList.add("item");
        ul.appendChild(li);
      }
    });
    dataEl.appendChild(ul);
    // dataEl.innerText = JSON.stringify(dataBlock, null, "\t"); // Indented 4 spaces
    // dataEl.innerText = JSON.stringify(dataBlock);
    this.ele.appendChild(dataEl);
    this.ele.children[0].innerText = "data fetched!";
  }
}

export default MainContent;
