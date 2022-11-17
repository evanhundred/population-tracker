## Population Tracker

What is the spectrum of population density, spread across our country? How has this changed over time? Where have people migrated to, where are people building society?

Population Tracker seeks to answer these questions, and more. By fetching data from the census database for a range of years, PT displays an up-to-the-minute snapshot of the official numbers.

Live deployment on [GitHub pages](https://evanhundred.github.io/population-tracker).

## Description

PT creates a simple graphical interface to display population data in the United States. Data is sourced via US Census Bureau (census.gov).

Initial presentation of data is current population by state and region. The viewer can change which data is displayed by changing a few parameters, including what year the data is from, and related data points such as age.

## Functionality and MVPs

In Population Tracker, users are able to:

- Choose which year of census data to populate map
- A list of states and territories appears. It can be sorted either by name or by population.
- See census data populated on a U.S. map

![chooseVintage](./assets/snapshots/showSite.gif)

When year is selected, PT will fetch live U.S. Census Data.

![getData1](./assets/snapshots/getData1.png)
![getData2](./assets/snapshots/getData2.png)

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

- A **user instructions** modal giving simple instructions for use, and explanation of relevance
- A production README

## Wireframe

![wireframe](https://github.com/evanhundred/js_project/blob/main/wireframe.png)

- Footer links include the my Github and LinkedIn.

- On the right side, options selectors will allow the user to filter results by year, age, median income and country of origin
- Also on the right, there will be links to display pre-selected data sets

## Technologies, Libraries, APIs

This project will be implemented with the following technologies:

- D3.js to render map and data
- Webpack to bundle and transpile JavaScript code
- npm to manage project dependencies

## Implementation Timeline

- Friday afternoon and Weekend: Setup project, get webpack up and running. Make sample queries to obtain data points for mapping. Lock down first draft data set and functionality to process fetched data into data points suitable for rendering on U.S. map.
- Monday: Create basic U.S. map rendering, determine key data points. Create alternate state, and alternate rendering. Build UI to toggle between them.
- Tuesday: Lock down decisions on final data sets (which census years) and options sets (age, nationality, ...). Outline and begin implementing final blueprint.
- Wednesday: Complete basic product. Debug and clean up.
- Thursday Morning: Deploy to GitHub pages. Rewrite this as a production README.
