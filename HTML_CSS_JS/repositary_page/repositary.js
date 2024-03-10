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
    
    let response = await fetchData(`https://api.github.com/search/repositories?q=${search}`);
    console.log(response);
   
    
    let usersdata = response["items"]
    data.innerHTML="";
result = response["items"];
    
    data.innerHTML="";
    if(usersdata.length !== 0){
        for(let i=0; i<usersdata.length; i++){
            let div=document.createElement("div");
            div.setAttribute("class", "card")
            
            // let avatar = document.createElement("img");
            // avatar.setAttribute("src", usersdata[i].avatar_url);
            //  avatar.style.width = "100px";
            //  avatar.style.height = "100px";
            
            let login = document.createElement("div");
            login.innerText = usersdata[i].default_branch;
            
            let id = document.createElement("div");
            id.innerText = usersdata[i].id;

            let visibility = document.createElement("div");
            id.innerText = usersdata[i].visibility;

            let description= document.createElement("div");
             id.innerText = usersdata[i].description;
            
             div.setAttribute("onclick", `displayCard(${i})`);
           
            div.append(login,id,visibility,description);
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
      localStorage.setItem("repositaryData", JSON.stringify(result[index]))
       console.log(result[index]);
      
       window.location.href="../repositary_next_page/repositary_next.html"
  }                                       
                                         
                                         
                                         
                                         
                                         
    