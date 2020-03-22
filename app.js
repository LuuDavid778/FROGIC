var deductindex = 0
var back_button_state = true
var induct_back_button_state = false
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
        bgColor: "#67abe8",
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
        bgColor: "#67abe8",
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
        bgColor: "#67abe8",
        fontSize: "35pt",
        buttontext: "Got it!"

    },

    {
        img: `<img src="img/dog1_sad.svg">`,
        header: ``,
        cardtext: `<p id = "deductpage4__text">Racer is a dog.</p> <div class="deductive_hint">
            <img src="img/ribbit_hint.svg" class="deductive_hint__ribbit">
            <div class="deductive_hint__hint_border">
                    <p class="deductive_hint__hint_text">Hint: This is a premise!</p>
        </div>`,
        bgColor: "#67abe8",
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
        bgColor: "#67abe8",
        fontSize: "35pt",
        buttontext: "Got it!"
    },

    {
        img: `<div id = "logotext_container" id="container">
            <div  id="container__img"><img id="logotext_img" src="img/dog1_sad.svg"></div>
            <div  id="container__img"><img id="logotext_img" src="img/bone.svg"></div>
            </div>
            <div id="logotext_topPosition_questionMark">?</div>`,
        header: ``,
        cardtext: `<div id="definition_cardtext_movedleft_topgap"></div>
            <p id ="definition_cardtext_part6">Did Racer possibly lose his bone?</p>
            <div class="deductive_hint_part6">
            <img src="img/ribbit_hint.svg" class="deductive_hint__ribbit">
            <div class="deductive_hint__hint_border">
            <p class="deductive_hint__hint_text">Hint: This is a conclusion!</p>
            </div>`,
        buttontext: "",
        bgColor: "#67abe8"
    },
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

    {
        img: `<div id = "logotext_container" id="container">
        <div  id="container__img"><img id="logotext_img" src="img/dog1_sad.svg"></div>
        <div  id="container__img"><img id="logotext_img" src="img/bone.svg"></div>
        </div>
        <div id="logotext_topPosition" class="texts">Really?</div>`,
        header: ``,
        cardtext: `<div id="definition_cardtext_movedleft_topgap"></div>
        <p id ="definition_cardtext">It seems you selected the wrong one.<br></p>
        <div id="definition_cardtext_movedleft_topgap"></div>
        <p id ="definition_cardtext">Let's review the premises and <br>conclusion again.</p>
        <div class="deductive_hint_tryAgain">
        <img src="img/ribbit_hint.svg" class="deductive_hint__ribbit">
        <div class="deductive_hint__hint_border_tryAgain">
        <p class="deductive_hint__hint_text">Hint: If 2 premises are true, conclusion is true!</p>
        </div>`,
        buttontext: "Try again"
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
    {
        img: ` <div onclick = replayDeduct() class="replay_container">
        <img src="img/replay.svg">
     </div>
<div id="deductive_short_summary_cont">
        <div class="summary_container">
        <div class="summary_container_individual">
            <p class="summary_text_top">Premise 1</p>
            <h4 class="summary_text_middle">Some dogs lose their bones.</h6>
            <p class="summary_text_bottom">General idea</p>
        </div>
        <div class="summary_container_individual">
            <p class="summary_text_top">Premise 2</p>
            <p class="summary_text_middle">Racer is a dog.</p>
            <p class="summary_text_bottom">Specific idea</p>
        </div>
        <div class="summary_container_individual">
            <p class="summary_text_top">Conclusion</p>
            <h4 class="summary_text_middle">Racer possibly lose his bone.</h6>
            <p class="summary_text_bottom">Specific idea</p>
        </div>
    </div>
    <div class="summary_check_container">
        <img class="summary_check_img" src="img/correct.svg">
        <img class="summary_check_img" src="img/correct.svg">
        <img class="summary_check_img" src="img/wrong.svg">
    </div>
    </div>`,
        header: ``,
        cardtext: `<div id="deductive_short_shummary">
            <div class="deductive_short_shummary__ribbit">
            <img src="img/ribbit_hint.svg" class="deductive_hint__ribbit">
            </div>
            <div class="deductive_short_shummary__texts">
            <p id="intro__header2">You need <span class="deductive_short_shummary__pink">2 premises</span> to make a conclusion.<br/>
            Your premises must be <span class="deductive_short_shummary__pink">true</span> in order for your conclusion to be <span class="deductive_short_shummary__pink">true</span>.
            Your <span class="deductive_short_shummary__bold">first</span> premise should be a <span class="deductive_short_shummary__pink">general idea</span>.
            Your <span class="deductive_short_shummary__bold">second</span> premise should be a <span class="deductive_short_shummary__pink">specific idea</span>.
            Lastly, your conclusion should be a <span class="deductive_short_shummary__pink">specific idea</span>.<br/>
            All together, you used <br><span class="deductive_short_shummary__last_text">Deductive reasoning!</span></p>
            </div>

            </div>`,
        bgColor: "#5dade7",
        fontSize: "10pt",
        buttontext: "I got it!"

    },



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
    document.getElementById("app").style.backgroundColor = deductstate[deductindex].bgColor;

    if (deductindex === 7) {
        document.getElementById("btn__change_div").innerHTML = `<div class="yesno_button_container">
        <div class="yesno_btn__nextyes" onclick = "YesButton()"><p class="yesno_btn__next__text" id="yesno_btn_yes">Yes</p></div>
        <div class="yesno_btn__nextno" onclick = "NoButton()" ><p class="yesno_btn__next__text" id="yesno_btn_no">No</p></div>
    </div>`
    }


    if (back_button_state === false) {
        document.getElementById("back_button_display").style.display = "flex";
        back_button_state = true;

    }

    if (deductindex === 10) {
        document.getElementById("back_button_display").style.display = "none";
    }

    if (deductindex === 11) {
        document.getElementById("btn__change_div").innerHTML = `<div onclick=forwardInduct() class="btn__next__holder">
        <div id="intropage__forward" class="btn__next">
            <p id="nextbutton" class="btn__next__text">Okay!</p>
        </div>
    </div>`;
        document.getElementById("back_button_container").innerHTML = `<button id= "back_button_display" onclick=backwardInduct() class="back_button">
        <img src="img/back_icon.svg" class="back_icon">
        <div class="button_text">Back</div>
    </button>`;
        document.getElementById("back_button_display").style.display = "none";

    }
    if (deductindex === 7) {
        document.getElementById("back_button_display").style.display = "none";
        back_button_state = false
    }




    console.log(deductindex)
}


