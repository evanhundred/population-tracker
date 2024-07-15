// import MainContent from "./main-content";
import Map from './map';
import Printer from './printer';
import { sortData } from './util';

class Fetcher {
  constructor(sortStyle = 'byName') {
    this.sortStyle = sortStyle;
  }

  fetchData(vintage) {
    this.getData(vintage);
    return this.dataObject;
  }

  getData(vintage) {
    const resetSuccessMessage = () => {
      let firstLineFooterH2 = document.getElementById('firstLineFooterH2');
      firstLineFooterH2.innerText = 'fetching...';
    };
    resetSuccessMessage();

    let data;
    let dataTitle;
    let url;
    if (vintage === '2020') {
      url = 'https://api.census.gov/data/2020/dec/pl?get=NAME,P1_001N&for=state:*&key=09beac347deddc9da12be4ca736c435f707ebec2';
      // dataBlock = require("/assets/census-2020-P1001N.json");
      dataTitle = '2020 Census dataset';
    } else if (vintage === '2010') {
      // dataBlock = require("/assets/census-2010-P1001N.json");
      url = 'https://api.census.gov/data/2010/dec/pl?get=NAME,P001001&for=state:*&key=09beac347deddc9da12be4ca736c435f707ebec2';
      dataTitle = '2010 Census dataset';
    } else if (vintage === '2000') {
      url = 'https://api.census.gov/data/2000/dec/sf1?get=NAME,P001001&for=state:*&key=09beac347deddc9da12be4ca736c435f707ebec2';
      // dataBlock = require("/assets/census-2000-P1001N.json");
      dataTitle = '2000 Census dataset';
    }

    const resetMap = () => {
      let mapDiv = document.querySelector('#map');
      if (mapDiv) mapDiv.remove();
      mapDiv = document.createElement('div');
      mapDiv.setAttribute('id', 'map');
      const main = document.getElementById('main-content');
      const secondLine = document.getElementById('second-line');
      main.insertBefore(mapDiv, secondLine);
    };

    // const GET_QUERY =
    //   "?get=NAME,P1_001N&for=state:*&key=09beac347deddc9da12be4ca736c435f707ebec2";
    // const API_DOMAIN_STRING = "https://api.census.gov/data/";
    // const { vintageString, dataTitle } = this.vintageLabel(vintage);
    // const url = `${API_DOMAIN_STRING}${vintageString}${GET_QUERY}`;

    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
      if (request.readyState === 4 && request.status === 200) {
        data = JSON.parse(request.responseText);
        this.dataObject = {
          header: dataTitle,
          data: data
        };

        this.loadLocalData(vintage);
        this.dataObject = sortData(this.dataObject, this.sortStyle);
        resetMap();

        new Map(this.dataObject);

        const printer = new Printer(this.dataObject, this.sortStyle);
        printer.printData();
        printer.sortByName(this.dataObject, this.sortStyle);
      }
      return this.dataObject;
    });

    request.open('GET', url);
    request.send();
  }

  loadLocalData(vintage) {
    let dataBlock;
    if (vintage === '2020') {
      dataBlock = require('/assets/territories-2020.json');
    } else if (vintage === '2010') {
      dataBlock = require('/assets/territories-2010.json');
    } else if (vintage === '2000') {
      dataBlock = require('/assets/territories-2000.json');
    }
    this.dataObject.localData = dataBlock;
  }
}

export default Fetcher;
