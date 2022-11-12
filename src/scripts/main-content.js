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

  sortData() {
    const dataObject = this.getData();
    const preSorted = {};
    preSorted.header = dataObject.header;
    // sorted.state_id = [];
    // sorted.state_name = [];
    // sorted.population = [];
    preSorted.states = [];
    dataObject.data.forEach((row) => {
      // preSorted.states.[row[1]]: {};
      let newState = {};
      newState.stateId = row[2];
      newState.stateName = row[1];
      newState.population = row[0];
      preSorted.states.push(newState);
      // sorted.states.state_id.push(row[2]);
      // sorted.states.state_name.push(row[1]);
      // sorted.states.population.push(row[0]);
    });

    let sorted = {};
    sorted.states = this.objSort(preSorted.states);
    sorted.header = dataObject.header;
    // sort by name

    // for (let i = 0; i < sorted.state_name; i++) {
    //   sorted.state_name;
    // }

    return sorted;
  }

  // compare(a,b) {
  //   if (a.state_name < b.state_name) return -1;
  //   if (a.state_name > b.state_name) return 1;
  //   return 0;
  //   }

  objSort(obj) {
    // debugger;
    // function compare(a, b) {
    //   if (a.state_name < b.state_name) return -1;
    //   if (a.state_name > b.state_name) return 1;
    //   return 0;
    // }
    // debugger;

    let sorted = obj.sort((a, b) => {
      if (a.stateName < b.stateName) return -1;
      if (a.stateName > b.stateName) return 1;
      return 0;
    });
    // debugger;
    return sorted;
    // this.compare(a, b)
  }

  // mergeSort(arr) {
  //   if (arr.length <= 1) return arr;

  //   let mid = Math.floor(arr.length / 2);
  //   let left = arr.slice(0, mid);
  //   let right = arr.slice(mid);

  //   let leftSorted = mergeSort(left);
  //   let rightSorted = mergeSort(right);

  //   return merge(leftSorted, rightSorted);
  // }

  // merge(left, right) {
  //   let merged = [];
  //   while (left.length > 0 && right.length > 0) {
  //     if (left[0] < right[0]) {
  //       merged.push(left.shift());
  //     } else {
  //       merged.push(right.shift());
  //     }
  //   }
  //   return merged + left + right;
  // }

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

    // dataObject.data.forEach((subArray) => {
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
    //     li.innerText = `${subArray[1]}: ${subArray[0]}`;
    //     li.classList.add("item");
    //     ul.appendChild(li);
    //   }
    // });
    // dataObject.data.forEach((subArray) => {
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
    //     li.innerText = `${subArray[1]}: ${subArray[0]}`;
    //     li.classList.add("item");
    //     ul.appendChild(li);
    //   }
    // });
    dataEl.appendChild(ul);
    // dataEl.innerText = JSON.stringify(dataBlock, null, "\t"); // Indented 4 spaces
    // dataEl.innerText = JSON.stringify(dataBlock);
    this.ele.appendChild(dataEl);
    this.ele.children[0].innerText = "data fetched!";
  }
}

export default MainContent;
