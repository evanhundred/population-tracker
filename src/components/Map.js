import * as d3 from 'd3';
import * as topojson from 'topojson-client';
import State from './State.js';
import { popDegreesArray, LOW_COLOR_PCT } from '../utils';
import StateData from '../../assets/states-albers-10m.json';

class Map {
  constructor(data = null) {
    // console.log(data);
    this.renderMap();

    if (data) {
      this.styleMap(data);
    } else {
      d3.selectAll('.state')._groups[0].forEach((ele) => {
        ele.classList.add('unloaded');
      });
    }
  }

  styleMap(data) {
    // console.log(data);

    const getPct = (level) => {
      const lowColorPct = LOW_COLOR_PCT;
      let range = 1 - lowColorPct;
      const res = (level / popDegreesArray.length) * range;
      return res + lowColorPct;
    };
    // 0, 84, 163
    let colorBase = 'rgba(0, 84, 163, ';
    // let colorBase = 'rgba(81, 199, 212, ';
    let colorLevel;

    d3.selectAll('.state')._groups[0].forEach((ele) => {
      ele.classList.remove(...ele.classList);
      let state = ele.__data__.properties.name;
      let currentPop = data[state] ? data[state].population : null;
      let colorString;

      if (currentPop === null || currentPop === '') {
        ele.classList.add('no-data');
        ele.style.fill = '#ccc'; // Light grey for no data
        colorLevel = 0;
      } else if (currentPop === '0') {
        colorLevel = 0;
      } else {
        const findDegreeIdx = () => {
          const degrees = popDegreesArray.slice();
          let idx = 0;
          // Ensure currentPop is treated as a number for comparison
          const numericCurrentPop = parseInt(currentPop);
          // console.log(numericCurrentPop);

          // If currentPop is less than or equal to the first threshold, it's in the 'zero' category
          if (numericCurrentPop <= degrees[0][0]) {
            return 0;
          }

          // Iterate through the rest of the degrees
          for (let i = 0; i < degrees.length; i++) {
            if (numericCurrentPop > degrees[i][0]) {
              idx = i + 1; // Move to the next category
            } else {
              return idx; // Found the category
            }
          }
          return idx; // If it's greater than all thresholds, it belongs to the last category
        };

        colorLevel = findDegreeIdx();
        let colorPctString = getPct(colorLevel).toString();
        colorString = `${colorBase}${colorPctString})`;
        ele.style.fill = colorString;
      }

      // console.log(state);
      // console.log(colorString);

      // ele.style.color = colorString;
      // ele.style.border = '2px solid black';
      // console.log(colorLevel);
      // console.log(popDegreesArray);
      // console.log(colorLevel);
      ele.classList.add(popDegreesArray[colorLevel].className);
      ele.classList.add('state');
      ele.classList.add('loaded');
    });
  }

  renderMap() {
    let path = d3.geoPath();
    let svg = d3.select('#map').append('svg').attr('width', 1000).attr('height', 600);
    let g = svg.append('g');
    // d3.json("https://d3js.org/us-10m.v1.json").then((data) => {
    let states = topojson.feature(StateData, StateData.objects.states);

    g.selectAll('path').data(states.features).enter().append('path').attr('class', 'state').attr('d', path);
    // });

    d3.selectAll('.state')._groups[0].forEach((state) => {
      new State(state);
    });
  }
}

export default Map;
