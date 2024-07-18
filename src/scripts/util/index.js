export const LOW_COLOR_PCT = 0.4;
export const COLOR_STRING_BASE = 'rgba(81, 199, 212, ';

export const sortData = (dataObject, sortKey) => {
  const dataIsRaw = !!dataObject.data;
  // console.log(dataIsRaw);

  let preSorted;

  if (dataIsRaw) {
    preSorted = {};
    preSorted.header = dataObject.header;
    preSorted.states = [];

    dataObject.data.forEach((row) => {
      if (row[0] !== 'NAME') {
        let newState = {};
        newState.stateName = row[0];
        newState.population = row[1];
        preSorted.states.push(newState);
      }
      preSorted[row[0]] = {
        population: row[1]
      };
    });

    dataObject.localData.forEach((row) => {
      // ;
      let newEntry = {};
      newEntry.stateName = row[0];
      newEntry.population = row[1];
      preSorted.states.push(newEntry);
    });
  } else {
    preSorted = dataObject;
    // de-commify
    preSorted.states = dataObject.states.map((state) => {
      let deCommifiedPop = state.population.replace(/,/g, '');
      return {
        stateName: state.stateName,
        population: deCommifiedPop
      };
    });
  }

  let sorted = preSorted;
  if (sortKey === 'byName') {
    sorted.states = objSortByName(preSorted.states);
  } else if (sortKey === 'byPop') {
    sorted.states = objSortByPopulation(preSorted.states);
  }

  for (let i = 0; i < sorted.states.length; i++) {
    let popSource = sorted.states[i].population;

    if (typeof popSource === 'number') {
      popSource = parseInt(popSource);
    }

    let arrayedPop = popSource.split('');
    let count = 0;
    let commaPop = [];
    while (arrayedPop.length > 0) {
      if (count === 3) {
        commaPop.push(',');
        count = 0;
      }
      commaPop.push(arrayedPop.pop());
      count++;
    }
    let resultPop = commaPop.reverse().join('');
    sorted.states[i].population = resultPop;
  }

  for (let key in sorted) {
    dataObject[key] = sorted[key];
  }
  return sorted;
};

export const objSortByName = (obj) => {
  let sorted = obj.sort((a, b) => {
    if (a.stateName < b.stateName) return -1;
    if (a.stateName > b.stateName) return 1;
    return 0;
  });

  return sorted;
};

export const objSortByPopulation = (obj) => {
  let sorted = obj.sort((b, a) => {
    if (parseInt(a.population) < parseInt(b.population)) return -1;
    if (parseInt(a.population) > parseInt(b.population)) return 1;
    return 0;
  });

  return sorted;
};

export const popDegreesArray = [
  [500000, 'under500k'],
  [2000000, 'under2m'],
  [5000000, 'under5m'],
  [10000000, 'under10m'],
  [25000000, 'under25m'],
  [50000000, 'under50m']
];

export const getPct = (level) => {
  const lowColorPct = LOW_COLOR_PCT;

  let range = 1 - lowColorPct;
  const res = (level / popDegreesArray.length) * range;
  return res + lowColorPct;
};

export const colorString = (level) => {
  const res = `${COLOR_STRING_BASE}${getPct(level)})`;
  return res;
};
