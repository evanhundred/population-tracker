const myRequest = new Request(
  "https://api.census.gov/data/2020/dec/pl?get=NAME&for=state:*&key=[user key]",
  {
    method: "GET",
    // headers: myHeaders,
    mode: "cors",
    cache: "default",
  }
);

class Fetcher {
  constructor(request) {
    this.request = request;
  }

  doThing() {
    fetch(request).then((response) => {
      fetchedData = response.json();
      return fetchedData;
    });
  }
  // const fetchedData =
}

export default Fetcher;
