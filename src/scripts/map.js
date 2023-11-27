import StateData from "/assets/states-albers-10m.json";
import State from "./state";
import Footer from "./footer";
import { popDegreesArray, LOW_COLOR_PCT } from "./util";

class Map {
  constructor(data = null) {
    this.renderMap();

    if (data) {
      this.styleMap(data);
      const footer = document.getElementById("footer");
      while (footer.firstChild) {
        footer.removeChild(footer.lastChild);
      }
      new Footer(footer);
    } else {
      d3.selectAll(".state")._groups[0].forEach((ele) => {
        ele.classList.add("unloaded");
      });
    }
  }

  styleMap(data) {
    const popDegrees = {};
    popDegreesArray.forEach((degree, idx) => {
      popDegrees[idx] = {
        integer: degree[0],
        className: degree[1]
      };
    });
    // console.log(popDegrees);

    const getPct = (level) => {
      const lowColorPct = LOW_COLOR_PCT;
      let range = 1 - lowColorPct;
      const res = (level / popDegreesArray.length) * range;
      return res + lowColorPct;
    };
    // aqua
    let colorBase = "rgba(81, 199, 212, ";
    // orange-red
    // let colorBase = "rgba(222, 31, 18, ";
    let colorLevel;

    d3.selectAll(".state")._groups[0].forEach((ele) => {
      // console.log(ele);
      ele.classList.remove(...ele.classList);
      let state = ele.__data__.properties.name;

      // console.log(state);
      // console.log(data[state]);
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
      // console.log(colorLevel);

      let colorPctString = getPct(colorLevel).toString();
      let colorString = `${colorBase}${colorPctString})`;
      // console.log(colorString);
      // ele.style.background = "black";
      ele.style.fill = colorString;
      ele.style.color = colorString;
      ele.classList.add(popDegrees[colorLevel].className);
      ele.classList.add("state");
      ele.classList.add("loaded");
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
