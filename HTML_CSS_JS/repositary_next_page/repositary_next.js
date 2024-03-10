
let final=document.querySelector(".final");
let result=JSON.parse(localStorage.getItem("repositaryData"));
    let div=document.createElement("div");
    div.setAttribute("class", "card")
    // console.log(madhu)

    // let avatar = document.createElement("img");
    // avatar.setAttribute("src", result.avatar_url);
    // avatar.style.width = "100px";
    // avatar.style.height = "100px";

    let login = document.createElement("div");
     login.innerText = result.default_branch;
            
    let id = document.createElement("div");
    id.innerText = result.id;

    let visibility = document.createElement("div");
    id.innerText = result.visibility;

    let description= document.createElement("div");
    id.innerText = result.description;
   
    div.append(login,id,visibility,description);
    final.append(div);


