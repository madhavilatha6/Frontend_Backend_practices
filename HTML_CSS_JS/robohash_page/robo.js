async function generate(){
    let robohash = document.querySelector(".search").value;
    let image = document.querySelector(".image");
    image.style.marginLeft="380px";
    image.style.marginTop="10px"

    image.src = `https://robohash.org/${robohash}`;
}