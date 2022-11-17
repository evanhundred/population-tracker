import StateData from "/assets/states-albers-10m.json";
import State from "./state";
// import

class Map {
  constructor(data) {
    this.renderMap();
    this.styleMap(data);
  }

  styleMap(data) {
    // debugger;
    d3.selectAll(".state")._groups[0].forEach((ele) => {
      let state = ele.__data__.properties.name;
      if (data[state].population < 1000000) {
        ele.classList.add("under1m");
      } else if (data[state].population < 3000000) {
        ele.classList.add("under3m");
      } else if (data[state].population < 6000000) {
        ele.classList.add("under6m");
      } else if (data[state].population < 9000000) {
        ele.classList.add("under9m");
      } else {
        ele.classList.add("over9m");
      }
    }); // nodeList of path els
  }

  renderMap() {
    // console.log("renderMap");
    // let projection = d3.geoPath().scale(140);
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
    console.log(StateData);

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
