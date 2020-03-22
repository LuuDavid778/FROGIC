var wheelcolour_index = 0
var wheelcolour_state = [
    {

        wheelColour:`placeholder dont touch`,
    },
   
   
    {

        wheelColour: `<img src = "car_parts/tire_red.svg">`,
       
    },

    {

        wheelColour: `<img src = "car_parts/tire_orange.svg">`,
      
    },

    {

        wheelColour: `<img src = "car_parts/tire_yellow.svg">`,
      
    },
    {

        wheelColour: `<img src = "car_parts/tire_green.svg">`,
       
    },

    {

        wheelColour: `<img src = "car_parts/tire_lightblue.svg">`,
        
    },

    {

        wheelColour: `<img src = "car_parts/tire_blue.svg">`,
       
    },

    {

        wheelColour: `<img src = "car_parts/tire_purple.svg">`,
       
    },

    {

        wheelColour: `<img src = "car_parts/tire_pink.svg">`,
        
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


}

function nextColourPage() {
    pageindex++ 
document.querySelector(".carpart_container").innerHTML = colourPage[pageindex].carpart
document.querySelector("#colourpage_header_text").innerHTML = colourPage[pageindex].caption
}

// CAR BODY JS



var bodycolour_state = [
    {

        bodyColour:`placholder`,
    },
   
   
    {

        bodyColour: `<img src = "car_parts/car_red.svg">`,
       
    },

    {

        bodyColour: `<img src = "car_parts/car_orange.svg">`,
      
    },

    {

        bodyColour: `<img src = "car_parts/car_yellow.svg">`,
      
    },
    {

        bodyColour: `<img src = "car_parts/car_green.svg">`,
       
    },

    {

        bodyColour: `<img src = "car_parts/car_lightblue.svg">`,
        
    },

    {

        bodyColour: `<img src = "car_parts/car_blue.svg">`,
       
    },

    {

        bodyColour: `<img src = "car_parts/car_purple.svg">`,
       
    },

    {

        bodyColour: `<img src = "car_parts/car_pink.svg">`,
        
    },    

];


function selectBodyColour(n) {
    document.querySelector(".carpart_container").innerHTML = wheelcolour_state[n].bodyColour
    
    
    }

