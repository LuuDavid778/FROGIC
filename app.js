var introstate = [
        {
            img: "img/logo.svg",
            header: "<p>Hello <span id=\"nameofuser\">name</span>!<br> My name is Hoppy.</p>",
            cardtext: "<p>I need your help. <br> Can you build me a car? <br> I need to get to my grandpa's house. <br> My friends will give you the car parts but,  You must help them first!</p>"
            

        },

        {
            img: "img/ribbit.svg",
            header:"<p>Psst!</p><br><p>I'm Mr.Ribbit.",
            cardtext: "<p>Along our journey, I'll be<br>teaching you the methods of reasoning!  </p>"

        }

];

var introcounter = 0;

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

function forwardIntro(){
    document.querySelector(".q__text__header").innerHTML = introstate[1].header;
    document.querySelector(".q__text__header").innerHTML = introstate[1].header;
    console.log(introstate[1].header)

}




