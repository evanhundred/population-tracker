const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://countries-cities.p.rapidapi.com/location/country/list',
  headers: {
    'X-RapidAPI-Key': '9338fcaacbmsh8426d4df1d15c83p1637d2jsncaa72f3d9582',
    'X-RapidAPI-Host': 'countries-cities.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
