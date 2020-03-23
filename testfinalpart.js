var wheelcolour_index = 0
var wheelcolour_state = [
    {

        wheelColour:`placeholder dont touch`,
    },
   
   
    {

        wheelColour: `<img src = "car_parts/tire_red.svg">`,
        finalwheelColour: `<img src = "car_parts/tire_red.svg" id= "tire">`
    },

    {

        wheelColour: `<img src = "car_parts/tire_orange.svg">`,
        finalwheelColour: `<img src = "car_parts/tire_orange.svg" id= "tire">`
    },

    {

        wheelColour: `<img src = "car_parts/tire_yellow.svg">`,
        finalwheelColour: `<img src = "car_parts/tire_yellow.svg" id= "tire">`
    },
    {

        wheelColour: `<img src = "car_parts/tire_green.svg">`,
        finalwheelColour: `<img src = "car_parts/tire_green.svg" id= "tire">`
    },

    {

        wheelColour: `<img src = "car_parts/tire_lightblue.svg" >`,
        finalwheelColour: `<img src = "car_parts/tire_lightblue.svg" id= "tire">`
    },

    {

        wheelColour: `<img src = "car_parts/tire_blue.svg">`,
        finalwheelColour: `<img src = "car_parts/tire_blue.svg" id= "tire">`
    },

    {

        wheelColour: `<img src = "car_parts/tire_purple.svg">`,
        finalwheelColour: `<img src = "car_parts/tire_purple.svg" id= "tire">`
       
    },

    {

        wheelColour: `<img src = "car_parts/tire_pink.svg">`,
        finalwheelColour: `<img src = "car_parts/tire_pink.svg" id= "tire">`
    },    

];

var pageindex = 0
var colourPage = [
    {
        carpart:`<img src="car_parts/tire_default.svg">`,
        caption:"<b>Pick your favourite colour for the wheels!</b>"
    },
    {
        carpart:`<img id="carpart_size" src="car_parts/car_default.svg">`,
        caption:`<b>Pick your favourite colour for the car body!</b>`
    }
]

var selectedWheelColour
function selectWheelColour(n) {
document.querySelector(".carpart_container").innerHTML = wheelcolour_state[n].wheelColour
document.getElementById("final_tire").innerHTML = wheelcolour_state[n].finalwheelColour



}

function nextColourPage() {
pageindex++ 
document.querySelector(".carpart_container").innerHTML = colourPage[pageindex].carpart
document.querySelector("#colourpage_header_text").innerHTML = colourPage[pageindex].caption



if (pageindex === 1) {
    document.querySelector(".colourpage_colours_top_row").innerHTML = 
    `<div onclick = selectBodyColour(1) class="colourpage_colours" id="red"></div>
    <div onclick = selectBodyColour(2) class="colourpage_colours" id="orange"></div>
    <div onclick = selectBodyColour(3) class="colourpage_colours" id="yellow"></div>
    <div onclick = selectBodyColour(4) class="colourpage_colours" id="green"></div>`

    document.querySelector(".colourpage_colours_bot_row").innerHTML = 
    `<div onclick = selectBodyColour(5) class="colourpage_colours" id="cyan"></div>
    <div onclick = selectBodyColour(6) class="colourpage_colours" id="blue"></div>
    <div onclick = selectBodyColour(7) class="colourpage_colours" id="purple"></div>
    <div onclick = selectBodyColour(8) class="colourpage_colours" id="pink"></div>`

    document.querySelector("#colourPage_button").innerHTML = ` <div onclick = changetoLastPage() class="btn__next__holder">
    <div class="btn__next"><p class="btn__next__text">Pick this colour</p></div>
</div>`

}



}

function changetoLastPage() {
    document.getElementById("colourpage").style.display = "none"
    document.getElementById("lastpage").style.display = "flex"
}

// CAR BODY JS


var bodyColor_index = 0
var bodycolour_state = [
    {

        bodyColour:`placholder`,
    },
   
   
    {

        bodyColour: `<img src = "car_parts/car_red.svg" id="carpart_size">`,
        finalbodyColour: `<img src = "car_parts/car_red.svg" id= "car">`
       
    },

    {

        bodyColour: `<img src = "car_parts/car_orange.svg" id="carpart_size">`,
         finalbodyColour: `<img src = "car_parts/car_orange.svg"  id= "car">`
      
    },

    {

        bodyColour: `<img src = "car_parts/car_yellow.svg" id="carpart_size">`,
        finalbodyColour: `<img src = "car_parts/car_yellow.svg"  id= "car">`
      
    },
    {

        bodyColour: `<img src = "car_parts/car_green.svg" id="carpart_size">`,
        finalbodyColour: `<img src = "car_parts/car_green.svg"  id= "car">`
       
    },

    {

        bodyColour: `<img src = "car_parts/car_lightblue.svg" id="carpart_size">`,
        finalbodyColour: `<img src = "car_parts/car_lightblue.svg"  id= "car">`
        
    },

    {

        bodyColour: `<img src = "car_parts/car_blue.svg" id="carpart_size">`,
        finalbodyColour: `<img src = "car_parts/car_blue.svg"  id= "car">`
       
    },

    {

        bodyColour: `<img src = "car_parts/car_purple.svg" id="carpart_size">`,
        finalbodyColour: `<img src = "car_parts/car_purple.svg"  id= "car">`
       
    },

    {

        bodyColour: `<img src = "car_parts/car_pink.svg" id="carpart_size">`,
        finalbodyColour: `<img src = "car_parts/car_pink.svg"  id= "car">`
        
    },    

];

var selectBodyColor

function selectBodyColour(n) {
    document.querySelector(".carpart_container").innerHTML = bodycolour_state[n].bodyColour
    document.getElementById("final_body").innerHTML = bodycolour_state[n].finalbodyColour
    }