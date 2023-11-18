import AddPopClass from "../add-pop-class";

class Printer {
  constructor(dataObject = {}, sortStyle = null) {
    this.dataObject = dataObject;
    this.sortStyle = sortStyle;
    console.log(dataObject);
  }

  printData() {
    if (!document.querySelector("data")) {
      let dataEl = document.createElement("data");
      let dataUl = document.createElement("ul");
      dataUl.classList.add("fetchResultSorted");
      dataEl.appendChild(dataUl);
      let thirdLine = document.getElementById("thirdLine");
      thirdLine.appendChild(dataEl);
    }

    let firstLineFooterH2 = document.getElementById("firstLineFooterH2");
    firstLineFooterH2.innerText = "data fetched!";

    let ul = document.createElement("ul");
    let li = document.createElement("li");
    li.classList.add("sortByName");
    li.innerText = "Sort by Name";
    ul.appendChild(li);

    li = document.createElement("li");
    li.classList.add("sortByPopulation");
    li.innerText = "Sort by Population";
    ul.appendChild(li);

    let selectorDiv = document.getElementById("second-line");
    selectorDiv.replaceChild(ul, document.querySelector(".sortSelectorUl"));
    ul.classList.add("sortSelectorUl");
  }

  sortByName() {
    let addPopClass = new AddPopClass();
    // this.sortStyle = "byName";
    // let dataObject = this.sortData("byName");
    // ;
    let dataObject = this.dataObject;
    let dataHeader = dataObject.header;
    let dataEl = document.querySelector("data");
    let ul = document.createElement("ul");
    dataEl.replaceChild(ul, document.querySelector(".fetchResultSorted"));
    ul.classList.add("fetchResultSorted");

    let fiftyPlusDCName;
    let fiftyPlusDCPop;
    let totalUSName;
    let totalUSPop;
    let totalTerrName;
    let totalTerrPop;

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

    for (let i = 0; i < dataObject.states.length; i++) {
      if (
        dataObject.states[i].stateName !== "50 states + DC" &&
        dataObject.states[i].stateName !== "Total territories" &&
        dataObject.states[i].stateName !== "Total U.S. population"
      ) {
        // ;
        let stateName = document.createElement("li");
        stateName.classList.add("item", "itemName");
        addPopClass.addClass(dataObject.states[i], stateName);
        stateName.innerText = `${dataObject.states[i].stateName}`;
        ul.appendChild(stateName);
        let statePop = document.createElement("li");
        statePop.classList.add("item", "itemPop");
        addPopClass.addClass(dataObject.states[i], statePop);
        statePop.innerText = `${dataObject.states[i].population}`;
        ul.appendChild(statePop);
      } else if (dataObject.states[i].stateName === "50 states + DC") {
        fiftyPlusDCName = document.createElement("li");
        fiftyPlusDCName.classList.add("item", "itemName", "fiftyPlusDC");
        fiftyPlusDCName.innerText = `${dataObject.states[i].stateName}`;
        fiftyPlusDCPop = document.createElement("li");
        fiftyPlusDCPop.classList.add("item", "itemPop", "fiftyPlusDC");
        addPopClass.addClass(dataObject.states[i], fiftyPlusDCPop);
        fiftyPlusDCPop.innerText = `${dataObject.states[i].population}`;
      } else if (dataObject.states[i].stateName === "Total U.S. population") {
        totalUSName = document.createElement("li");
        totalUSName.classList.add("item", "itemName", "totalUS");
        totalUSName.innerText = `${dataObject.states[i].stateName}`;
        totalUSPop = document.createElement("li");
        addPopClass.addClass(dataObject.states[i], totalUSPop);
        totalUSPop.classList.add("item", "itemPop", "totalUS");
        totalUSPop.innerText = `${dataObject.states[i].population}`;
      } else if (dataObject.states[i].stateName === "Total territories") {
        totalTerrName = document.createElement("li");
        totalTerrName.classList.add("item", "itemName", "totalTerr");
        totalTerrName.innerText = `${dataObject.states[i].stateName}`;
        totalTerrPop = document.createElement("li");
        totalTerrPop.classList.add("item", "itemPop", "totalTerr");
        addPopClass.addClass(dataObject.states[i], totalTerrPop);
        totalTerrPop.innerText = `${dataObject.states[i].population}`;
      }
    }
    // ;
    ul.appendChild(totalTerrName);
    ul.appendChild(totalTerrPop);
    ul.appendChild(fiftyPlusDCName);
    ul.appendChild(fiftyPlusDCPop);
    ul.appendChild(totalUSName);
    ul.appendChild(totalUSPop);
  }

