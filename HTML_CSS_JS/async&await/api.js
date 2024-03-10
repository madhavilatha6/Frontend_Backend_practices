async function fetchData(url) {
    const response = await fetch(url);
    const jsonData = await response.json();
    return jsonData;
  }
  
  async function alldata() {
    let response = await fetchData(`https://swapi.dev/api/people`);
    console.log(response);
  
    const dataContainer = document.getElementById("dataContainer");
    const peopleListHTML = response.results.map((person) => {
      return `<div>Name: ${person.name}, Height: ${person.height}, Mass: ${person.mass}</div>`;
    });
    dataContainer.innerHTML = peopleListHTML.join("");
  }
  
  alldata();
  