async function fetchData(url){
    const response=await fetch(url);
    const jsonData=await response.json();
    return jsonData;
}
async function allquotes(){
    let response=await fetchData(`https://api.quotable.io/quotes?=`);
    console.log(response);

    let display=document.querySelector(".display");

    let quotes=response ?.results;
    if(quotes.length !=0){
        for(let i=0;i<quotes.length;i++){
            console.log(quotes[i].content);
    let div=document.createElement("div");
    div.setAttribute("class","card");
    

    let content=document.createElement("div");
    content.innerText=quotes[i].content;

    let author=document.createElement("p");
    author.innerText=quotes[i].author;

    div.append(content,author);
    display.append(div);
}
    }
}