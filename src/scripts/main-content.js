class MainContent {
  constructor(ele) {
    this.ele = ele;

    let h2 = document.createElement("h2");
    h2.classList.add("fetchData");
    h2.innerText = "Fetch Data";
    ele.appendChild(h2);

    let div = document.createElement("div");
    div.setAttribute("id", "sortSelector");
    ele.appendChild(div);
    let ul = document.createElement("ul");
    ul.classList.add("selectorUl");
    div.appendChild(ul);

    let boundFirstAction = this.firstAction.bind(this);
    let boundSortByName = this.sortByName.bind(this);
    let boundSortByPopulation = this.sortByPopulation.bind(this);

    document.addEventListener("click", function (e) {
      let eventTarget = e.target;

      if (eventTarget.classList.contains("fetchData")) {
        boundFirstAction();
      } else if (eventTarget.classList.contains("sortByName")) {
        boundSortByName();
      } else if (eventTarget.classList.contains("sortByPopulation")) {
        boundSortByPopulation();
      }
    });
  }

  firstAction() {
    if (!document.querySelector("data")) {
      let dataEl = document.createElement("data");
      let dataUl = document.createElement("ul");
      dataUl.classList.add("fetchResultSorted");
      dataEl.appendChild(dataUl);
      this.ele.appendChild(dataEl);
      this.ele.children[0].innerText = "data fetched!";
    }

    let ul = document.createElement("ul");
    let li = document.createElement("li");
    li.classList.add("sortByName");
    li.innerText = "Sort by Name";
    ul.appendChild(li);

    li = document.createElement("li");
    li.classList.add("sortByPopulation");
    li.innerText = "Sort by Population";
    ul.appendChild(li);

    let selectorDiv = document.getElementById("sortSelector");
    selectorDiv.replaceChild(ul, document.querySelector(".selectorUl"));
    ul.classList.add("selectorUl");
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

  sortData(sortKey) {
    this.dataObject = this.getData();
    const preSorted = {};
    preSorted.header = this.dataObject.header;
    preSorted.states = [];
    this.dataObject.data.forEach((row) => {
      if (row[1] !== "NAME") {
        let newState = {};
        newState.stateId = row[2];
        newState.stateName = row[1];
        newState.population = row[0];
        preSorted.states.push(newState);
      }
    });

    let sorted = {};
    if (sortKey === "byName") {
      sorted.states = this.objSortByName(preSorted.states);
      sorted.header = this.dataObject.header;
    } else if (sortKey === "byPopulation") {
      sorted.states = this.objSortByPopulation(preSorted.states);
      sorted.header = this.dataObject.header;
    }

    return sorted;
  }

  objSortByName(obj) {
    let sorted = obj.sort((a, b) => {
      if (a.stateName < b.stateName) return -1;
      if (a.stateName > b.stateName) return 1;
      return 0;
    });

    return sorted;
  }

  objSortByPopulation(obj) {
    let sorted = obj.sort((b, a) => {
      if (parseInt(a.population) < parseInt(b.population)) return -1;
      if (parseInt(a.population) > parseInt(b.population)) return 1;
      return 0;
    });

    return sorted;
  }

  sortByName() {
    let dataObject = this.sortData("byName");
    let dataHeader = dataObject.header;
    let dataEl = document.querySelector("data");
    let ul = document.createElement("ul");
    dataEl.replaceChild(ul, document.querySelector(".fetchResultSorted"));
    ul.classList.add("fetchResultSorted");

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
    let dataObject = this.sortData("byPopulation");
    let dataHeader = dataObject.header;
    let dataEl = document.querySelector("data");
    let ul = document.createElement("ul");
    dataEl.replaceChild(ul, document.querySelector(".fetchResultSorted"));
    ul.classList.add("fetchResultSorted");

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
}

export default MainContent;
