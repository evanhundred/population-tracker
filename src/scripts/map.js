class Map {
  constructor() {
    this.renderMap();
  }

  renderMap() {
    let projection = d3.geoMercator().scale(140);
    let path = d3.geoPath(projection);
    let svg = d3.select("map");
    svg.append("svg");
    svg.attr("width", 900).attr("height", 600);
    let g = svg.append("g");
    d3.json(
      "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"
    ).then((data) => {
      let countries = topojson.feature(data, data.objects.countries);

      g.selectAll("path")
        .data(countries.features)
        .enter()
        .append("path")
        .attr("class", "country")
        .attr("d", path);
    });
  }
}

// const map = document.getElementById("map")

export default Map;
