import MainContent from "./main-content";
import Map from "./map";

class Fetcher {
  constructor() {
    this.sortStyle = "byName";
  }

  fetchData(vintage) {
    this.getData(vintage);
    return this.dataObject;
  }

  vintageLabel(vintage) {
    switch (vintage) {
      case "2020":
        vintageString = "2020/dec/pl";
        dataTitle = "2020 Census dataset";
        break;
      case "2010":
        vintageString = "2010/dec/pl";
        dataTitle = "2010 Census dataset";
        break;
      case "2000":
        vintageString = "2000/dec/sf1";
        dataTitle = "2000 Census dataset";
        break;
      default:
        break;
    }
    return vintage ? { vintageString, dataTitle } : {};
  }

  getData(vintage) {
    let dataBlock;
    // let dataTitle;
    // let vintageString;

    const GET_QUERY =
      "?get=NAME,P1_001N&for=state:*&key=09beac347deddc9da12be4ca736c435f707ebec2";
    const API_DOMAIN_STRING = "https://api.census.gov/data/";

    const { vintageString, dataTitle } = this.vintageLabel(vintage);

    const url = `${API_DOMAIN_STRING}${vintageString}${GET_QUERY}`;

    const request = new XMLHttpRequest();
    // ;
    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        dataBlock = JSON.parse(request.responseText);
        this.dataObject = {
          header: dataTitle,
          data: dataBlock
        };

        this.loadLocalData(vintage);
        if (this.sortStyle === "byName") {
          this.dataObject = this.sortData("byName");
        } else if (this.sortStyle === "byPop") {
          this.dataObject = this.sortData("byPop");
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
    this.dataObject.data.forEach((row) => {
      if (row[0] !== "NAME") {
        let newState = {};
        newState.stateName = row[0];
        newState.population = row[1];
        preSorted.states.push(newState);
      }
      preSorted[row[0]] = {
        population: row[1]
      };
    });

    this.dataObject.localData.forEach((row) => {
      // ;
      let newEntry = {};
      newEntry.stateName = row[0];
      newEntry.population = row[1];
      preSorted.states.push(newEntry);
    });

    let sorted = {};
    sorted = preSorted;
    if (sortKey === "byName") {
      sorted.states = this.objSortByName(preSorted.states);
      // sorted.header = this.dataObject.header;
    } else if (sortKey === "byPopulation") {
      sorted.states = this.objSortByPopulation(preSorted.states);
      // sorted.header = this.dataObject.header;
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

    for (let key in sorted) {
      this.dataObject[key] = sorted[key];
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

  loadLocalData(vintage) {
    let dataBlock;
    if (vintage === "2020") {
      dataBlock = require("/assets/territories-2020.json");
    } else if (vintage === "2010") {
      dataBlock = require("/assets/territories-2010.json");
    } else if (vintage === "2000") {
      dataBlock = require("/assets/territories-2000.json");
    }
    this.dataObject.localData = dataBlock;
  }
}

export default Fetcher;
