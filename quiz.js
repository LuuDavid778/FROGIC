var quiz_counter = 0
var quiz_state = [
    {
        selection1:`<div id="quiz_button_1" id = "quiz_buttons" class="btn__next"><p class="btn__next__text">A1</p></div>`,
        selection2:`<div id="quiz_button_2" id = "quiz_buttons" class="btn__next"><p class="btn__next__text">A2</p></div>`,
        selection3:`<div id="quiz_button_3" id = "quiz_buttons" class="btn__next"><p class="btn__next__text">A3</p></div>`,
        answer: 1
    } ,

    {
        selection1:`<div id="quiz_button_1" id = "quiz_buttons" class="btn__next"><p class="btn__next__text">A4</p></div>`,
        selection2:`<div id="quiz_button_2" id = "quiz_buttons" class="btn__next"><p class="btn__next__text">A5</p></div>`,
        selection3:`<div id="quiz_button_3" id = "quiz_buttons" class="btn__next"><p class="btn__next__text">A6</p></div>`,
        answer: 3
    }
]



var quiz_select


function ChosenOption(n) { 

    if (n === quiz_state[0].answer) {
       console.log("You are right!");
    } else
    console.log("You are wrong!");

}

function nextQuestion() {
    


}