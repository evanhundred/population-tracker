// import AddPopClass from "./add-pop-class";
import Map from './map';
import Fetcher from './fetcher';
import Legend from './legend';
import Printer from './printer';
import { VINTAGES, sortData } from './util';

class MainContent {
  constructor(ele) {
    this.ele = ele;
    this.sortStyle = 'byName';
    this.printer = new Printer();
    let fetcher = new Fetcher();

    const mainNode = document.getElementById('main-content');

    const openinstructionsModal = () => {
      const instructionsModalContainer = document.createElement('div');
      instructionsModalContainer.setAttribute('id', 'instructions-modal-container');
      mainNode.appendChild(instructionsModalContainer);
      const instructionsModal = new instructionsModal(instructionsModalContainer);
      return instructionsModal;
    };

    const createInstructionsLink = () => {
      let instructions = document.createElement('header');
      instructions.setAttribute('id', 'instructions');
      const instructionsModalLink = document.createElement('h3');
      instructionsModalLink.className = 'instructions-link';
      instructionsModalLink.innerText = 'View instructions';
      instructionsModalLink.addEventListener('click', openinstructionsModal);
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
    firstLineFooterH2.innerText = '';
    div.appendChild(firstLineFooterH2);

    let h2 = document.createElement('h2');
    h2.innerText = 'Fetch Vintage:';
    FirstLine.appendChild(h2);
    div = document.createElement('div');
    div.setAttribute('id', 'vintageSelector');
    div.classList.add('FirstLine');
    let ul = document.createElement('ul');
    ul.classList.add('vintageUl');
    FirstLine.appendChild(div);
    div.appendChild(ul);

    let li;
    for (let i = 0; i < VINTAGES.length; i++) {
      li = document.createElement('li');
      li.innerText = VINTAGES[i];
      li.id = 'vintage';
      li.classList.add(VINTAGES[i]);
      if (VINTAGES[i] === '2020') li.classList.add('selected');
      ul.appendChild(li);
    }

    // let li = document.createElement('li');
    // li.innerText = '2020';
    // li.classList.add('vintage-2020');
    // li.classList.add('selected');
    // ul.appendChild(li);
    // li = document.createElement('li');
    // li.innerText = '2010';
    // li.classList.add('vintage-2010');
    // ul.appendChild(li);
    // li = document.createElement('li');
    // li.innerText = '2000';
    // li.classList.add('vintage-2000');
    // ul.appendChild(li);
    // li = document.createElement('li');
    // li.innerText = '1790';
    // li.classList.add('vintage');
    // li.classList.add('1790');
    // ul.appendChild(li);

    new Legend(this.ele);

    let mapDiv = document.querySelector('#map');
    if (mapDiv) mapDiv.remove();
    // if (!mapDiv) {
    mapDiv = document.createElement('div');
    mapDiv.setAttribute('id', 'map');
    this.ele.appendChild(mapDiv);
    // }

    new Map();
    fetcher.getData('2020');

    let secondLine = document.createElement('div');
    secondLine.setAttribute('id', 'second-line');
    this.ele.appendChild(secondLine);
    ul = document.createElement('ul');
    ul.classList.add('sortSelectorUl');
    secondLine.appendChild(ul);
    this.ele.appendChild(secondLine);

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

      if (eventTarget.id === 'vintage') {
        resetMap();
        new Map();

        if (['2020', '2010', '2000'].includes(eventTarget.className)) {
          fetcher.getData(eventTarget.className);
          const liSelected = document.querySelector('li#vintage.selected');
          liSelected.classList.remove('selected');
          const liClicked = document.querySelector(`li#vintage.${eventTarget.className}`);
          liClicked.classList.add('selected');
        } else {
          switch (eventTarget.className) {
            case '1790':
          }
        }
      } else if (eventTarget.classList.contains('sortByName') || eventTarget.classList.contains('sortByPopulation')) {
        let sortStyle;
        if (eventTarget.classList.contains('sortByName')) {
          sortStyle = 'byName';
        }
        if (eventTarget.classList.contains('sortByPopulation')) {
          sortStyle = 'byPop';
        }

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

    let FirstLineFooterH2 = document.getElementById('FirstLineFooterH2');
    FirstLineFooterH2.innerText = 'data fetched!';

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
