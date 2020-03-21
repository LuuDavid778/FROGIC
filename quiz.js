var quiz_counter = 0
var quiz_state = [
    {
        selection1:`<button onclick = ChosenOption(1) class="quiz_button__button" id="quiz_button__1"><span class="quiz_button__options">A</span> Inductive Reasoning</button>`,
        selection2:`<button onclick = ChosenOption(2) class="quiz_button__button" id="quiz_button__2"><span class="quiz_button__options">A</span> Abductive Reasoning</button>`,
        selection3:`<button onclick = ChosenOption(3) class="quiz_button__button" id="quiz_button__3"><span class="quiz_button__options">A</span> Deductive Reasoning</button>`,
        answer: 1
    } ,
    {
        selection1:`test`,
        selection2:``,
        selection3:``,
        answer: 3
    }

    
]



var quiz_select


function ChosenOption(n) { 
    if (n === quiz_state[quiz_counter].answer) {
        console.log(n)
       document.getElementById("quiz_button__" + n).style.backgroundColor = "#66bf39"
       quiz_counter++
       setTimeout(function(){ advanceQuiz()},2000);
       console.log(quiz_counter)
    } else if (n !== quiz_state[quiz_counter]) {
    console.log("You are wrong!");
    document.getElementById("quiz_button__" + n).style.backgroundColor = "#ff3355"
    setTimeout(function(){
        document.getElementById("quiz_button__1").style.backgroundColor = "#e9e9e9"
        document.getElementById("quiz_button__2").style.backgroundColor = "#e9e9e9"
        document.getElementById("quiz_button__3").style.backgroundColor = "#e9e9e9"
    },2000);
    }
}

function advanceQuiz() {
    document.getElementById("quiz_button__1").style.backgroundColor = "#e9e9e9"
        document.getElementById("quiz_button__2").style.backgroundColor = "#e9e9e9"
        document.getElementById("quiz_button__3").style.backgroundColor = "#e9e9e9"
    document.getElementById("quiz_button__1").innerHTML = quiz_state[quiz_counter].selection1
    document.getElementById("quiz_button__2").innerHTML = quiz_state[quiz_counter].selection2
    document.getElementById("quiz_button__3").innerHTML = quiz_state[quiz_counter].selection3
    
}

