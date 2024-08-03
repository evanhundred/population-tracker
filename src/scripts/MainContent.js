// import AddPopClass from "./add-pop-class";
import Map from './Map';
import Fetcher from './Fetcher';
import Legend from './Legend';
import Printer from './Printer';
import instructionsModal from './instructionsModal';
import { VINTAGES, sortData } from './util';

class MainContent {
  constructor(ele) {
    this.ele = ele;
    this.sortStyle = 'byName';
    this.printer = new Printer();
    let fetcher = new Fetcher();

    const mainNode = document.getElementById('main-content');

    const openInstructionsModal = () => {
      const instructionsModalContainer = document.createElement('div');
      instructionsModalContainer.setAttribute('id', 'instructions-modal-container');
      mainNode.appendChild(instructionsModalContainer);
      new instructionsModal(instructionsModalContainer);
    };

    const createInstructionsLink = () => {
      let instructions = document.createElement('header');
      instructions.setAttribute('id', 'instructions');
      const instructionsModalLink = document.createElement('h3');
      instructionsModalLink.className = 'instructions-link';
      instructionsModalLink.innerText = 'View instructions';
      instructionsModalLink.addEventListener('click', openInstructionsModal);
      instructions.appendChild(instructionsModalLink);

      mainNode.appendChild(instructions);
    };
    createInstructionsLink();

    const FirstLine = document.createElement('div');
    FirstLine.setAttribute('id', 'firstLine');
    this.ele.appendChild(FirstLine);

    let div = document.createElement('div');
    div.setAttribute('id', 'firstLineFooter');
    this.ele.appendChild(div);
    let firstLineFooterH2 = document.createElement('h2');
    firstLineFooterH2.setAttribute('id', 'firstLineFooterH2');
    // firstLineFooterH2.innerText = '';
    div.appendChild(firstLineFooterH2);

    let h2 = document.createElement('h2');
    h2.innerText = 'Fetch Vintage:';
    FirstLine.appendChild(h2);
    div = document.createElement('div');
    div.setAttribute('id', 'vintageSelector');
    div.classList.add('firstLine');
    let ul = document.createElement('ul');
    ul.classList.add('vintageUl');
    FirstLine.appendChild(div);
    div.appendChild(ul);

    const createVintageList = (ul) => {
      let li;
      for (let i = 0; i < VINTAGES.length; i++) {
        li = document.createElement('li');
        li.innerText = VINTAGES[i];
        li.id = 'vintage';
        li.classList.add(`year-${VINTAGES[i]}`);
        if (VINTAGES[i] === '2020') li.classList.add('selected');
        ul.appendChild(li);
      }
      return ul;
    };
    ul = createVintageList(ul);

    // end vintagesUl logic
    // --------------------
    // map logic

    new Legend(this.ele);

    let mapDiv = document.querySelector('#map');
    if (mapDiv) mapDiv.remove();
    mapDiv = document.createElement('div');
    mapDiv.setAttribute('id', 'map');
    this.ele.appendChild(mapDiv);

    new Map();
    fetcher.getData('2020');

    // sortSelector

    let secondLine = document.createElement('div');
    secondLine.setAttribute('id', 'second-line');
    this.ele.appendChild(secondLine);
    ul = document.createElement('ul');
    ul.classList.add('sortSelectorUl');
    secondLine.appendChild(ul);
    this.ele.appendChild(secondLine);

    // prepare divs to print and render census data

    let thirdLine = document.createElement('div');
    thirdLine.setAttribute('id', 'thirdLine');
    this.ele.appendChild(thirdLine);

    const that = this;
    const resetMap = () => {
      let mapDiv = document.querySelector('#map');
      if (mapDiv) mapDiv.remove();
      mapDiv = document.createElement('div');
      mapDiv.setAttribute('id', 'map');
      const main = document.getElementById('main-content');
      const secondLine = document.getElementById('second-line');
      main.insertBefore(mapDiv, secondLine);
    };

    document.addEventListener('click', function (e) {
      let eventTarget = e.target;
      console.log(eventTarget);

      if (eventTarget.id === 'vintage') {
        console.log(`li#vintage.${eventTarget.className}`);
        resetMap();
        new Map();

        fetcher.getData(eventTarget.className.slice(5, 9));
        const liSelected = document.querySelector('li#vintage.selected');
        liSelected.classList.remove('selected');
        const liClicked = document.querySelector(`li#vintage.${eventTarget.className}`);
        liClicked.classList.add('selected');
      } else if (eventTarget.classList.contains('sortByName') || eventTarget.classList.contains('sortByPopulation')) {
        let sortStyle;
        const selectorOptions = ['sortByName', 'sortByPopulation'];
        selectorOptions.forEach((option) => {
          sortStyle = option.slice(4, 5).toLowerCase() + option.slice(5);
          s;
          sortStyle[0] = sortStyle[0].toLowerCase();
        });
        // if (eventTarget.classList.contains('sortByName')) {
        //   sortStyle = 'byName';
        // }
        // if (eventTarget.classList.contains('sortByPopulation')) {
        //   sortStyle = 'byPop';
        // }

        const sortedDataObj = sortData(fetcher.dataObject, sortStyle);
        that.printer.sortByName(sortedDataObj, sortStyle);
      }
    });
  }

  newMap() {
    const newMap = document.createElement('div');
    newMap.setAttribute('id', 'map');
    return newMap;
  }

  printData() {
    if (!document.querySelector('data')) {
      let dataEl = document.createElement('data');
      let dataUl = document.createElement('ul');
      dataUl.classList.add('fetchResultSorted');
      dataEl.appendChild(dataUl);
      let thirdLine = document.getElementById('thirdLine');
      thirdLine.appendChild(dataEl);
    }

    let firstLineFooterH2 = document.getElementById('firstLineFooterH2');
    firstLineFooterH2.innerText = 'data fetched!';

    let ul = document.createElement('ul');
    let li = document.createElement('li');
    li.classList.add('sortByName');
    li.innerText = 'Sort by Name';
    ul.appendChild(li);

    li = document.createElement('li');
    li.classList.add('sortByPopulation');
    li.innerText = 'Sort by Population';
    ul.appendChild(li);

    let selectorDiv = document.getElementById('second-line');
    selectorDiv.replaceChild(ul, document.querySelector('.sortSelectorUl'));
    ul.classList.add('sortSelectorUl');
  }
}

export default MainContent;
