import Map from './Map';
import Printer from './Printer';
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

    console.log(vintage);

    switch (vintage) {
      case '2020':
        url = 'https://api.census.gov/data/2020/dec/pl?get=NAME,P1_001N&for=state:*&key=09beac347deddc9da12be4ca736c435f707ebec2';
        dataTitle = '2020 Census dataset';
        break;
      case '2010':
        url = 'https://api.census.gov/data/2010/dec/pl?get=NAME,P001001&for=state:*&key=09beac347deddc9da12be4ca736c435f707ebec2';
        dataTitle = '2010 Census dataset';
        break;
      case '2000':
        url = 'https://api.census.gov/data/2010/dec/pl?get=NAME,P001001&for=state:*&key=09beac347deddc9da12be4ca736c435f707ebec2';
        dataTitle = '2000 Census dataset';
        break;
      case '1790':
        this.loadLocalData(vintage);
        this.dataObject = sortData(this.dataObject, this.sortStyle);
        resetMap();
        new Map(this.dataObject);
        dataTitle = '1790 Census dataset';
        break;
      default:
        break;
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
    const request = new XMLHttpRequest();

    const loadAndPrint = () => {
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
      // this.loadLocalData(vintage);
      // this.dataObject = sortData(this.dataObject, this.sortStyle);
      // const printer = new Printer(this.dataObject, this.sortStyle);
      // printer.printData();
      // printer.sortByName(this.dataObject, this.sortStyle);
      // return this.dataObject;
    };

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
    switch (vintage) {
      case '2020':
        dataBlock = require('/assets/territories-2020.json');
        break;
      case '2010':
        dataBlock = require('/assets/territories-2010.json');
        break;
      case '2000':
        dataBlock = require('/assets/territories-2000.json');
        break;
      case '1790':
        dataBlock = require('/assets/historical-data/1790.json');
        break;
    }
    this.dataObject.localData = dataBlock;
  }
}

export default Fetcher;
