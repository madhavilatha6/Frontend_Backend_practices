async function fetchData(url){
    const response = await fetch(url);
    const jsonData = await response.json()
    return jsonData
    }
let result = []; 
let data = document.querySelector(".data");    
async function searchData (){
    data.innerHTML="Loading......"
    let search = document.querySelector(".search").value;
    
    let response = await fetchData(`https://api.github.com/search/topics?q=${search}`);
    console.log(response);
    
    let usersdata = response["items"]
    data.innerHTML="";
   result = response["items"];
    
    if(usersdata.length !== 0){
        for(let i=0; i<usersdata.length; i++){
            let div=document.createElement("div");
            div.setAttribute("class", "card")
            
            let login = document.createElement("div");
            login.innerText = usersdata[i].name;
            
            let id = document.createElement("div");
            id.innerText = usersdata[i].score;
            
            let created_at= document.createElement("div");
            created_at.innerText = usersdata[i].created_at;

            let updated_at= document.createElement("div");
            updated_at.innerText = usersdata[i].updated_at;

            div.setAttribute("onclick", `displayCard(${i})`);

            div.append(login,id,created_at,updated_at);
            data.append(div);
        
        }
    }else{
        let div=document.createElement("div");
        let avatar = document.createElement("img");
        avatar.setAttribute("src", "../NotFound.gif");
        avatar.style.width = "500px";
        avatar.style.height = "500px";
        
        div.append(avatar);
        
        data.append(div);
    }
}

function displayCard(index){
    localStorage.setItem("topicdetails", JSON.stringify(result[index]))
    console.log(result[index]);
   
    window.location.href="../topic_next_page/topic_next.html"
}