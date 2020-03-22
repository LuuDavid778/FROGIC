var quiz_counter = 0
var quiz_state = [{

        question: `        <div class="q__container">
        <div class="q__progress__container">
            <h6 class="q__qnum">Question 1/4</h6>
            <div class="progress__bar">
                <div class="progress__current"></div>
            </div>
        </div>
        <div class="q__choice_and_img__container">
            <div class="q__choice__container">
                <div class="q__choice">
                    <div>
                        <h5 class="q__choice__title">All apples are fruits.</h5>
                        <p class="q__choice__sub">General!</p>
                    </div>
                </div>
                <div class="q__choice">
                    <div>
                        <h5 class="q__choice__title">Fruits have seeds.</h5>
                        <p class="q__choice__sub">Specific!</p>
                    </div>
                </div>
                <div class="q__choice">
                    <div>
                        <h5 class="q__choice__title">Apples are fruits.</h5>
                        <p class="q__choice__sub">Specific!</p>
                    </div>
                </div>
            </div>
            <div class="q__img__container">
                <img class="q__img" src="img/apple.svg">
                <img class="q__img q__img__02" src="img/seed.svg">
                <img class="q__img" src="img/apple_and_seed.svg">
            </div>
        </div>
    </div>`,
        selection1: `<button onclick = ChosenOption(1) class="quiz_button__button" id="quiz_button__1"><span class="quiz_button__options1">A</span> Inductive Reasoning</button>`,
        selection2: `<button onclick = ChosenOption(2) class="quiz_button__button" id="quiz_button__2"><span class="quiz_button__options2">B</span> Abductive Reasoning</button>`,
        selection3: `<button onclick = ChosenOption(3) class="quiz_button__button" id="quiz_button__3"><span class="quiz_button__options3">C</span> Deductive Reasoning</button>`,
        answer: 3
    },
    {
        question: `<div class="q__container">
        <div class="q__progress__container">
            <h6 class="q__qnum">Question 1/4</h6>
            <div class="progress__bar">
                <div class="progress__current"></div>
            </div>
        </div>
        <div class="q__choice_and_img__container">
            <div class="q__choice__container">
                <div class="q__choice">
                    <div>
                        <h5 class="q__choice__title">All boys love sports</h5>
                        <p class="q__choice__sub">General!</p>
                    </div>
                </div>
                <div class="q__choice">
                    <div id = "bordertest" >
                        <h5 class="q__choice__title">Reo is a boy.</h5>
                        <p class="q__choice__sub">Specific!</p>
                    </div>
                </div>
                <div class="q__choice">
                    <div>
                        <h5 class="q__choice__title">Reo loves sports.</h5>
                        <p class="q__choice__sub">Specific!</p>
                    </div>
                </div>  
            </div>
            <div class="q__img__container">
                <img id = "q__img1" class="q__img" src="img/boy1.svg">
                <img id = "q__img2" class="q__img q__img__02" src="img/boy2.svg">
                <img id = "q__img3"  class="q__img" src="img/apple_and_seed.svg">
            </div>
        </div>
    </div>`,
        selection1: `<button onclick = ChosenOption(1) class="quiz_button__button" id="quiz_button__1"><span class="quiz_button__options1">A</span> Premise</button>`,
        selection2: `<button onclick = ChosenOption(2) class="quiz_button__button" id="quiz_button__2"><span class="quiz_button__options2">B</span> Arguement</button>`,
        selection3: `<button onclick = ChosenOption(3) class="quiz_button__button" id="quiz_button__3"><span class="quiz_button__options3">C</span> Conclusion</button>`,
        answer: 1
    },
    {
        question: `<div class="q__container">
        <div class="q__progress__container">
            <h6 class="q__qnum">Question 1/4</h6>
            <div class="progress__bar">
                <div class="progress__current"></div>
            </div>
        </div>
        <div class="q__choice_and_img__container">
            <div class="q__choice__container">
                <div class="q__choice">
                    <div>
                        <h5 class="q__choice__title">You found a coin in the purse.</h5>
                        <p class="q__choice__sub">Specific!</p>
                    </div>
                </div>
                <div class="q__choice">
                    <div id = "bordertest" >
                        <h5 class="q__choice__title">You found another coin in the purse.</h5>
                        <p class="q__choice__sub">Specific!</p>
                    </div>
                </div>
                <div class="q__choice">
                    <div>
                        <h5 class="q__choice__title">There are only coins 
                        in the purse.</h5>
                        <p class="q__choice__sub">General!</p>
                    </div>
                </div>  
            </div>
            <div class="q__img__container">
                <img id = "q__img1" class="q__img" src="img/purse.svg">
                <img id = "q__img2" class="q__img q__img__02" src="img/purse2.svg">
                <img id = "q__img3"  class="q__img" src="img/purse3.svg">
            </div>
        </div>
    </div>`,
        selection1: `<button onclick = ChosenOption(1) class="quiz_button__button" id="quiz_button__1"><span class="quiz_button__options1">A</span> Deductive Reasoning</button>`,
        selection2: `<button onclick = ChosenOption(2) class="quiz_button__button" id="quiz_button__2"><span class="quiz_button__options2">B</span> Inductive Reasoning</button>`,
        selection3: `<button onclick = ChosenOption(3) class="quiz_button__button" id="quiz_button__3"><span class="quiz_button__options3">C</span> Abductive Reasoning</button>`,
        answer: 2
    },


    {
        question: `<div class="q__container">
        <div class="q__progress__container">
            <h6 class="q__qnum">Question 1/4</h6>
            <div class="progress__bar">
                <div class="progress__current"></div>
            </div>
        </div>
        <div class="q__choice_and_img__container">
            <div class="q__choice__container">
                <div class="q__choice">
                    <div>
                        <h5 class="q__choice__title">Emmie ran yesterday.</h5>
                        <p class="q__choice__sub">General!</p>
                    </div>
                </div>
                <div class="q__choice">
                    <div id = "bordertest" >
                        <h5 class="q__choice__title">Emmie ran today.</h5>
                        <p class="q__choice__sub">Specific!</p>
                    </div>
                </div>
                <div class="q__choice"> 
                    <div>
                        <h5 class="q__choice__title">Therefore, Emmie will run tomorrow.</h5>
                        <p class="q__choice__sub">Specific!</p>
                    </div>
                </div>  
            </div>
            <div class="q__img__container">
                <img id = "q__img1" class="q__img" src="img/girlcalendar1.svg">
                <img id = "q__img2" class="q__img q__img__02" src="img/girlcalendar2.svg">
                <img id = "q__img3"  class="q__img" src="img/girlcalendar3.svg">
            </div>
        </div>
    </div>`,
        selection1: `<button onclick = ChosenOption(1) class="quiz_button__button" id="quiz_button__1"><span class="quiz_button__options1">A</span> Arguement</button>`,
        selection2: `<button onclick = ChosenOption(2) class="quiz_button__button" id="quiz_button__2"><span class="quiz_button__options2">B</span> Conclusion</button>`,
        selection3: `<button onclick = ChosenOption(3) class="quiz_button__button" id="quiz_button__3"><span class="quiz_button__options3">C</span> Premise</button>`,
        answer: 2
    },


]



