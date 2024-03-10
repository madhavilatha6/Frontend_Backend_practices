// fetch("https://api.github.com/search/topics?q=madhavi")
let search = document.querySelector(".search");

function inputData(){
    console.log("yes")
}

async function searchData(){
    var text="n"
    text=search.value

    const response = await fetch(`https://api.github.com/search/users?q=${text}`);
    const jsonData = await response.json()
    console.log(jsonData);
}