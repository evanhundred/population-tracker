class MainContent {
  constructor(ele) {
    this.ele = ele;

    let h2 = document.createElement("h2");
    h2.innerHTML = "Fetch Data";
    ele.appendChild(h2);

    let div = document.createElement("div");
    div.setAttribute("id", "sortSelector");
    ele.appendChild(div);

    // this.doAction = firstAction;
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
    this.dataObject = this.getData();
    const preSorted = {};
    preSorted.header = this.dataObject.header;
    preSorted.states = [];
    this.dataObject.data.forEach((row) => {
      let newState = {};
      newState.stateId = row[2];
      newState.stateName = row[1];
      newState.population = row[0];
      preSorted.states.push(newState);
    });

    let sorted = {};
    sorted.states = this.objSort(preSorted.states);
    sorted.header = this.dataObject.header;

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

  sortByName() {
    let dataObject = this.sortData();
    let dataHeader = dataObject.header;
    let ul = document.querySelector(".fetchResultSorted");

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
  }

  sortByPopulation() {
    let dataObject = this.sortData();
    let dataHeader = dataObject.header;
    let ul = document.querySelector(".fetchResultSorted");

    let li = document.createElement("li");
    li.innerText = "sort by population";
    ul.appendChild(li);

    // let first_entry_processed = false;
    // for (let i = 0; i < dataObject.states.length; i++) {
    //   if (!first_entry_processed) {
    //     let li = document.createElement("li");
    //     li.innerText = dataHeader;
    //     li.classList.add("data-header");
    //     ul.appendChild(li);
    //     li = document.createElement("li");
    //     li.innerText = "State: Population";
    //     li.classList.add("data-header", "subheader");
    //     ul.appendChild(li);
    //     first_entry_processed = true;
    //   } else {
    //     let li = document.createElement("li");
    //     li.innerText = `${dataObject.states[i].stateName}: ${dataObject.states[i].population}`;
    //     li.classList.add("item");
    //     ul.appendChild(li);
    //   }
    // }
  }

  // let this.doAction = firstAction;

  handleClick() {
    this.firstAction();
  }

  // doAction() {

  // }

  secondAction() {
    this.sortByName(this.dataObject);
  }

  firstAction() {
    // this.ele.removeEventListener("click", this.handleClick.bind(this));
    // this.doAction = secondAction;

    const dataObject = this.sortData();
    const dataHeader = dataObject.header;

    let dataEl = document.createElement("data");
    let dataUl = document.createElement("ul");
    // ul.setAttribute("id", "fetchResultSorted");
    dataUl.classList.add("fetchResultSorted");
    dataEl.appendChild(dataUl);
    this.ele.appendChild(dataEl);
    this.ele.children[0].innerText = "data fetched!";

    let ul = document.createElement("ul");
    ul.classList.add("sortSelector");
    let li = document.createElement("li");
    li.innerText = "Sort by Name";
    // debugger;
    li.addEventListener("click", this.sortByName(this.dataObject));

    ul.appendChild(li);

    li = document.createElement("li");
    li.innerText = "Sort by Population";
    li.addEventListener("click", this.sortByPopulation(this.dataObject));
    ul.appendChild(li);

    document.getElementById("sortSelector").appendChild(ul);
  }
}

export default MainContent;