var quiz_select

// this is the javascript for the overall quiz process
// in the quiz.html, the three selections have the same function although they are numbered in the parameters e.g. ChosenOption(1) , ChosenOption(2), ChosenOption(3)
function ChosenOption(n) {
    // this code under neath states that if the selected option is equal to the answer in the object variable, set the background colour of the button to be green, text to be white and the span to be dark green
    if (n === quiz_state[quiz_counter].answer) {
        console.log(n)
        document.getElementById("quiz_button__" + n).style.backgroundColor = "#66bf39"
        document.getElementById("quiz_button__" + n).style.color = "white"
        document.querySelector(".quiz_button__options" + n).style.backgroundColor = "#57a130"
        quiz_counter++
        // this adds 1 to the quiz index so the question will change to a different array when button is pressed.

        // this setTimeout function basically says that after you get the question correct, once 2000 ms has passed, it will move onto the next quiz. 
        
        setTimeout(function () {
            advanceQuiz()
        }, 2000);
        console.log(quiz_counter)
        
        // if the chosen answer does not equal to the answer property in the quiz object then it will change the colour of the selection to red, text to white, etc. Afterwards; it will reset the styling of everything. after 1500 ms
    } else if (n !== quiz_state[quiz_counter].answer) {
        console.log("You are wrong!");
        document.getElementById("quiz_button__" + n).style.backgroundColor = "#ff3355"
        document.getElementById("quiz_button__" + n).style.color = "white"

        document.querySelector(".quiz_button__options" + n).style.backgroundColor = "#bf213b"
        setTimeout(function () {
            document.getElementById("quiz_button__1").style.backgroundColor = "#e9e9e9"
            document.getElementById("quiz_button__2").style.backgroundColor = "#e9e9e9"
            document.getElementById("quiz_button__3").style.backgroundColor = "#e9e9e9"
            document.querySelector(".quiz_button__options1").style.backgroundColor = "#515151"
            document.querySelector(".quiz_button__options2").style.backgroundColor = "#515151"
            document.querySelector(".quiz_button__options3").style.backgroundColor = "#515151"
            document.getElementById("quiz_button__1").style.color = "black"
            document.getElementById("quiz_button__2").style.color = "black"
            document.getElementById("quiz_button__3").style.color = "black"
        }, 1500);
    }
}
// advances the quiz, quiz changes based on what # the index is.
function advanceQuiz() {
    document.getElementById("quiz__question_sect").innerHTML = quiz_state[quiz_counter].question;
    document.getElementById("quiz_button__1").style.backgroundColor = "#e9e9e9";
    document.getElementById("quiz_button__2").style.backgroundColor = "#e9e9e9";
    document.getElementById("quiz_button__3").style.backgroundColor = "#e9e9e9";
    document.getElementById("quiz_button__div1").innerHTML = quiz_state[quiz_counter].selection1;
    document.getElementById("quiz_button__div2").innerHTML = quiz_state[quiz_counter].selection2;
    document.getElementById("quiz_button__div3").innerHTML = quiz_state[quiz_counter].selection3;

}

function barProgress(){
    if (quiz_counter === 0){
    document.querySelector(".progress__current").style.width = "25%";
    }
    else if (quiz_counter === 1){
    document.querySelector(".progress__current").style.width = "50%";
    }
    else if (quiz_counter === 2){
        document.querySelector(".progress__current").style.width = "75%";
    }
    else if (quiz_counter === 3){
        document.querySelector(".progress__current").style.width = "100%";
        }
}

barProgress();