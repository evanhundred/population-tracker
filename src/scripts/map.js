import StateData from "/assets/states-albers-10m.json";
import State from "./state";
import Footer from "./footer";
// import

class Map {
  constructor(data = null) {
    // debugger;
    this.renderMap();

    if (data) {
      this.styleMap(data);
      const footer = document.getElementById("footer");
      while (footer.firstChild) {
        footer.removeChild(footer.lastChild);
      }
      new Footer(footer);
    }
  }

  styleMap(data) {
    const lowColorPct = 0.4;
    let range = 1 - lowColorPct;
    const getPct = (level) => {
      const res = (level / 29) * range;
      // const res = (range / 29) * level;
      return res + lowColorPct;
    };
    let colorBase = "rgba(222, 31, 18, ";
    let colorLevel;
    // let getColorLevel = (num = 0) => {
    //   return num + 1;
    // };

    const popDegreesArray = [
      [50000, "under50k"],
      [200000, "under200k"],
      [500000, "under500k"],
      [1000000, "under1m"],
      [1500000, "under1p5m"],
      [2000000, "under2m"],
      [2500000, "under2p5m"],
      [3000000, "under3m"],
      [3500000, "under3p5m"],
      [4000000, "under4m"],
      [4500000, "under4p5m"],
      [5000000, "under5m"],
      [5500000, "under5p5m"],
      [6000000, "under6m"],
      [6500000, "under6p5m"],
      [7000000, "under7m"],
      [7500000, "under7p5m"],
      [8000000, "under8m"],
      [9000000, "under9m"],
      [10000000, "under10m"],
      [11000000, "under11m"],
      [12000000, "under12m"],
      [13000000, "under13m"],
      [14000000, "under14m"],
      [15000000, "under15m"],
      [20000000, "under20m"],
      [25000000, "under25m"],
      [30000000, "under30m"],
      [35000000, "under35m"],
      [50000000, "under50m"]
    ];

    const popDegrees = {};
    popDegreesArray.forEach((degree, idx) => {
      popDegrees[idx] = {
        integer: degree[0],
        className: degree[1]
      };
    });
    console.log(popDegrees);

    d3.selectAll(".state")._groups[0].forEach((ele) => {
      // console.log(ele);
      ele.classList.remove(...ele.classList);
      let state = ele.__data__.properties.name;

      console.log(state);
      console.log(data[state]);
      8;
      let currentPop = data[state].population;

      const findDegreeIdx = () => {
        const degrees = popDegreesArray.slice();
        let idx = 0;
        while (degrees) {
          let currentDegree = degrees.shift()[0];
          // console.log(currentDegree);
          if (currentPop > currentDegree) {
            idx += 1;
          } else {
            return idx;
          }
        }
        return null;
      };

      colorLevel = findDegreeIdx();
      console.log(colorLevel);

      let colorPctString = getPct(colorLevel).toString();
      let colorString = `${colorBase}${colorPctString})`;
      console.log(colorString);
      ele.style.fill = colorString;
      ele.style.color = colorString;
      ele.classList.add(popDegrees[colorLevel].className);
    });
  }

  renderMap() {
    let path = d3.geoPath();
    let svg = d3
      .select("#map")
      .append("svg")
      .attr("width", 1000)
      .attr("height", 600);
    let g = svg.append("g");
    // d3.json("https://d3js.org/us-10m.v1.json").then((data) => {
    let states = topojson.feature(StateData, StateData.objects.states);
    // debugger;
    // console.log(StateData);

    g.selectAll("path")
      .data(states.features)
      .enter()
      .append("path")
      .attr("class", "state")
      .attr("d", path);
    // });

    d3.selectAll(".state")._groups[0].forEach((state) => {
      new State(state);
    });
  }
}

export default Map;
