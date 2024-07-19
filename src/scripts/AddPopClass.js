import { colorString } from './util';

class AddPopClass {
  constructor() {}

  addClass(state, stateEle) {
    const popObject = this.findPopClass(state.population);
    stateEle.classList.add(popObject.popClass);
    if (stateEle.classList.contains('itemPop')) stateEle.style.color = colorString(popObject.colorLevel);
  }

  removeCommas(num) {
    let numArr = num.split(',');
    let commaless = numArr.join('');
    return commaless;
  }

  findPopClass(pop) {
    let intPop = parseInt(this.removeCommas(pop));
    let popClass;
    let colorLevel;
    if (intPop < 500000) {
      popClass = 'under500k';
      colorLevel = 1;
    } else if (intPop < 2000000) {
      popClass = 'under2m';
      colorLevel = 2;
    } else if (intPop < 5000000) {
      popClass = 'under5m';
      colorLevel = 3;
    } else if (intPop < 10000000) {
      popClass = 'under10m';
      colorLevel = 4;
    } else if (intPop < 25000000) {
      popClass = 'under25m';
      colorLevel = 5;
    } else if (intPop < 50000000) {
      popClass = 'under50m';
      colorLevel = 6;
    }

    return {
      popClass: popClass,
      colorLevel: colorLevel
    };
  }
}

export default AddPopClass;
