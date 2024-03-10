
let final=document.querySelector(".final");
let result=JSON.parse(localStorage.getItem("bookData"));
    let div=document.createElement("div");
    div.setAttribute("class", "card")

    let avatar = document.createElement("img");
    avatar.setAttribute("src", result.avatar_url);
    avatar.style.width = "100px";
    avatar.style.height = "100px";
    
    let login = document.createElement("div");
    login.innerText = result.login;
    
    let id = document.createElement("div");
    id.innerText = result.id;
  
    let score = document.createElement("div");
    id.innerText = result.score;
   
    let node_id = document.createElement("div");
    node_id.innerText = result.node_id;
    
    div.append(avatar,login,id,score,node_id);
    final.append(div);
