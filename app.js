    var deductstate = [{
            img: "img/logo.svg",
            header: "<p>Hello <span id=\"nameofuser\">name</span>!<br> My name is Hoppy.</p>",
            cardtext: "<p>I need your help. <br> Can you build me a car? <br> I need to get to my grandpa's house. <br> My friends will give you the car parts but,  You must help them first!</p>",
            bgColor: "#fdbe6c",
            fontSize: "35px"
        },

        {
            img: "img/mr_ribbit.svg",
            header: "<p>Psst!<br> I'm Mr.Ribbit.</p>",
            cardtext: "<p>Along our journey, I'll be<br>teaching you the methods of reasoning!</p>",
            bgColor: "#fdbe6c",
            fontSize: "35pt"

        },

        {
            img: "img/dog1_sad.svg",
            header: "<p>Hey <span id=\"nameofuser\">name</span>!<br> My name is Racer.</p>",
            cardtext: "<p>I've lost something but I can't remember... <br>Can you help me figure out what I lost?</p>",
            bgColor: "#91abff",
            fontSize: "35pt"

        },
         {
            img: "img/dog1_sad.svg",
            header: "",
            cardtext: `<p>I've lost something but I can't remember... <br>Can you help me figure out what I lost?</p>
            <div id='frog_tag'>`,
            bgColor: "#91abff",
            fontSize: "35pt"

        }

    ];


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



    function forwardDeduct() {
        deductindex++
        document.querySelector(".q__text__header").innerHTML = deductstate[deductindex].header;
        document.querySelector(".q__text__desc").innerHTML = deductstate[deductindex].cardtext;
        document.querySelector(".q__text__desc").style.fontSize = deductstate[deductindex].fontSize;
        document.querySelector("#image_container_img").src = deductstate[deductindex].img;
        document.getElementById("app").style.backgroundColor = deductstate[deductindex].bgColor;

        console.log(deductindex)
    }

    var deductindex = 0
    function backwardDeduct() {
        
        deductindex--
        document.querySelector(".q__text__header").innerHTML = deductstate[deductindex].header;
        document.querySelector(".q__text__desc").innerHTML = deductstate[deductindex].cardtext;
        document.querySelector(".q__text__desc").style.fontSize = deductstate[deductindex].fontSize;
        document.querySelector("#image_container_img").src = deductstate[deductindex].img;
        document.getElementById("app").style.backgroundColor = deductstate[deductindex].bgColor;
        console.log(deductindex)

    }