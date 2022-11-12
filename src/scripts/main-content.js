class MainContent {
  constructor(ele) {
    this.ele = ele;
    this.ele.innerHTML = "<h2>Fetch Data</h2>";

    this.ele.addEventListener("click", this.handleClick.bind(this));
  }

  getData() {
    const dataBlock = require("/assets/2020_pop_by_state.json");
    const dataTitle = "2020 Census dataset";
    const obj = {
      header: dataTitle,
      data: dataBlock,
    };
    return obj;
  }

  sortData(data) {}

  handleClick() {
    const dataObject = this.getData();
    const dataHeader = dataObject.header;

    let ul = document.createElement("ul");
    let dataEl = document.createElement("data");

    let first_entry_processed = false;
    dataObject.data.forEach((subArray) => {
      if (!first_entry_processed) {
        let li = document.createElement("li");
        li.innerText = dataHeader;
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
