var arr = ["madhavi", "latha", "madhulatha","madhu","harshitha","pavani","vani"];
function showAlert(name) {
  alert(`${name}, congratulations welcome to JTBB Bootcamp.`);
}
function createButton() {
  var btn = document.getElementById("button");
    arr.forEach((name) => {
    var button = document.createElement("button");
    button.innerText = name;
    button.addEventListener("click", () => showAlert(name));
    btn.appendChild(button);
  });
}
createButton();
