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
        selection1: `<button onclick = ChosenOption(1) class="quiz_button__button" id="quiz_button__1"><span class="quiz_button__options">A</span> Inductive Reasoning</button>`,
        selection2: `<button onclick = ChosenOption(2) class="quiz_button__button" id="quiz_button__2"><span class="quiz_button__options">A</span> Abductive Reasoning</button>`,
        selection3: `<button onclick = ChosenOption(3) class="quiz_button__button" id="quiz_button__3"><span class="quiz_button__options">A</span> Deductive Reasoning</button>`,
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
        selection1: `<button onclick = ChosenOption(1) class="quiz_button__button" id="quiz_button__1"><span class="quiz_button__options">A</span> Premise</button>`,
        selection2: `<button onclick = ChosenOption(2) class="quiz_button__button" id="quiz_button__2"><span class="quiz_button__options">A</span> Arguement</button>`,
        selection3: `<button onclick = ChosenOption(3) class="quiz_button__button" id="quiz_button__3"><span class="quiz_button__options">A</span> Conclusion</button>`,
        answer: 3
    }


]



var quiz_select


function ChosenOption(n) {
    if (n === quiz_state[quiz_counter].answer) {
        console.log(n)
        document.getElementById("quiz_button__" + n).style.backgroundColor = "#66bf39"
        document.getElementById("quiz_button__" + n).style.color = "white"
        document.querySelector(".quiz_button__options").style.backgroundColor = "#57a130"
        quiz_counter++
        setTimeout(function () {
            advanceQuiz()
        }, 2000);
        console.log(quiz_counter)
    } else if (n !== quiz_state[quiz_counter]) {
        console.log("You are wrong!");
        document.getElementById("quiz_button__" + n).style.backgroundColor = "#ff3355"
        setTimeout(function () {
            document.getElementById("quiz_button__1").style.backgroundColor = "#e9e9e9"
            document.getElementById("quiz_button__2").style.backgroundColor = "#e9e9e9"
            document.getElementById("quiz_button__3").style.backgroundColor = "#e9e9e9"
           
        
        }, 2000);
    }
}

function advanceQuiz() {
    document.getElementById("quiz__question_sect").innerHTML = quiz_state[quiz_counter].question;
    document.getElementById("quiz_button__1").style.backgroundColor = "#e9e9e9";
    document.getElementById("quiz_button__2").style.backgroundColor = "#e9e9e9";
    document.getElementById("quiz_button__3").style.backgroundColor = "#e9e9e9";
    document.getElementById("quiz_button__div1").innerHTML = quiz_state[quiz_counter].selection1;
    document.getElementById("quiz_button__div2").innerHTML = quiz_state[quiz_counter].selection2;
    document.getElementById("quiz_button__div3").innerHTML = quiz_state[quiz_counter].selection3;

}