function backwardDeduct() {
    deductindex--
    console.log(deductindex)
    if (deductindex === -1) {
        resetPage()
        startGame()
        deductindex = 0
        document.querySelector("#app").style.backgroundColor = "#91abff"
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
    inductstate[0].header = "<p>Hello " + "<span id=\"nameofuser\">" + userinput + "</span>" + "!<br> My name is Timothy.</p>"
}

function YesButton() {
    deductindex = 8
    document.getElementById("btn__change_div").innerHTML = ` <div onclick=forwardDeduct() class="btn__next__holder">
<div id="intropage__forward" class="btn__next">
    <p id="nextbutton" class="btn__next__text">Okay!</p>
</div>
</div>
</div>`
    document.querySelector(".q__text__header").innerHTML = deductstate[deductindex].header;
    document.querySelector(".q__text__desc").innerHTML = deductstate[deductindex].cardtext;
    document.querySelector(".q__text__desc").style.fontSize = deductstate[deductindex].fontSize;
    document.querySelector(".image_container").innerHTML = deductstate[deductindex].img;
    deductindex = 9

}

function NoButton() {
    deductindex = 9
    document.getElementById("btn__change_div").innerHTML = ` <div onclick=forwardDeduct() class="btn__next__holder">
    <div id="intropage__forward" class="btn__next">
        <p id="nextbutton" class="btn__next__text">Okay!</p>
    </div>
    </div>
    </div>`
    document.querySelector(".q__text__header").innerHTML = deductstate[deductindex].header;
    document.querySelector(".q__text__desc").innerHTML = deductstate[deductindex].cardtext;
    document.querySelector(".q__text__desc").style.fontSize = deductstate[deductindex].fontSize;
    document.querySelector(".image_container").innerHTML = deductstate[deductindex].img;
    document.getElementById("back_button_display").style.display = "none";
    back_button_state = false
    deductindex = 2
}

function RecievePrize() {
    deductindex = 10
    document.querySelector(".q__text__header").innerHTML = deductstate[deductindex].header;
    document.querySelector(".q__text__desc").innerHTML = deductstate[deductindex].cardtext;
    document.querySelector(".q__text__desc").style.fontSize = deductstate[deductindex].fontSize;
    document.querySelector(".image_container").innerHTML = deductstate[deductindex].img;
    document.getElementById("back_button_display").style.display = "none";
    back_button_state = false

}


//Inductive Reasoning starts here

var inductindex = -1
var inductstate = [{
        img: `<img src="img/panda_sad.svg">`,
        header: "<p>Hey <span id=\"nameofuser\">name</span>!<br> My name is Timothy.</p>",
        cardtext: `<p id="induct_1__cardtext">I’m starving. <br> Can you help me?</p>`,
        bgColor: "#4DC1AE",
        fontSize: "35pt",
        buttontext: "Help Timothy",
    },

    {
        img: `<img src="img/panda_sad.svg">`,
        header: ``,
        cardtext: `<p id="inductive_2__cardtext">Timothy has no food.</p>
    <div class="deductive_hint">
    <img src="img/ribbit_hint.svg" class="deductive_hint__ribbit">
    <div class="deductive_hint__hint_border">
            <p class="deductive_hint__hint_text">Hint: This is a premise!</p>
    </div>`,
        bgColor: `#4DC1AE`,
        fontSize: `35pt`,
        buttontext: "Next",

    },

    {
        img: `<div id = "logotext_container" id="container">
        <div  id="container__img"><img id="logotext_img" src="img/panda_sad.svg"></div>
        <div  id = "logotext_txt" class="texts">Before we continue,<br>Let's go over a</br><b>premise</b> one more time!</div>
    </div>`,
        header: `<img id="ribbit_hintcenter" src="img/ribbit_hint.svg">`,
        cardtext: `<p id ="definition_cardtext"> A <span id = "word_hl"><b> premise</b></span> is a sentence that<br> 
    supports a conclusion.</p>`,
        bgColor: `#4DC1AE`,
        fontSize: "35pt",
        buttontext: "Got it!"

    },

    {
        img: `<img src="img/two_pandas.svg" id="inductive_4__image">`,
        header: ``,
        cardtext: `<p id = "inductive_4__text">Timothy's brother also has no food.</p> <div class="deductive_hint">
            <div id="inductive_4__hint">
                <img src="img/ribbit_hint.svg" class="deductive_hint__ribbit" id="inductive_4__hint_ribbit">
                <div class="deductive_hint__hint_border" id="inductive_4__hint_border">
                <p class="deductive_hint__hint_text" id="inductive_4__hint_text">Hint: This is also a premise!</p>
                </div>
            </div>`,
        bgColor: `#4DC1AE`,
        fontSize: "35pt",
        buttontext: "Next"


    },

    {
        img: `<div id = "logotext_container" id="container">
        <div  id="container__img"><img id="logotext_img" src="img/panda_sad.svg"></div>
        <div  id = "logotext_txt" class="texts">Let's also go over<br><b>conclusions</b> one<br>more time!</div>
    </div>`,
        header: `<img id="ribbit_hintcenter" src="img/ribbit_hint.svg">`,
        cardtext: `<p id ="definition_cardtext_movedleft"> A conclusion is the <span id = "word_hl"><b> finishing statement</b></span>,<br>
        it can be true or false!</p>
        <div id="definition_cardtext_movedleft_topgap"></div>
        <p id ="definition_cardtext_movedleft">Premises are what <span id = "word_hl"><b>make up a conclusion</b></span>.<br>
        Make sure you check out the premises to<br>
        figure out if the conclusion is <span id = "word_hl"><b>true or not!</b></span>`,
        bgColor: `#4DC1AE`,
        fontSize: "35pt",
        buttontext: "Got it!"
    },

    {
        img: `<div id="inductive_6__questionMark">?</div>
    <div id = "inductive_6__image"><img src="img/three_pandas.svg"></div>`,
        header: ``,
        cardtext: `<div id="definition_cardtext_movedleft_topgap"></div>
        <p id ="definition_cardtext_part6">Do all the panda's in the world have no food?</p>
        <div id="inductive6_hint__cont">
            <img src="img/ribbit_hint.svg" class="deductive_hint__ribbit" id="inductive6_hint__ribbit">
            <div class="deductive_hint__hint_border" id="inductive6_hint__border">
                <p class="deductive_hint__hint_text">Hint: This is a conclusion!</p>
            </div>
        </div>`,
        buttontext: "",
        bgColor: "#4DC1AE"
    },

    {
        img: `<div id="intro__top"><div id="intro__top_caption">You're right!</div><img src="img/panda_happy.svg"></div>`,
        header: `<p id="intro__header">Correct! Just because two panda's <br>don't have food, it doesn't mean all pandas don't.</p>`,
        cardtext: `<div class="deductive_hint" id="inductive7__hint_cont">
        <img src="img/ribbit_hint.svg" class="deductive_hint__ribbit" id="deductive_hint__ribbit_correct_image">
        <div class="deductive_hint__hint_border" id="deductive_hint__borderline">
                <p class="deductive_hint__hint_text" id="deductive_hint__hint_caption">Hint: The conclusion wasn't logical, great job!</p>
    </div>`,
        bgColor: "#4DC1AE",
        fontSize: "10pt",
        buttontext: "Receive your prize"

    },

    {
        img: `
    <div  id="container__img"><img id="logotext_img" src="img/panda_sad.svg"></div>
    <div id="logotext_topPosition" class="texts">Really?</div>`,
        header: ``,
        cardtext: `<div id="definition_cardtext_movedleft_topgap"></div>
    <p id ="definition_cardtext">It seems you selected the wrong one.<br></p>
    <div id="definition_cardtext_movedleft_topgap"></div>
    <p id ="definition_cardtext">Let's review the premises and <br>conclusion again.</p>
    <div class="deductive_hint_tryAgain">
    <img src="img/ribbit_hint.svg" class="deductive_hint__ribbit">
    <div class="deductive_hint__hint_border_tryAgain">
    <p class="deductive_hint__hint_text">Hint: Does the conclusion sound logical?</p>
    </div>`,
        buttontext: "Try again"
    },

    {
        img: `<img src="img/reward_page_image2.svg" id="reward_page__image">`,
        header: `<img src="img/logo.svg" id="reward_page__hoppy">`,
        cardtext: `<div class="reward_page__text"><p>Good job!</p><br/>
    <p>You got body for the car.<br>Go over what you did with<br>Mr. Big.!</p>`,
        bgColor: "#4DC1AE",
        fontSize: "35pt",
        buttontext: "Review"
    },

    {
        img: `<div onclick = replayInduct() class="inductreplay_container">
    <img src="img/replay.svg">
 </div> <img src="img/induct_short_summary_image.svg" id="induct_short_summary_image">`,
        header: ``,
        cardtext: `<div id="deductive_short_shummary">
        <div class="deductive_short_shummary__ribbit">
        <img src="img/ribbit_hint.svg" id="inductive_short_summary_2__ribbit">
        </div>
        <div class="deductive_short_shummary__texts" id="inductive_short_sunmmary__texts">
        <p id="intro__header2">As you know, you need <span class="deductive_short_shummary__pink">2 premises</span><br>to make a conclusion.<br/>
        Even though your premises are <span class="deductive_short_shummary__pink">true</span>,<br>your conclusion can be <span class="deductive_short_shummary__pink">false</span>.<br/>
        Premise with <span class="deductive_short_shummary__bold">your specific idea<br></span>must come <span class="deductive_short_shummary__pink">first</span>.<br/>
        Premise with <span class="deductive_short_shummary__bold">your general idea<br></span> must come <span class="deductive_short_shummary__pink">second</span>.<br/>
        What you have done is called <br><span class="deductive_short_shummary__last_text">Inductive reasoning!</span></p>
        </div>
        </div>`,
        bgColor: "#4DC1AE",
        fontSize: "10pt",
        buttontext: "I got it!"

    },

    {
        img: `<img src="img/reward_page_image3.svg" id="reward_page__image">`,
        header: `<img src="img/logo.svg" id="reward_page__hoppy">`,
        cardtext: `<div class="reward_page__text"><p>Thank you!</p><br/>
    <p>Thanks for helping us out! One last thing, we need you to colour the car although you'll need to pass this quiz first!</p>`,
        bgColor: "#4DC1AE",
        fontSize: "35pt",
        buttontext: "Take the Quiz"
    },



];


function changetoQuiz() {
    document.getElementById("startpage").style.display = "none";
    document.getElementById("namepage").style.display = "none";
    document.getElementById("intropage").style.display = "none";
    document.getElementById("quizpage").style.display = "flex";
}

function forwardInduct() {
    inductindex++
    console.log(inductindex + "induct index")
    document.querySelector(".q__text__header").innerHTML = inductstate[inductindex].header;
    document.querySelector("#nextbutton").innerHTML = inductstate[inductindex].buttontext;
    document.querySelector(".q__text__desc").innerHTML = inductstate[inductindex].cardtext;
    document.querySelector(".q__text__desc").style.fontSize = inductstate[inductindex].fontSize;
    document.querySelector(".image_container").innerHTML = inductstate[inductindex].img;
    document.getElementById("app").style.backgroundColor = "#4DC1AE";

    if (inductindex === 1) {
        document.getElementById("back_button_display").style.display = "flex";
        induct_back_button_state = true;

    }
    if (inductindex === 5) {
        document.getElementById("btn__change_div").innerHTML = `<div class="yesno_button_container">
        <div class="yesno_btn__nextyes" onclick = "InductYesButton()"><p class="yesno_btn__next__text" id="yesno_btn_yes">Yes</p></div>
        <div class="yesno_btn__nextno" onclick = "InductNoButton()"><p class="yesno_btn__next__text" id="yesno_btn_no">No</p></div>
    </div>`
    }
    if (inductindex === 5) {
        document.getElementById("back_button_display").style.display = "none";
        back_button_state = false
    }

    if (inductindex === 9 ) {
        document.getElementById("btn__change_div").innerHTML = ` <div onclick=changetoQuiz() class="btn__next__holder">
        <div id="intropage__forward" class="btn__next">
            <p id="nextbutton" class="btn__next__text">Take the quiz!</p>
        </div>`

        
    }


    

}

function backwardInduct() {
    console.log(inductindex)
    inductindex--
    if (inductindex === 0) {
        document.getElementById("back_button_display").style.display = "none";
        induct_back_button_state = false;
    }

    document.querySelector("#nextbutton").innerHTML = inductstate[inductindex].buttontext;
    document.querySelector(".q__text__header").innerHTML = inductstate[inductindex].header;
    document.querySelector(".q__text__desc").innerHTML = inductstate[inductindex].cardtext;
    document.querySelector(".q__text__desc").style.fontSize = inductstate[inductindex].fontSize;
    document.querySelector(".image_container").innerHTML = inductstate[inductindex].img;
    document.getElementById("app").style.backgroundColor = inductstate[inductindex].bgColor;
    console.log(inductindex)
}

function InductYesButton() {

    inductindex = 7
    document.getElementById("btn__change_div").innerHTML = ` <div onclick=forwardInduct() class="btn__next__holder">
        <div id="intropage__forward" class="btn__next">
            <p id="nextbutton" class="btn__next__text">Try Again</p>
        </div>
        </div>
        </div>`
    document.querySelector(".q__text__header").innerHTML = inductstate[inductindex].header;
    document.querySelector(".q__text__desc").innerHTML = inductstate[inductindex].cardtext;
    document.querySelector(".q__text__desc").style.fontSize = inductstate[inductindex].fontSize;
    document.querySelector(".image_container").innerHTML = inductstate[inductindex].img;
    document.getElementById("back_button_display").style.display = "none";
    back_button_state = false
    inductindex = 0
    console.log(inductindex)

}

function InductNoButton() {
    inductindex = 6
    document.getElementById("btn__change_div").innerHTML = ` <div onclick=forwardInduct() class="btn__next__holder">
    <div id="intropage__forward" class="btn__next">
        <p id="nextbutton" class="btn__next__text">Receive Your Prize</p>
    </div>
    </div>
    </div>`
    document.querySelector(".q__text__header").innerHTML = inductstate[inductindex].header;
    document.querySelector(".q__text__desc").innerHTML = inductstate[inductindex].cardtext;
    document.querySelector(".q__text__desc").style.fontSize = inductstate[inductindex].fontSize;
    document.querySelector(".image_container").innerHTML = inductstate[inductindex].img;
    console.log(inductindex)
    inductindex = 7

}

function InductRecievePrize() {
    inductindex = 8
    document.querySelector(".q__text__header").innerHTML = inductstate[deductindex].header;
    document.querySelector(".q__text__desc").innerHTML = inductstate[deductindex].cardtext;
    document.querySelector(".q__text__desc").style.fontSize = inductstate[deductindex].fontSize;
    document.querySelector(".image_container").innerHTML = inductstate[deductindex].img;
    document.getElementById("back_button_display").style.display = "none";
    back_button_state = false

}


function replayDeduct() {
    deductindex = 2
    document.getElementById("btn__change_div").innerHTML = `<div onclick=forwardDeduct() class="btn__next__holder">
       <div id="intropage__forward" class="btn__next">
           <p id="nextbutton" class="btn__next__text">Okay!</p>
       </div>
   </div>`;
    document.querySelector(".q__text__header").innerHTML = deductstate[deductindex].header;
    document.querySelector("#nextbutton").innerHTML = deductstate[deductindex].buttontext;
    document.querySelector(".q__text__desc").innerHTML = deductstate[deductindex].cardtext;
    document.querySelector(".q__text__desc").style.fontSize = deductstate[deductindex].fontSize;
    document.querySelector(".image_container").innerHTML = deductstate[deductindex].img;
    document.getElementById("app").style.backgroundColor = deductstate[deductindex].bgColor;



}


function replayInduct() {
    inductindex = 0
 
    document.querySelector(".q__text__header").innerHTML = inductstate[inductindex].header;
    document.querySelector("#nextbutton").innerHTML = inductstate[inductindex].buttontext;
    document.querySelector(".q__text__desc").innerHTML = inductstate[inductindex].cardtext;
    document.querySelector(".q__text__desc").style.fontSize = inductstate[inductindex].fontSize;
    document.querySelector(".image_container").innerHTML = inductstate[inductindex].img;
    document.getElementById("app").style.backgroundColor = "#4DC1AE";




}