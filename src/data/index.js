const VINTAGES = ['1790', '2000', '2010', '2020'];

const resetDataObject = (vintage = null) => {
  return { vintage: vintage, data: null, localData: null, dataTitle: null };
};

const objSortByName = (obj) => {
  let sorted = obj.sort((a, b) => {
    if (a.stateName < b.stateName) return -1;
    if (a.stateName > b.stateName) return 1;
    return 0;
  });

  return sorted;
};

const objSortByPopulation = (obj) => {
  let sorted = obj.sort((b, a) => {
    if (parseInt(a.population) < parseInt(b.population)) return -1;
    if (parseInt(a.population) > parseInt(b.population)) return 1;
    return 0;
  });

  return sorted;
};

const sortData = (dataObject, sortKey) => {
  const dataIsRaw = !!dataObject.data;
  let preSorted = {};
  if (parseInt(dataObject.vintage) < 2000) {
    preSorted.header = dataObject.header;
    preSorted.states = [];
    dataObject.localData.forEach((row) => {
      if (row[0] !== 'NAME') {
        let newState = {};
        newState.stateName = row[0];
        newState.population = row[1];
        preSorted.states.push(newState);
        preSorted[row[0]] = {
          population: row[1]
        };
      }
    });
  } else if (dataIsRaw) {
    preSorted = {};
    preSorted.header = dataObject.header;
    preSorted.states = [];

    dataObject.data.forEach((row) => {
      if (row[0] !== 'NAME') {
        let newState = {};
        newState.stateName = row[0];
        newState.population = row[1];
        preSorted.states.push(newState);
        preSorted[row[0]] = {
          population: row[1]
        };
      }
    });

    dataObject.localData.forEach((row) => {
      let newEntry = {};
      newEntry.stateName = row[0];
      newEntry.population = row[1];
      preSorted.states.push(newEntry);
    });
  } else {
    preSorted = dataObject;
    // de-commify
    preSorted.states = dataObject.states.map((state) => {
      let deCommifiedPop = state.population.replace(/,/g, '');
      return {
        stateName: state.stateName,
        population: deCommifiedPop
      };
    });
  }

  let sorted = preSorted;
  if (sortKey === 'byName') {
    sorted.states = objSortByName(preSorted.states);
  } else if (sortKey === 'byPopulation') {
    sorted.states = objSortByPopulation(preSorted.states);
  }

  for (let i = 0; i < sorted.states.length; i++) {
    let popSource = sorted.states[i].population;

    if (typeof popSource === 'number') {
      popSource = parseInt(popSource);
    }

    let arrayedPop = popSource.split('');
    let count = 0;
    let commaPop = [];
    while (arrayedPop.length > 0) {
      if (count === 3) {
        commaPop.push(',');
        count = 0;
      }
      commaPop.push(arrayedPop.pop());
      count++;
    }
    let resultPop = commaPop.reverse().join('');
    sorted.states[i].population = resultPop;
  }

  for (let key in sorted) {
    dataObject[key] = sorted[key];
  }
  return sorted;
};

class DataStore {
  constructor() {
    this.state = {
      vintage: '2020',
      sortStyle: 'byName',
      dataObject: resetDataObject()
    };
    this.subscribers = [];
  }

  subscribe(callback) {
    this.subscribers.push(callback);
  }

  notifySubscribers() {
    this.subscribers.forEach((callback) => {
      callback(this.state);
    });
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.notifySubscribers();
  }

  getState() {
    return this.state;
  }

  setSortStyle(sortStyle) {
    this.state.sortStyle = sortStyle;
    sortData(this.state.dataObject, sortStyle);
    this.notifySubscribers();
  }

  getData(vintage) {
    // console.log(vintage);
    this.setState({ vintage });
    const dataObject = resetDataObject(vintage);

    const loadAndPrint = (responseText = null) => {
      let data;
      if (responseText) {
        data = JSON.parse(responseText);
        dataObject.data = data;
      }

      dataObject.header = dataObject.dataTitle;
      this.loadLocalData(vintage, dataObject);
      const sortedData = sortData(dataObject, this.state.sortStyle);
      this.setState({ dataObject: sortedData });
    };

    let url;
    let vintageUrlSubstring;
    switch (vintage) {
      case '2020':
        vintageUrlSubstring = '2020/dec/pl?get=NAME,P1_001N';
        // url = 'https://api.census.gov/data/2020/dec/pl?get=NAME,P1_001N&for=state:*&key=09beac347deddc9da12be4ca736c435f707ebec2';
        // dataObject.dataTitle = '2020 Census dataset';
        break;
      case '2010':
        vintageUrlSubstring = '2010/dec/pl?get=NAME,P001001';
        // url = 'https://api.census.gov/data/2010/dec/pl?get=NAME,P001001&for=state:*&key=09beac347deddc9da12be4ca736c435f707ebec2';
        // dataObject.dataTitle = '2010 Census dataset';
        break;
      case '2000':
        vintageUrlSubstring = '2000/dec/sf1?get=NAME,P001001';
        // url = 'https://api.census.gov/data/2000/dec/sf1?get=NAME,P001001&for=state:*&key=09beac347deddc9da12be4ca736c435f707ebec2';
        // dataObject.dataTitle = '2000 Census dataset';
        break;
      // case '1790':
      //   dataObject.dataTitle = '1790 Census dataset';
      //   loadAndPrint();
      //   break;
      // case '1800':
      //   dataObject.dataTitle = '1800 Census dataset';
      //   loadAndPrint();
      //   return;
      // default:
      //   break;
    }

    dataObject.dataTitle = `${vintage} Census dataset`;

    if (parseInt(vintage) >= 2000) {
      url = `https://api.census.gov/data/${vintageUrlSubstring}&for=state:*&key=09beac347deddc9da12be4ca736c435f707ebec2`;
    } else {
      loadAndPrint();
    }

    // XMLHttpRequest version
    // const request = new XMLHttpRequest();
    // request.addEventListener('readystatechange', () => {
    //   if (request.readyState === 4 && request.status === 200) {
    //     loadAndPrint(request.responseText);
    //     console.log(request.responseText);
    //   }
    // });
    // request.open('GET', url);
    // request.send();

    //fetch version
    const getDataFromCensusAPI = async (url) => {
      // console.log(url);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        let result = await response.text();
        loadAndPrint(result);
      } catch (error) {
        console.log(error.message);
      }
    };

    if (parseInt(vintage) >= 2000) getDataFromCensusAPI(url);
  }

  loadLocalData(vintage, dataObject) {
    const censusFullData = require('../../assets/census-data-object.json');

    let dataBlock;
    switch (vintage) {
      case '2020':
        dataBlock = require('../../assets/territories-2020.json');
        break;
      case '2010':
        dataBlock = require('../../assets/territories-2010.json');
        break;
      case '2000':
        dataBlock = require('../../assets/territories-2000.json');
        break;
      // case '1790':
      // dataBlock = censusFullData['1790'];
      // break;
      default:
        if (parseInt(vintage) < 2000) {
          dataBlock = censusFullData[vintage];
          break;
        }
    }
    dataObject.localData = dataBlock;
  }
}

export default new DataStore();
