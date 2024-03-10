async function fetchData(url){
    const response = await fetch(url);
    const jsonData = await response.json()
    return jsonData
    }
let result = []; 
let data = document.querySelector(".data");   
async function searchData (){
    let search = document.querySelector(".search").value;
    data.innerHTML="Loading......"
    let response = await fetchData(`https://api.github.com/search/users?q=${search}`);
    console.log(response);
    
    let usersdata = response["items"]
    data.innerHTML="";
    result = response["items"];
   
    
    if(usersdata.length !== 0){
        for(let i=0; i<usersdata.length; i++){
            let div=document.createElement("div");
            div.setAttribute("class", "card")
            
            let avatar = document.createElement("img");
            avatar.setAttribute("src", usersdata[i].avatar_url);
            avatar.style.width = "100px";
            avatar.style.height = "100px";  
            
            let login = document.createElement("div");
            login.innerText = usersdata[i].login;
            
            let id = document.createElement("div");
            id.innerText = usersdata[i].id;
        
            let score = document.createElement("div");
            id.innerText = usersdata[i].score;
            
            let node_id = document.createElement("div");
            node_id.innerText = usersdata[i].node_id;

            div.setAttribute("onclick", `displayCard(${i})`);
            
            div.append(avatar,login,id,score,node_id);
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
    localStorage.setItem("bookData", JSON.stringify(result[index]))
    console.log(result[index]);
   
    window.location.href="../user_next_page/user_next.html"
}

