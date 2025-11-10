import { readFile } from 'node:fs';

readFile('census-time-table.csv', (err, data) => {
  console.log(data);
});
