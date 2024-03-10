async function fetchData(url){
    const response=await fetch(url);
    const jsonData=await response.json();
    return jsonData;
}
async function randomquotes(){
    let response=await fetchData(`https://api.quotable.io/random`);
    console.log(response);

    let display=document.querySelector(".display");

    let quotes=response;
    let div=document.createElement("div");
    div.setAttribute("class","card");
    

    let content=document.createElement("div");
    content.innerText=response.content;

    let author=document.createElement("p");
    author.innerText=response.author;

    div.append(content,author);
    display.append(div);
}