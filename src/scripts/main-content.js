class MainContent {
  constructor(ele) {
    this.ele = ele;
    this.sortStyle = "byName";

    let firstLine = document.createElement("div");
    firstLine.setAttribute("id", "firstLine");
    this.ele.appendChild(firstLine);

    let h2 = document.createElement("h2");
    h2.innerText = "Fetch Vintage:";
    firstLine.appendChild(h2);
    let div = document.createElement("div");
    div.setAttribute("id", "vintageSelector");
    div.classList.add("firstLine");
    let ul = document.createElement("ul");
    ul.classList.add("vintageUl");
    firstLine.appendChild(div);
    div.appendChild(ul);
    let li = document.createElement("li");
    li.innerText = "2020";
    li.classList.add("2020");
    ul.appendChild(li);
    li = document.createElement("li");
    li.innerText = "2010";
    li.classList.add("2010");
    ul.appendChild(li);
    li = document.createElement("li");
    li.innerText = "2000";
    li.classList.add("2000");
    ul.appendChild(li);

    let secondLine = document.createElement("div");
    secondLine.setAttribute("id", "secondLine");
    ele.appendChild(secondLine);
    ul = document.createElement("ul");
    ul.classList.add("sortSelectorUl");
    secondLine.appendChild(ul);
    this.ele.appendChild(secondLine);

    let thirdLine = document.createElement("div");
    thirdLine.setAttribute("id", "thirdLine");
    this.ele.appendChild(thirdLine);

    let boundFetch2020 = this.fetch2020.bind(this);
    let boundFetch2010 = this.fetch2010.bind(this);
    let boundFetch2000 = this.fetch2000.bind(this);
    let boundSortByName = this.sortByName.bind(this);
    let boundSortByPopulation = this.sortByPopulation.bind(this);

    document.addEventListener("click", function (e) {
      let eventTarget = e.target;

      if (eventTarget.classList.contains("2020")) {
        // debugger;
        boundFetch2020();
      } else if (eventTarget.classList.contains("2010")) {
        boundFetch2010();
      } else if (eventTarget.classList.contains("2000")) {
        boundFetch2000();
      } else if (eventTarget.classList.contains("sortByName")) {
        boundSortByName();
      } else if (eventTarget.classList.contains("sortByPopulation")) {
        boundSortByPopulation();
      }
    });
  }

  fetch2020() {
    this.getData("2020");
  }

  fetch2010() {
    this.getData("2010");
  }

  fetch2000() {
    this.getData("2000");
  }

  printData() {
    if (!document.querySelector("data")) {
      let dataEl = document.createElement("data");
      let dataUl = document.createElement("ul");
      dataUl.classList.add("fetchResultSorted");
      dataEl.appendChild(dataUl);
      let thirdLine = document.getElementById("thirdLine");
      thirdLine.appendChild(dataEl);
      let firstLineFooter = document.createElement("h2");
      firstLineFooter.setAttribute("id", "firstLineFooter");
      firstLineFooter.innerText = "data fetched!";
      let firstLine = document.getElementById("firstLine");
      firstLine.after(firstLineFooter);
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

    let selectorDiv = document.getElementById("secondLine");
    selectorDiv.replaceChild(ul, document.querySelector(".sortSelectorUl"));
    ul.classList.add("sortSelectorUl");
  }

  getData(vintage) {
    let dataBlock;
    let dataTitle;
    let url;

    if (vintage === "2020") {
      // debugger;
      url =
        "https://api.census.gov/data/2020/dec/pl?get=NAME,P1_001N&for=state:*&key=09beac347deddc9da12be4ca736c435f707ebec2";
      // dataBlock = require("/assets/census-2020-P1001N.json");
      dataTitle = "2020 Census dataset";
    } else if (vintage === "2010") {
      // dataBlock = require("/assets/census-2010-P1001N.json");
      url =
        "https://api.census.gov/data/2010/dec/pl?get=NAME,P001001&for=state:*&key=09beac347deddc9da12be4ca736c435f707ebec2";
      dataTitle = "2010 Census dataset";
    } else if (vintage === "2000") {
      url =
        "https://api.census.gov/data/2000/dec/sf1?get=NAME,P001001&for=state:*&key=09beac347deddc9da12be4ca736c435f707ebec2";
      // dataBlock = require("/assets/census-2000-P1001N.json");
      dataTitle = "2000 Census dataset";
    }

    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
      // console.log(request, request.readyState);
      if (request.readyState === 4 && request.status === 200) {
        dataBlock = JSON.parse(request.responseText);
        // console.log(request.responseText);
        this.dataObject = {
          header: dataTitle,
          data: dataBlock,
        };
        this.printData();
        if (this.sortStyle === "byName") {
          this.sortByName();
        } else if (this.sortStyle === "byPop") {
          this.sortByPopulation();
        }
      }
    });

    request.open("GET", url);
    request.send();
  }

  sortData(sortKey) {
    const preSorted = {};
    preSorted.header = this.dataObject.header;
    preSorted.states = [];
    // debugger;
    this.dataObject.data.forEach((row) => {
      if (row[0] !== "NAME") {
        let newState = {};
        newState.stateId = row[2];
        newState.stateName = row[0];
        newState.population = row[1];
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

    for (let i = 0; i < sorted.states.length; i++) {
      let popSource = sorted.states[i].population;

      if (typeof popSource === "number") {
        popSource = parseInt(popSource);
      }

      let arrayedPop = popSource.split("");
      let count = 0;
      let commaPop = [];
      while (arrayedPop.length > 0) {
        if (count === 3) {
          commaPop.push(",");
          count = 0;
        }
        commaPop.push(arrayedPop.pop());
        count++;
      }
      let resultPop = commaPop.reverse().join("");
      sorted.states[i].population = resultPop;
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
    this.sortStyle = "byName";
    let dataObject = this.sortData("byName");
    let dataHeader = dataObject.header;
    let dataEl = document.querySelector("data");
    let ul = document.createElement("ul");
    dataEl.replaceChild(ul, document.querySelector(".fetchResultSorted"));
    ul.classList.add("fetchResultSorted");

    for (let i = 0; i < dataObject.states.length; i++) {
      if (i === 0) {
        let vintageLabel = document.createElement("li");
        vintageLabel.innerText = dataHeader;
        vintageLabel.classList.add("data-header");
        ul.appendChild(vintageLabel);

        let sortLabel = document.createElement("li");
        sortLabel.innerText = "by name";
        sortLabel.classList = "sortLabel";
        ul.appendChild(sortLabel);

        let keyState = document.createElement("li");
        keyState.classList.add("keyState");
        keyState.innerText = "State";
        ul.appendChild(keyState);
        let keyPop = document.createElement("li");
        keyPop.classList.add("keyPop");
        keyPop.innerText = "Population";
        ul.appendChild(keyPop);
      }
      let stateName = document.createElement("li");
      stateName.classList.add("item", "itemName");
      stateName.innerText = `${dataObject.states[i].stateName}`;
      ul.appendChild(stateName);
      let statePop = document.createElement("li");
      statePop.classList.add("item", "itemPop");
      statePop.innerText = `${dataObject.states[i].population}`;
      ul.appendChild(statePop);
    }
  }

  sortByPopulation() {
    this.sortStyle = "byPop";
    let dataObject = this.sortData("byPopulation");
    let dataHeader = dataObject.header;
    let dataEl = document.querySelector("data");
    let ul = document.createElement("ul");
    dataEl.replaceChild(ul, document.querySelector(".fetchResultSorted"));
    ul.classList.add("fetchResultSorted");

    for (let i = 0; i < dataObject.states.length; i++) {
      if (i === 0) {
        let vintageLabel = document.createElement("li");
        vintageLabel.innerText = dataHeader;
        vintageLabel.classList.add("data-header");
        ul.appendChild(vintageLabel);

        let sortLabel = document.createElement("li");
        sortLabel.innerText = "by population";
        sortLabel.classList = "sortLabel";
        ul.appendChild(sortLabel);

        let keyState = document.createElement("li");
        keyState.classList.add("keyState");
        keyState.innerText = "State";
        ul.appendChild(keyState);
        let keyPop = document.createElement("li");
        keyPop.classList.add("keyPop");
        keyPop.innerText = "Population";
        ul.appendChild(keyPop);
      }
      let stateName = document.createElement("li");
      stateName.classList.add("item", "itemName");
      stateName.innerText = `${dataObject.states[i].stateName}`;
      ul.appendChild(stateName);
      let statePop = document.createElement("li");
      statePop.classList.add("item", "itemPop");
      statePop.innerText = `${dataObject.states[i].population}`;
      ul.appendChild(statePop);
    }
  }
}

export default MainContent;
