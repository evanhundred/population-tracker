class MainContent {
  constructor(ele) {
    this.ele = ele;

    let h2 = document.createElement("h2");
    h2.innerHTML = "Fetch Data";
    ele.appendChild(h2);

    let div = document.createElement("div");
    ele.appendChild(div);

    // let ul = document.createElement("ul");
    // let li = document.createElement("li");
    // li.classList.add("sortSelector");
    // li.innertext = "Sort by Name";
    // ul.appendChild(li);

    // li = document.createElement("li");
    // li.classList.add("sortSelector");
    // li.innertext = "Sort by Population";
    // ul.appendChild(li);

    // ele.appendChild(ul);

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

  sortData() {
    const dataObject = this.getData();
    const preSorted = {};
    preSorted.header = dataObject.header;
    preSorted.states = [];
    dataObject.data.forEach((row) => {
      let newState = {};
      newState.stateId = row[2];
      newState.stateName = row[1];
      newState.population = row[0];
      preSorted.states.push(newState);
    });

    let sorted = {};
    sorted.states = this.objSort(preSorted.states);
    sorted.header = dataObject.header;

    return sorted;
  }

  objSort(obj) {
    let sorted = obj.sort((a, b) => {
      if (a.stateName < b.stateName) return -1;
      if (a.stateName > b.stateName) return 1;
      return 0;
    });

    return sorted;
  }

  handleClick() {
    const dataObject = this.sortData();
    const dataHeader = dataObject.header;

    let ul = document.createElement("ul");
    let dataEl = document.createElement("data");

    let first_entry_processed = false;
    for (let i = 0; i < dataObject.states.length; i++) {
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
        li.innerText = `${dataObject.states[i].stateName}: ${dataObject.states[i].population}`;
        li.classList.add("item");
        ul.appendChild(li);
      }
    }

    dataEl.appendChild(ul);
    this.ele.appendChild(dataEl);
    this.ele.children[0].innerText = "data fetched!";

    ul = document.createElement("ul");
    ul.classList.add("sortSelector");
    let li = document.createElement("li");
    // li.classList.add("sortSelector");
    li.innerText = "Sort by Name";
    ul.appendChild(li);

    li = document.createElement("li");
    // li.classList.add("sortSelector");
    li.innerText = "Sort by Population";
    ul.appendChild(li);

    this.ele.children[1].appendChild(ul);
  }
}

export default MainContent;
