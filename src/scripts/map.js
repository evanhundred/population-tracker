import StateData from "/assets/states-albers-10m.json";
import State from "./state";
import Footer from "./footer";
// import

class Map {
  constructor(data) {
    this.renderMap();
    this.styleMap(data);
    const footer = document.getElementById("footer");
    new Footer(footer);
  }

  styleMap(data) {
    // debugger;
    d3.selectAll(".state")._groups[0].forEach((ele) => {
      ele.classList.remove(...ele.classList);
      let state = ele.__data__.properties.name;
      if (data[state].population < 50000) {
        ele.classList.add("under50k");
      } else if (data[state].population < 200000) {
        ele.classList.add("under200k");
      } else if (data[state].population < 500000) {
        ele.classList.add("under500k");
      } else if (data[state].population < 1000000) {
        ele.classList.add("under1m");
      } else if (data[state].population < 1500000) {
        ele.classList.add("under1p5m");
      } else if (data[state].population < 2000000) {
        ele.classList.add("under2m");
      } else if (data[state].population < 2500000) {
        ele.classList.add("under2p5m");
      } else if (data[state].population < 3000000) {
        ele.classList.add("under3m");
      } else if (data[state].population < 3500000) {
        ele.classList.add("under3p5m");
      } else if (data[state].population < 4000000) {
        ele.classList.add("under4m");
      } else if (data[state].population < 4500000) {
        ele.classList.add("under4p5m");
      } else if (data[state].population < 5000000) {
        ele.classList.add("under5m");
      } else if (data[state].population < 5500000) {
        ele.classList.add("under5p5m");
      } else if (data[state].population < 6000000) {
        ele.classList.add("under6m");
      } else if (data[state].population < 6500000) {
        ele.classList.add("under6p5m");
      } else if (data[state].population < 7000000) {
        ele.classList.add("under7m");
      } else if (data[state].population < 7500000) {
        ele.classList.add("under7p5m");
      } else if (data[state].population < 8000000) {
        ele.classList.add("under8m");
      } else if (data[state].population < 9000000) {
        ele.classList.add("under9m");
      } else if (data[state].population < 10000000) {
        ele.classList.add("under10m");
      } else if (data[state].population < 11000000) {
        ele.classList.add("under11m");
      } else if (data[state].population < 12000000) {
        ele.classList.add("under12m");
      } else if (data[state].population < 13000000) {
        ele.classList.add("under13m");
      } else if (data[state].population < 14000000) {
        ele.classList.add("under14m");
      } else if (data[state].population < 15000000) {
        ele.classList.add("under15m");
      } else if (data[state].population < 20000000) {
        ele.classList.add("under20m");
      } else if (data[state].population < 25000000) {
        ele.classList.add("under25m");
      } else if (data[state].population < 30000000) {
        ele.classList.add("under30m");
      } else if (data[state].population < 35000000) {
        ele.classList.add("under15m");
      } else if (data[state].population < 50000000) {
        ele.classList.add("under50m");
      }
    }); // nodeList of path els
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
