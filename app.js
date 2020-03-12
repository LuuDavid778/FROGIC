
function storeName() {
    var userinput = document.getElementById("textbox__input").value;
    console.log(userinput);
    document.getElementById("nameofuser").innerHTML = userinput
    document.getElementById("namepage").style.display = "none";
    document.getElementById("intropage").style.display = "flex";
}

function startGame() {
    document.getElementById("startpage").style.display = "none";
    document.getElementById("namepage").style.display = "flex";
}




