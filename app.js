
function storeName() {
    var userinput = document.getElementById("textbox__input").value;
    document.getElementById("nameofuser").innerHTML = userinput
    document.getElementById("namepage").style.display = "none";
    document.getElementById("intropage").style.display = "flex";
    document.getElementById("app").style.backgroundColor = "#fdbe6c";
}

function startGame() {
    document.getElementById("startpage").style.display = "none";
    document.getElementById("namepage").style.display = "flex";
}




