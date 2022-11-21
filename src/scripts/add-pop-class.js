class AddPopClass {
  constructor() {}

  addClass(state, stateEle) {
    stateEle.classList.add(this.findPopClass(state.population));
  }

  removeCommas(num) {
    let numArr = num.split(",");
    let commaless = numArr.join("");
    return commaless;
  }

  findPopClass(pop) {
    // debugger;

    let intPop = parseInt(this.removeCommas(pop));
    let popClass;
    if (intPop < 50000) {
      popClass = "under50k";
    } else if (intPop < 200000) {
      popClass = "under200k";
    } else if (intPop < 500000) {
      popClass = "under500k";
    } else if (intPop < 1000000) {
      popClass = "under1m";
    } else if (intPop < 1500000) {
      popClass = "under1p5m";
    } else if (intPop < 2000000) {
      popClass = "under2m";
    } else if (intPop < 2500000) {
      popClass = "under2p5m";
    } else if (intPop < 3000000) {
      popClass = "under3m";
    } else if (intPop < 3500000) {
      popClass = "under3p5m";
    } else if (intPop < 4000000) {
      popClass = "under4m";
    } else if (intPop < 4500000) {
      popClass = "under4p5m";
    } else if (intPop < 5000000) {
      popClass = "under5m";
    } else if (intPop < 5500000) {
      popClass = "under5p5m";
    } else if (intPop < 6000000) {
      popClass = "under6m";
    } else if (intPop < 6500000) {
      popClass = "under6p5m";
    } else if (intPop < 7000000) {
      popClass = "under7m";
    } else if (intPop < 7500000) {
      popClass = "under7p5m";
    } else if (intPop < 8000000) {
      popClass = "under8m";
    } else if (intPop < 9000000) {
      popClass = "under9m";
    } else if (intPop < 10000000) {
      popClass = "under10m";
    } else if (intPop < 11000000) {
      popClass = "under11m";
    } else if (intPop < 12000000) {
      popClass = "under12m";
    } else if (intPop < 13000000) {
      popClass = "under13m";
    } else if (intPop < 14000000) {
      popClass = "under14m";
    } else if (intPop < 15000000) {
      popClass = "under15m";
    } else if (intPop < 20000000) {
      popClass = "under20m";
    } else if (intPop < 25000000) {
      popClass = "under25m";
    } else if (intPop < 30000000) {
      popClass = "under30m";
    } else if (intPop < 35000000) {
      popClass = "under35m";
    } else if (intPop < 50000000) {
      popClass = "under50m";
    }

    return popClass;
  }
}

export default AddPopClass;
