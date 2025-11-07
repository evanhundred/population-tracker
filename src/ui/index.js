import DataStore from '../data';
import TitleSplash from '../components/TitleSplash';
import MainContent from '../components/MainContent.js';
import InstructionsModal from '../components/InstructionsModal';
import Map from '../components/Map';
import StateList from '../components/StateList';
import Legend from '../components/Legend';
import Footer from '../components/Footer';


const VINTAGES = ['1790', '2000', '2010', '2020'];

class UI {
  constructor() {
    this.dataStore = DataStore;
    this.dataStore.subscribe(this.render.bind(this));

    this.root = document.getElementById('main-content');

    this.init();
  }

  init() {
    // Initial render
    this.render(this.dataStore.getState());

    // Set up event listeners
    document.addEventListener('click', (e) => {
      const eventTarget = e.target;

      if (eventTarget.id === 'vintage') {
        const vintage = eventTarget.className.slice(5, 9);
        this.dataStore.getData(vintage);
      } else if (eventTarget.classList.contains('sortByName') || eventTarget.classList.contains('sortByPopulation')) {
        const sortStyle = eventTarget.classList.contains('sortByName') ? 'byName' : 'byPopulation';
        this.dataStore.setSortStyle(sortStyle);
      }
    });
  }

  render(state) {
    const { vintage, sortStyle, dataObject } = state;

    // Clear the root element
    this.root.innerHTML = '';

    const header = document.getElementById('header');
    new TitleSplash(header);

    const main = this.root;
    // console.log(main);

    const FirstLine = document.createElement('div');
    FirstLine.setAttribute('id', 'firstLine');
    main.appendChild(FirstLine);

    let div = document.createElement('div');
    div.setAttribute('id', 'firstLineFooter');
    main.appendChild(div);
    let firstLineFooterH2 = document.createElement('h2');
    firstLineFooterH2.setAttribute('id', 'firstLineFooterH2');
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
        if (VINTAGES[i] === vintage) li.classList.add('selected');
        ul.appendChild(li);
      }
      return ul;
    };
    ul = createVintageList(ul);

    let secondLine = document.createElement('div');
    secondLine.setAttribute('id', 'second-line');
    main.appendChild(secondLine);
    ul = document.createElement('ul');
    ul.classList.add('sortSelectorUl');
    secondLine.appendChild(ul);

    let li = document.createElement('li');
    li.classList.add('sortByName');
    li.innerText = 'Sort by Name';
    ul.appendChild(li);

    li = document.createElement('li');
    li.classList.add('sortByPopulation');
    li.innerText = 'Sort by Population';
    ul.appendChild(li);

    const instructionsModalContainer = document.createElement('div');
    instructionsModalContainer.setAttribute('id', 'instructions-modal-container');
    main.appendChild(instructionsModalContainer);
    new InstructionsModal(instructionsModalContainer);

    new Legend(main);

    let mapDiv = document.querySelector('#map');
    if (mapDiv) mapDiv.remove();
    mapDiv = document.createElement('div');
    mapDiv.setAttribute('id', 'map');
    main.appendChild(mapDiv);
    new Map(dataObject);

    const stateList = new StateList(dataObject, sortStyle);
    console.log(stateList);
    main.appendChild(stateList.ele);

    const footer = document.getElementById('footer');
    new Footer(footer);
  }
}

export default UI;
