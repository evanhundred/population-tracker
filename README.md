## Population Tracker

What is the spectrum of population density, spread across our country? How has this changed over time? Where have people migrated to, where are people building society?

Population Tracker seeks to answer these questions, and more. By fetching data from the census database for a range of years, PT displays an up-to-the-minute snapshot of the official numbers.

Live deployment on [GitHub pages](https://evanhundred.github.io/population-tracker).

## Description

PT creates a simple graphical interface to display population data in the United States. Data is sourced via [US Census Bureau](https://www.census.gov/data/developers/data-sets/decennial-census.html).

Initial presentation of data is current population by state and region. The viewer can change which data is displayed by changing a few parameters, including what year the data is from, and related data points such as age.

## Wireframe

![wireframe](./assets/wireframe.png)

- About and instructions modal displays under page header.
- Year selector displays census year options for dataset to getch.
- State list populates, and may be sorted by name or population by clicking sort type selector.
- Map renders states to show relative population, with color legend displayed above.
- Footer links include the my Github and LinkedIn.

## Functionality and MVPs

In Population Tracker, users are able to:

- Choose which year of census data to populate map
- A list of states and territories appears. It can be sorted either by name or by population.
- See census data populated on a U.S. map

<!-- merge issue  -->

![current site](./assets/snapshots/current-site.gif)

When year is selected, PT will fetch live U.S. Census Data:

```javascript
getData(vintage) {
    let dataBlock;
    let dataTitle;
    let url;
    if (vintage === "2020") {
      url =
        "https://api.census.gov/data/2020/dec/pl?get=NAME,P1_001N&for=state:*&key=09beac347deddc9da12be4ca736c435f707ebec2";
      // dataBlock = require("/assets/census-2020-P1001N.json");
      dataTitle = "2020 Census dataset";
    } else if (vintage === "2010") {
      // dataBlock = require("/assets/census-2010-P1001N.json");
      url =
        "https://api.census.gov/data/2010/dec/pl?get=NAME,P001001&for=state:*&key=09beac347deddc9da12be4ca736c435f707ebec2";
      dataTitle = "2010 Census dataset";
    } else if (vintage === "2000") {
      url =
        "https://api.census.gov/data/2000/dec/sf1?get=NAME,P001001&for=state:*&key=09beac347deddc9da12be4ca736c435f707ebec2";
      // dataBlock = require("/assets/census-2000-P1001N.json");
      dataTitle = "2000 Census dataset";
    }

    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        dataBlock = JSON.parse(request.responseText);

        this.dataObject = {
          header: dataTitle,
          data: dataBlock,
        };

        this.loadLocalData(vintage);
        if (this.sortStyle === "byName") {
          this.dataObject = this.sortData("byName");
        } else if (this.sortStyle === "byPop") {
          this.dataObject = this.sortData("byPop");
        }
      }
    });

    request.open("GET", url);
    request.send();
  }
```

in sortData(), It will chop up the fetched JSON into state objects that can be fed into the map:

```javascript
  sortData(sortKey) {
    this.dataObject.data.forEach((row) => {
      if (row[0] !== "NAME") {
        let newState = {};
        newState.stateName = row[0];
        newState.population = row[1];
        preSorted.states.push(newState);
      }
      preSorted[row[0]] = {
        population: row[1],
      };
    });
  }
```

...as well as an array of states, which will be sorted and printed to the list.

From there, the states array is sorted:

```javascript
  objSortByName(obj) {
    let sorted = obj.sort((a, b) => {
      if (a.stateName < b.stateName) return -1;
      if (a.stateName > b.stateName) return 1;
      return 0;
    });

    return sorted;
  }

  objSortByPopulation(obj) {
    let sorted = obj.sort((b, a) => {
      if (parseInt(a.population) < parseInt(b.population)) return -1;
      if (parseInt(a.population) > parseInt(b.population)) return 1;
      return 0;
    });

    return sorted;
  }
```

Finally, the map is rendered, and styled.

```javascript
class Map {
  constructor(data) {
    this.renderMap();
    this.styleMap(data);
  }

  renderMap() {
    let path = d3.geoPath();
    let svg = d3
      .select("#map")
      .append("svg")
      .attr("width", 1000)
      .attr("height", 600);
    let g = svg.append("g");
    let states = topojson.feature(StateData, StateData.objects.states);

    g.selectAll("path")
      .data(states.features)
      .enter()
      .append("path")
      .attr("class", "state")
      .attr("d", path);

    d3.selectAll(".state")._groups[0].forEach((state) => {
      new State(state);
    });
  }

  styleMap(data) {
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
    });
  }
}
```

In addition, this project includes:

- An **about** and **user instructions** modal giving simple instructions for use, and explanation of relevance
- A **legend** showing how population is represented by color
- A production README

## Technologies, Libraries, APIs

This project will be implemented with the following technologies:

- D3.js to render map and data
- U.S. Census API: [https://www.census.gov/data/developers/data-sets/decennial-census.html](https://www.census.gov/data/developers/data-sets/decennial-census.html)
- Webpack to bundle and transpile JavaScript code
- npm to manage project dependencies

## Implementation Timeline

- Friday afternoon and Weekend: Setup project, get webpack up and running. Make sample queries to obtain data points for mapping. Lock down first draft data set and functionality to process fetched data into data points suitable for rendering on U.S. map.
- Monday: Create basic U.S. map rendering, determine key data points. Create alternate state, and alternate rendering. Build UI to toggle between them.
- Tuesday: Lock down decisions on final data sets (which census years) and options sets (age, nationality, ...). Outline and begin implementing final blueprint.
- Wednesday: Complete basic product. Debug and clean up.
- Thursday Morning: Deploy to GitHub pages. Rewrite this as a production README.
