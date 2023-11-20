export const LOW_COLOR_PCT = 0.4;

export const popDegreesArray = [
  [500000, "under500k"],
  [2000000, "under2m"],
  [5000000, "under5m"],
  [10000000, "under10m"],
  [25000000, "under25m"],
  [50000000, "under50m"]
];

export const getPct = (level, popDegreesArray) => {
  const lowColorPct = LOW_COLOR_PCT;

  let range = 1 - lowColorPct;
  const res = (level / popDegreesArray.length) * range;
  return res + lowColorPct;
};

// 29 degrees

// [
//   // [50000, "under50k"],
//   // [200000, "under200k"],
//   [500000, "under500k"],
//   // [1000000, "under1m"],
//   // [1500000, "under1p5m"],
//   [2000000, "under2m"],
//   // [2500000, "under2p5m"],
//   // [3000000, "under3m"],
//   // [3500000, "under3p5m"],
//   // [4000000, "under4m"],
//   // [4500000, "under4p5m"],
//   [5000000, "under5m"],
//   // [5500000, "under5p5m"],
//   // [6000000, "under6m"],
//   // [6500000, "under6p5m"],
//   // [7000000, "under7m"],
//   // [7500000, "under7p5m"],
//   // [8000000, "under8m"],
//   // [9000000, "under9m"],
//   [10000000, "under10m"],
//   // [11000000, "under11m"],
//   // [12000000, "under12m"],
//   // [13000000, "under13m"],
//   // [14000000, "under14m"],
//   // [15000000, "under15m"],
//   // [20000000, "under20m"],
//   [25000000, "under25m"],
//   // [30000000, "under30m"],
//   // [35000000, "under35m"],
//   [50000000, "under50m"]
// ];
