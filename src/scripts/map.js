import StateData from "/assets/states-albers-10m.json";
import State from "./state";
// import

class Map {
  constructor() {
    this.renderMap();
    // this.populationData = main.getData();
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
