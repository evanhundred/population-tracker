const states = require('./1790.json');
let sum = 0;
for (let i = 0; i < states.length; i++) {
  if (i >= 1 && i <= 16) {
    sum += parseInt(states[i][1]);
  }
}
// console.log(sum);
