import DataStore from '../data';
import TitleSplash from '../components/TitleSplash';
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

    // Store references to main UI elements
    this.header = document.getElementById('header');
    this.footer = document.getElementById('footer');

    this.titleSplash = new TitleSplash(this.header);
    this.instructionsModal = null; // Will be instantiated in init
    this.legend = null; // Will be instantiated in init
    this.mapInstance = null; // Will be instantiated in render
    this.stateListInstance = null; // Will be instantiated in render

    this.init();
  }

  openInstructionsModal() {
    const instructionsModalContainer = document.createElement('div');
    instructionsModalContainer.setAttribute('id', 'instructions-modal-container');
    // console.log(this.instructionsModalContainer);
    // console.log('this.root openInstructionsModal()', this.root);
    this.root.appendChild(instructionsModalContainer);
    this.instructionsModal = new InstructionsModal(instructionsModalContainer);
  }

  init() {
    // console.log('this.root init()', this.root);

    // Create static structural elements once
    const instructions = document.createElement('header');
    instructions.setAttribute('id', 'instructions');
    const instructionsModalLink = document.createElement('h3');
    instructionsModalLink.className = 'instructions-link';
    instructionsModalLink.innerText = 'View instructions';
    instructionsModalLink.addEventListener('click', () => this.openInstructionsModal());
    instructions.appendChild(instructionsModalLink);
    this.root.appendChild(instructions);

    const FirstLine = document.createElement('div');
    FirstLine.setAttribute('id', 'firstLine');
    this.root.appendChild(FirstLine);

    const firstLineFooterDiv = document.createElement('div');
    firstLineFooterDiv.setAttribute('id', 'firstLineFooter');
    this.root.appendChild(firstLineFooterDiv);
    this.firstLineFooterH2 = document.createElement('h2');
    this.firstLineFooterH2.setAttribute('id', 'firstLineFooterH2');
    firstLineFooterDiv.appendChild(this.firstLineFooterH2);

    const h2 = document.createElement('h2');
    h2.innerText = 'Fetch Vintage:';
    FirstLine.appendChild(h2);

    const vintageSelectorDiv = document.createElement('div');
    vintageSelectorDiv.setAttribute('id', 'vintageSelector');
    vintageSelectorDiv.classList.add('firstLine');
    this.vintageUl = document.createElement('ul');
    this.vintageUl.classList.add('vintageUl');
    FirstLine.appendChild(vintageSelectorDiv);
    vintageSelectorDiv.appendChild(this.vintageUl);

    // Create vintage list items
    VINTAGES.forEach((vintage) => {
      const li = document.createElement('li');
      li.innerText = vintage;
      li.id = 'vintage';
      li.classList.add(`year-${vintage}`);
      this.vintageUl.appendChild(li);
    });

    this.legend = new Legend(this.root);

    this.mapDiv = document.createElement('div');
    this.mapDiv.setAttribute('id', 'map');
    this.root.appendChild(this.mapDiv);

    const secondLine = document.createElement('div');
    secondLine.setAttribute('id', 'second-line');
    this.root.appendChild(secondLine);
    this.sortSelectorUl = document.createElement('ul');
    this.sortSelectorUl.classList.add('sortSelectorUl');
    secondLine.appendChild(this.sortSelectorUl);

    const sortByNameLi = document.createElement('li');
    sortByNameLi.classList.add('sortByName');
    sortByNameLi.innerText = 'Sort by Name';
    this.sortSelectorUl.appendChild(sortByNameLi);

    const sortByPopulationLi = document.createElement('li');
    sortByPopulationLi.classList.add('sortByPopulation');
    sortByPopulationLi.innerText = 'Sort by Population';
    this.sortSelectorUl.appendChild(sortByPopulationLi);

    this.stateListContainer = document.createElement('div');
    this.stateListContainer.setAttribute('id', 'thirdLine');
    this.root.appendChild(this.stateListContainer);

    // Create loading overlay
    this.loadingOverlay = document.createElement('div');
    this.loadingOverlay.classList.add('loading-overlay', 'hidden'); // Start hidden
    this.root.appendChild(this.loadingOverlay);

    this.openInstructionsModal();

    // const instructionsModalContainer = document.createElement('div');
    // instructionsModalContainer.setAttribute('id', 'instructions-modal-container');
    // this.root.appendChild(instructionsModalContainer);
    // this.instructionsModal = new InstructionsModal(instructionsModalContainer);

    new Footer(this.footer);

    // load initial data
    this.dataStore.getData('2020');

    // Set up event listeners
    document.addEventListener('click', (e) => {
      const eventTarget = e.target;

      if (eventTarget.id === 'vintage') {
        // this.loadingOverlay.classList.remove('hidden'); // Show overlay
        const vintage = eventTarget.className.slice(5, 9);
        this.dataStore.getData(vintage);
      } else if (eventTarget.classList.contains('sortByName') || eventTarget.classList.contains('sortByPopulation')) {
        // this.loadingOverlay.classList.remove('hidden'); // Show overlay
        const sortStyle = eventTarget.classList.contains('sortByName') ? 'byName' : 'byPopulation';
        this.dataStore.setSortStyle(sortStyle);
      }
      // this.loadingOverlay.classList.add('hidden'); //  overlay
    });

    // Initial render call
    this.render(this.dataStore.getState());

    window.scrollTo(0, 0);
  }

  render(state) {
    const { vintage, sortStyle, dataObject } = state;

    // Update vintage selector active state
    Array.from(this.vintageUl.children).forEach((li) => {
      if (li.classList.contains(`year-${vintage}`)) {
        li.classList.add('selected');
      } else {
        li.classList.remove('selected');
      }
    });

    // Update firstLineFooterH2
    this.firstLineFooterH2.innerText = dataObject.header ? `Data fetched for ${dataObject.header}` : 'fetching...';

    // if (dataObject.header) {
    //   this.loadingOverlay.classList.add('hidden');
    // } else if (this.loadingOverlay.classList.contains('hidden')) {
    //   this.loadingOverlay.classList.remove('hidden');
    // }

    // this.loadingOverlay.classList.add(dataObject.header ? 'hidden'); // Hide overlay

    // Update Map
    if (this.mapInstance) {
      // If map already exists, just style it with new data
      this.mapInstance.styleMap(dataObject);
    } else {
      // Otherwise, create a new map instance
      this.mapInstance = new Map(dataObject);
    }

    // Update StateList
    if (this.stateListInstance) {
      // If state list already exists, update its data and re-render
      this.stateListInstance.dataObject = dataObject;
      this.stateListInstance.sortStyle = sortStyle;
      this.stateListInstance.render();
    } else {
      // Otherwise, create a new state list instance
      this.stateListInstance = new StateList(dataObject, sortStyle);
      this.stateListContainer.appendChild(this.stateListInstance.ele);
    }

    // this.loadingOverlay.classList.add('hidden'); // Hide overlay
  }
}

export default UI;
