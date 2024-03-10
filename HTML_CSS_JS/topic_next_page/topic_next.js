
let final=document.querySelector(".final");
let result=JSON.parse(localStorage.getItem("topicdetails"));
    let div=document.createElement("div");
    div.setAttribute("class", "card")

    let login = document.createElement("div");
            login.innerText = result.name;
            
            let id = document.createElement("div");
            id.innerText = result.score;
            
            let created_at= document.createElement("div");
            created_at.innerText = result.created_at;

            let updated_at= document.createElement("div");
            updated_at.innerText = result.updated_at;

            // div.setAttribute("onclick", `displayCard(${i})`);

            div.append(login,id,created_at,updated_at);
            final.append(div);
        