  sortByPopulation() {
    let addPopClass = new AddPopClass();
    this.sortStyle = "byPop";
    let dataObject = this.sortData("byPopulation");
    let dataHeader = dataObject.header;
    let dataEl = document.querySelector("data");
    let ul = document.createElement("ul");
    dataEl.replaceChild(ul, document.querySelector(".fetchResultSorted"));
    ul.classList.add("fetchResultSorted");

    let fiftyPlusDCName;
    let fiftyPlusDCPop;
    let totalUSName;
    let totalUSPop;
    let totalTerrName;
    let totalTerrPop;

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

    for (let i = 0; i < dataObject.states.length; i++) {
      if (
        dataObject.states[i].stateName !== "50 states + DC" &&
        dataObject.states[i].stateName !== "Total territories" &&
        dataObject.states[i].stateName !== "Total U.S. population"
      ) {
        // ;
        let stateName = document.createElement("li");
        stateName.classList.add("item", "itemName");
        addPopClass.addClass(dataObject.states[i], stateName);
        stateName.innerText = `${dataObject.states[i].stateName}`;
        ul.appendChild(stateName);
        let statePop = document.createElement("li");
        statePop.classList.add("item", "itemPop");
        addPopClass.addClass(dataObject.states[i], statePop);
        statePop.innerText = `${dataObject.states[i].population}`;
        ul.appendChild(statePop);
      } else if (dataObject.states[i].stateName === "50 states + DC") {
        fiftyPlusDCName = document.createElement("li");
        fiftyPlusDCName.classList.add("item", "itemName", "fiftyPlusDC");
        fiftyPlusDCName.innerText = `${dataObject.states[i].stateName}`;
        fiftyPlusDCPop = document.createElement("li");
        fiftyPlusDCPop.classList.add("item", "itemPop", "fiftyPlusDC");
        addPopClass.addClass(dataObject.states[i], fiftyPlusDCPop);
        fiftyPlusDCPop.innerText = `${dataObject.states[i].population}`;
      } else if (dataObject.states[i].stateName === "Total U.S. population") {
        totalUSName = document.createElement("li");
        totalUSName.classList.add("item", "itemName", "totalUS");
        totalUSName.innerText = `${dataObject.states[i].stateName}`;
        totalUSPop = document.createElement("li");
        addPopClass.addClass(dataObject.states[i], totalUSPop);
        totalUSPop.classList.add("item", "itemPop", "totalUS");
        totalUSPop.innerText = `${dataObject.states[i].population}`;
      } else if (dataObject.states[i].stateName === "Total territories") {
        totalTerrName = document.createElement("li");
        totalTerrName.classList.add("item", "itemName", "totalTerr");
        totalTerrName.innerText = `${dataObject.states[i].stateName}`;
        totalTerrPop = document.createElement("li");
        totalTerrPop.classList.add("item", "itemPop", "totalTerr");
        addPopClass.addClass(dataObject.states[i], totalTerrPop);
        totalTerrPop.innerText = `${dataObject.states[i].population}`;
      }
    }
    ul.appendChild(totalTerrName);
    ul.appendChild(totalTerrPop);
    ul.appendChild(fiftyPlusDCName);
    ul.appendChild(fiftyPlusDCPop);
    ul.appendChild(totalUSName);
    ul.appendChild(totalUSPop);
  }
}

export default Printer;
