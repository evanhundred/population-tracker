import AddPopClass from './AddPopClass.js';
import { popDegreesArray, LOW_COLOR_PCT } from '../utils';

class StateList {
  constructor(dataObject = {}, sortStyle = null) {
    this.dataObject = dataObject;
    this.sortStyle = sortStyle;
    this.ele = document.createElement('div');
    this.ele.setAttribute('id', 'state-list-container');
    this.render();
  }

  render() {
    this.ele.replaceChildren(); // Clear the element

    if (!this.dataObject.states) {
      return;
    }

    const dataEl = document.createElement('data');
    const ul = document.createElement('ul');
    ul.classList.add('fetchResultSorted');
    dataEl.appendChild(ul);
    this.ele.appendChild(dataEl);

    let fiftyPlusDCName, fiftyPlusDCPop, totalUSName, totalUSPop, totalTerrName, totalTerrPop;

    const vintageLabel = document.createElement('li');
    vintageLabel.innerText = this.dataObject.header;
    vintageLabel.classList.add('data-header');
    ul.appendChild(vintageLabel);

    const sortLabel = document.createElement('li');
    if (this.sortStyle === 'byName') {
      sortLabel.innerText = 'by name';
    } else if (this.sortStyle === 'byPopulation') {
      sortLabel.innerText = 'by population';
    }
    sortLabel.classList = 'sortLabel';
    ul.appendChild(sortLabel);

    const keyState = document.createElement('li');
    keyState.classList.add('keyState');
    keyState.innerText = 'State';
    ul.appendChild(keyState);
    const keyPop = document.createElement('li');
    keyPop.classList.add('keyPop');
    keyPop.innerText = 'Population';
    ul.appendChild(keyPop);

    const getPct = (population) => {
      return population / 40000000;
      // console.log(population);
    };

    for (let i = 0; i < this.dataObject.states.length; i++) {
      const state = this.dataObject.states[i];
      if (state.stateName !== '50 states + DC' && state.stateName !== 'Total territories' && state.stateName !== 'Total U.S. population') {
        const stateName = document.createElement('li');
        stateName.classList.add('item', 'itemName');
        stateName.innerText = state.stateName;
        ul.appendChild(stateName);

        const statePop = document.createElement('li');
        statePop.classList.add('item', 'itemPop');
        statePop.innerText = state.population;
        statePop.style.background = `rgba(0, 84, 163, ${getPct(state.population)})`;
        ul.appendChild(statePop);
      } else if (state.stateName === '50 states + DC') {
        fiftyPlusDCName = document.createElement('li');
        fiftyPlusDCName.classList.add('item', 'itemName', 'fiftyPlusDC');
        fiftyPlusDCName.innerText = state.stateName;
        fiftyPlusDCPop = document.createElement('li');
        fiftyPlusDCPop.classList.add('item', 'itemPop', 'fiftyPlusDC');
        fiftyPlusDCPop.innerText = state.population;
      } else if (state.stateName === 'Total U.S. population') {
        totalUSName = document.createElement('li');
        totalUSName.classList.add('item', 'itemName', 'totalUS');
        totalUSName.innerText = state.stateName;
        totalUSPop = document.createElement('li');
        totalUSPop.classList.add('item', 'itemPop', 'totalUS');
        totalUSPop.innerText = state.population;
      } else if (state.stateName === 'Total territories') {
        totalTerrName = document.createElement('li');
        totalTerrName.classList.add('item', 'itemName', 'totalTerr');
        totalTerrName.innerText = state.stateName;
        totalTerrPop = document.createElement('li');
        totalTerrPop.classList.add('item', 'itemPop', 'totalTerr');
        totalTerrPop.innerText = state.population;
      }
    }

    if (totalTerrName) {
      ul.appendChild(totalTerrName);
      ul.appendChild(totalTerrPop);
    }
    if (fiftyPlusDCName) {
      ul.appendChild(fiftyPlusDCName);
      ul.appendChild(fiftyPlusDCPop);
    }
    if (totalUSName) {
      ul.appendChild(totalUSName);
      ul.appendChild(totalUSPop);
    }
  }
}

export default StateList;
