function fetchDataFromJSON(filePath) {
  return fetch(filePath)
    .then(res => res.json())
    .then(data => {return data});
  // return data;
};

fetchedData = fetchDataFromJSON("../data/links.json");
console.log(fetchDataFromJSON("../data/links.json"));

/*
fetch("../data/links.json")
  .then(res => res.json())
  .then(data => {console.log(data)});
*/