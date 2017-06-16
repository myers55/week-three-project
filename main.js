/*
assign values to the buttons 
make it to where once button is pressed the value displays in the input box
once the = is pressed the equation is executed replacing the inputed numbers with the final value
!!!!only one operator equations so far!!!!!!
c clears the display and any saved numbers
*/
//get all button elements
//get display element
//setup input variable 
//run through all buttons
//add an event listener to all buttons
//check for equals and if it is equals eval the input
//if its not equals concat the input with the value of the button
// set the innerText of the display
// document.getElementById("seven").addEventListener("click", 7);
// document.getElementById("eight").addEventListener("click", 8);
// document.getElementById("nine").addEventListener("click", 9);
// document.getElementById("divide").addEventListener("click", /);
// document.getElementById("four").addEventListener("click", 4);
// document.getElementById("five").addEventListener("click", 5);
// document.getElementById("six").addEventListener("click", 6);
// document.getElementById("multiply").addEventListener("click", *);
// document.getElementById("one").addEventListener("click", 1);
// document.getElementById("two").addEventListener("click", 2);
// document.getElementById("three").addEventListener("click", 3);
// document.getElementById("subtract").addEventListener("click", -);
// document.getElementById("zero").addEventListener("click", 0);
// document.getElementById("decimal").addEventListener("click", .);
// document.getElementById("add").addEventListener("click", +);



//var elements = document.querySelector(button.value);

function calls(buttonValue){
    if(buttonValue == 'C'){
        document.getElementById('display').value ='0';
    }
    else{
        if(document.getElementById('display').value == '0'){
            document.getElementById('display').value = buttonValue;
        }
        else{
            document.getElementById('display').value += buttonValue;
        }
    }

} 
function call(equation)
{
    var result = eval(equation);
    document.getElementById('display').value = result;
}  
function call(equation) {
    document.getElementById('display').value = result;
}

function calculate() {
    document.getElementById('display').value = eval(document.getElementById('display').value);
} 