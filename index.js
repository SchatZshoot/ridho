const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function calculate(){
    display.value = "Hello World";
}

function clearDisplay(){
    display.value = "";
}


