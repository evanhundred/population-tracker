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
      const footer = document.getElementById('footer');
      while (footer.firstChild) {
        footer.removeChild(footer.lastChild);
      }
      new Footer(footer);
    } else {
      d3.selectAll('.state')._groups[0].forEach((ele) => {
        ele.classList.add('unloaded');
      });
    }
  }

  styleMap(data) {
    // console.log(data);
    const popDegrees = {};
    popDegreesArray.forEach((degree, idx) => {
      popDegrees[idx] = {
        integer: degree[0],
        className: degree[1]
      };
    });

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
      // console.log(data);
      // console.log(ele.__data__.properties);
      // console.log(data[state]);
      let currentPop = data[state] ? data[state].population : '0';
      // console.log(currentPop);
      let colorString;

      if (currentPop === '0') {
        // colorString = 'rgb(196, 164, 164)';
        // colorString = 'rgb(153, 117, 117)';
        colorLevel = 0;
      } else {
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
        let colorPctString = getPct(colorLevel).toString();
        colorString = `${colorBase}${colorPctString})`;
        ele.style.fill = colorString;
      }

      // console.log(state);
      // console.log(colorString);

      // ele.style.color = colorString;
      // ele.style.border = '2px solid black';
      // console.log(colorLevel);
      ele.classList.add(popDegrees[colorLevel].className);
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
