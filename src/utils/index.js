export const LOW_COLOR_PCT = 0.4;
// export const YEAR_DASH_VINTAGE = /^year-\d\d\d\d$/i;

export const popDegreesArray = [
  [0, 'zero'],
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
  const COLOR_STRING_BASE = 'rgba(81, 199, 212, ';
  const res = `${COLOR_STRING_BASE}${getPct(level)})`;
  return res;
};
