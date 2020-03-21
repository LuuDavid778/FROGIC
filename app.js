var deductindex = 0
    var deductstate = [{
            img: `<img id="image_container_img" src="img/logo.svg">`,
            header: "<p>Hello <span id=\"nameofuser\"></span>!<br> My name is Hoppy.</p>",
            cardtext: "<p>I need your help. <br> Can you build me a car? <br> I need to get to my grandpa's house. <br> My friends will give you the car parts but,  You must help them first!</p>",
            bgColor: "#fdbe6c",
            fontSize: "35px",
            buttontext: "Okay!"
        },

        {
            img: `<img src="img/mr_ribbit.svg">`,
            header: "<p>Psst!<br> I'm Mr.Ribbit.</p>",
            cardtext: "<p>Along our journey, I'll be<br>teaching you the methods of reasoning!</p>",
            bgColor: "#fdbe6c",
            fontSize: "35pt",
            buttontext: "Start Learning"


        },

        {
            img: `<img src="img/dog1_sad.svg">`, 
            header: "<p>Hey <span id=\"nameofuser\">name</span>!<br> My name is Racer.</p>",
            cardtext: "<p>I've lost something but I can't remember... <br>Can you help me figure out what I lost?</p>",
            bgColor: "#91abff",
            fontSize: "35pt",
            buttontext: "Help Racer"

        },

        {
            img: `<img src="img/dogs.svg">`,
            header: "",
            cardtext: `<p id="threedogs_text">Some dogs lose their bones.</p>
            <div class="deductive_hint">
            <img src="img/ribbit_hint.svg" class="deductive_hint__ribbit">
            <div class="deductive_hint__hint_border">
                    <p class="deductive_hint__hint_text">Hint: This is a premise!</p>
        </div>`,
            bgColor: "#91abff",
            fontSize: "35pt",
            buttontext: "Next"

        },

        {
            img: `<div id = "logotext_container" id="container">
            <div  id="container__img"><img id="logotext_img" src="img/dog1_sad.svg"></div>
            <div  id = "logotext_txt" class="texts">Before we continue.<br>Let's learn what</br>a<b> premise </b>is first!</div>
        </div>`,
        header: `<img id="ribbit_hintcenter" src="img/ribbit_hint.svg">`,
        cardtext: `<p id ="definition_cardtext"> A <span id = "word_hl"><b> premise</b></span> is a sentence that<br> 
        supports a conclusion.</p>`,
        bgColor: "#91abff",
            fontSize: "35pt",
            buttontext: "Got it!"

        },

        {
            img:`<img src="img/dog1_sad.svg">`,
            header:``,
            cardtext:`<p id = "deductpage4__text">Racer is a dog.</p> <div class="deductive_hint">
            <img src="img/ribbit_hint.svg" class="deductive_hint__ribbit">
            <div class="deductive_hint__hint_border">
                    <p class="deductive_hint__hint_text">Hint: This is a premise!</p>
        </div>`,




            bgColor: "#91abff",
            fontSize: "35pt",
            buttontext: "Next"
            
        


        }, 

        {
            img: `<div id = "logotext_container" id="container">
            <div  id="container__img"><img id="logotext_img" src="img/dog1_sad.svg"></div>
            <div  id = "logotext_txt" class="texts">Let's be sure to also<br>learn <b>conclusions!</b></div>
        </div>`,
            header: `<img id="ribbit_hintcenter" src="img/ribbit_hint.svg">`,
            cardtext: `<p id ="definition_cardtext_movedleft"> A conclusion is the <span id = "word_hl"><b> finishing statement</b></span>,<br>
            it can be true or false!</p>
            <div id="definition_cardtext_movedleft_topgap"></div>
            <p id ="definition_cardtext_movedleft">Premises are what <span id = "word_hl"><b>make up a conclusion</b></span>.<br>
            Make sure you check out the premises to<br>
            figure out if the conclusion is <span id = "word_hl"><b>true or not!</b></span>`,
            bgColor: "#91abff",
            fontSize: "35pt",
            buttontext: "Got it!"
        },
        {
        img: `<img src="img/reward_page_image.svg" id="reward_page__image">`,
        header: `<img src="img/logo.svg" id="reward_page__hoppy">`,
        cardtext: `<div class="reward_page__text"><p>Good job!</p><br/>
        <p>You got the wheels for the car. Let's review!</p>`,
        bgColor: "#91abff",
        fontSize: "35pt",
        buttontext: "Review"
        },

        
 // insert Aksel's part here! (1)
        
        {
            img: `<div id="intro__top"><div id="intro__top_caption">You're right!</div><img src="img/dog1_happy_bone.svg"></div>`,
            header: `<p id="intro__header">Yes, Racer most likely lost his bone.</p>`,
            cardtext: `<div class="deductive_hint" id="deductive_reasoning_correct">
            <img src="img/ribbit_hint.svg" class="deductive_hint__ribbit" id="deductive_hint__ribbit_correct_image">
            <div class="deductive_hint__hint_border" id="deductive_hint__borderline">
                    <p class="deductive_hint__hint_text" id="deductive_hint__hint_caption">Hint: If 2 premises are true, conclusion is true!</p>
        </div>`,
            bgColor: "#91abff",
            fontSize: "10pt",
            buttontext: "Receive your prize"

        },

        // {
        //     img: `<div id = "logotext_container" id="container">
        //     <div  id="container__img"><img id="logotext_img" src="img/dog1_sad.svg"></div>
        //     <div  id="container__img"><img id="logotext_img" src="img/bone.svg"></div>
        //     </div>
        //     <div id="logotext_topPosition" class="texts">Really?</div>`,
        //     header: ``,
        //     cardtext: `<div id="definition_cardtext_movedleft_topgap"></div>
        //     <p id ="definition_cardtext">It seems you selected the wrong one.<br></p>
        //     <div id="definition_cardtext_movedleft_topgap"></div>
        //     <p id ="definition_cardtext">Let's review the premises and <br>conclusion again.</p>
        //     <div class="deductive_hint_tryAgain">
        //     <img src="img/ribbit_hint.svg" class="deductive_hint__ribbit">
        //     <div class="deductive_hint__hint_border_tryAgain">
        //     <p class="deductive_hint__hint_text">Hint: If 2 premises are true, conclusion is true!</p>
        //     </div>`
        // }


        // <div id="deductive_short_shummary">
        //     <div class="deductive_short_shummary__ribbit">
        //     <img src="img/ribbit_hint.svg" class="deductive_hint__ribbit">
        //     </div>
        //     <div class="deductive_short_shummary__texts">
        //     <p id="intro__header">You need <span class="deductive_short_shummary__pink">2 premises</span> to make a conclusion.<br/>
        //     Your premises must be <span class="deductive_short_shummary__pink">true</span> in order for your conclusion to be <span class="deductive_short_shummary__pink">true</span>.<br/>
        //     Your <span class="deductive_short_shummary__bold">first</span> premise should be a <span class="deductive_short_shummary__pink">general idea</span>.<br/>
        //     Your <span class="deductive_short_shummary__bold">second</span> premise should be a <span class="deductive_short_shummary__pink">specific idea</span>.<br/>
        //     Lastly, your conclusion should be a <span class="deductive_short_shummary__pink">specific idea</span>.<br/>
        //     All together, you used <span class="deductive_short_shummary__last_text">Deductive reasoning!</span></p>
        //     </div>

        //     </div>`


    ];

    function resetPage() {
        document.getElementById("startpage").style.display = "none";
        document.getElementById("namepage").style.display = "none";
        document.getElementById("intropage").style.display = "none";
    }

    function startGame() {
        document.getElementById("startpage").style.display = "none";
        document.getElementById("namepage").style.display = "flex";
    }


    function forwardDeduct() {
        deductindex++
        console.log(deductindex)
        document.querySelector(".q__text__header").innerHTML = deductstate[deductindex].header;
        document.querySelector("#nextbutton").innerHTML = deductstate[deductindex].buttontext;
        document.querySelector(".q__text__desc").innerHTML = deductstate[deductindex].cardtext;
        document.querySelector(".q__text__desc").style.fontSize = deductstate[deductindex].fontSize;
        document.querySelector(".image_container").innerHTML = deductstate[deductindex].img;
        document.getElementById("app").style.backgroundColor = "#91abff"
    

    }

    
    function backwardDeduct() {
        deductindex--
        console.log(deductindex)
        if (deductindex === -1) {
            resetPage()
            startGame()
            deductindex = 0 
            document.querySelector("#app").style.backgroundColor = "#91abff";   
        } else {
        document.querySelector("#nextbutton").innerHTML = deductstate[deductindex].buttontext;
        document.querySelector(".q__text__header").innerHTML = deductstate[deductindex].header;
        document.querySelector(".q__text__desc").innerHTML = deductstate[deductindex].cardtext;
        document.querySelector(".q__text__desc").style.fontSize = deductstate[deductindex].fontSize;
        document.querySelector(".image_container").innerHTML = deductstate[deductindex].img;
        document.getElementById("app").style.backgroundColor = deductstate[deductindex].bgColor;
        }
  


    }
       function storeName() {   
        var userinput = document.getElementById("textbox__input").value;
        document.getElementById("nameofuser").innerHTML = userinput
        document.getElementById("namepage").style.display = "none";
        document.getElementById("intropage").style.display = "flex";
        document.getElementById("app").style.backgroundColor = "#fdbe6c";
        deductstate[2].header = "<p>Hey " + "<span id=\"nameofuser\">" + userinput + "</span>" + "!<br> My name is Racer.</p>"
        deductstate[0].header = "<p>Hello " + "<span id=\"nameofuser\">" + userinput + "</span>" + "!<br> My name is Hoppy.</p>"
    }

