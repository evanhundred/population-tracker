// import Map from './Map';
// import Printer from './Printer';
import { sortData, resetDataObject } from './util';

class Fetcher {
  constructor(sortStyle = 'byName') {
    this.sortStyle = sortStyle;
    this.dataObject = resetDataObject();
  }

  fetchData(vintage) {
    // this.getData(vintage);
    // return this.dataObject;
    return this.getData(vintage);
  }

  async getData(vintage) {
    this.dataObject = resetDataObject(vintage);
    // const resetSuccessMessage = () => {
    //   let firstLineFooterH2 = document.getElementById('firstLineFooterH2');
    //   firstLineFooterH2.innerText = 'fetching...';
    // };
    // resetSuccessMessage();

    let url;

    // const resetMap = () => {
    //   let mapDiv = document.querySelector('#map');
    //   if (mapDiv) mapDiv.remove();
    //   mapDiv = document.createElement('div');
    //   mapDiv.setAttribute('id', 'map');
    //   const main = document.getElementById('main-content');
    //   const secondLine = document.getElementById('second-line');
    //   main.insertBefore(mapDiv, secondLine);
    // };

    // const loadAndPrint = (responseText = null) => {
    //   let data;
    //   if (responseText) {
    //     data = JSON.parse(responseText);
    //     this.dataObject.data = data;
    //   } else {
    //     // this.dataObject.localData
    //   }
    //   this.dataObject.header = this.dataObject.dataTitle;

    //   this.loadLocalData(vintage);
    //   this.dataObject = sortData(this.dataObject, this.sortStyle);
    //   resetMap();

    //   new Map(this.dataObject);

    //   const printer = new Printer(this.dataObject, this.sortStyle);
    //   printer.printData();
    //   printer.sortByName(this.dataObject, this.sortStyle);

    //   return this.dataObject;
    // };

    switch (vintage) {
      case '2020':
        url = 'https://api.census.gov/data/2020/dec/pl?get=NAME,P1_001N&for=state:*&key=09beac347deddc9da12be4ca736c435f707ebec2';
        this.dataObject.dataTitle = '2020 Census dataset';
        break;
      case '2010':
        url = 'https://api.census.gov/data/2010/dec/pl?get=NAME,P001001&for=state:*&key=09beac347deddc9da12be4ca736c435f707ebec2';
        this.dataObject.dataTitle = '2010 Census dataset';
        break;
      case '2000':
        url = 'https://api.census.gov/data/2010/dec/pl?get=NAME,P001001&for=state:*&key=09beac347deddc9da12be4ca736c435f707ebec2';
        this.dataObject.dataTitle = '2000 Census dataset';
        break;
      case '1790':
        this.dataObject.dataTitle = '1790 Census dataset';
        // loadAndPrint();
        // return;
        this.loadLocalData(vintage);
        this.dataObject = sortData(this.dataObject, this.sortStyle);
        return this.dataObject;
      default:
        break;
    }

    try {
      const response = await fetch(url);
      const data = await response.json();
      this.dataObject.data = data;
      this.dataObject.header = this.dataObject.dataTitle;
      this.loadLocalData(vintage);
      this.dataObject = sortData(this.dataObject, this.sortStyle);
      return this.dataObject;
    } catch (error) {
      console.error('Error fetching data:', error);
      return { errors: 'Error fetching data' };
    }

    // const request = new XMLHttpRequest();

    // request.addEventListener('readystatechange', () => {
    //   if (request.readyState === 4 && request.status === 200) {
    //     return loadAndPrint(request.responseText);
    //   }
    //   // return this.dataObject;
    //   return { errors: 'readystatechange' };
    // });

    // request.open('GET', url);
    // request.send();
  }

  async loadLocalData(vintage) {
    let dataBlock;
    switch (vintage) {
      case '2020':
        dataBlock = (await import('/assets/terretories-2020.json')).default;
        // dataBlock = require('/assets/territories-2020.json');
        break;
      case '2010':
        dataBlock = (await import('/assets/terretories-2010.json')).default;
        // dataBlock = require('/assets/territories-2010.json');
        break;
      case '2000':
        dataBlock = (await import('/assets/terretories-2000.json')).default;
        // dataBlock = require('/assets/territories-2000.json');
        break;
      case '1790':
        dataBlock = (await import('/assets/historical-data/1790.json')).default;
        // dataBlock = require('/assets/historical-data/1790.json');
        break;
    }
    this.dataObject.localData = dataBlock;
  }
}

export default Fetcher;
