//1 CONSTANTS

//Defining constants for elements that are reocurring in my functions
const getResult1 = document.getElementById('result-1')
const getForm1 = document.getElementById('form-c1')
const getInput1 = document.getElementById('input-challenge-1')
const getButton1 = document.getElementById('button-challenge-1')

const getResult2 = document.getElementById('result-2')
const getForm2 = document.getElementById('form-c2')
const getInput2 = document.getElementById('input-challenge-2')
const getButton2 = document.getElementById('button-challenge-2')
const errorMessage2 = 'Please enter a positive integer number!'

//2 ACTIONS

//Executing the calculateFactorial function when button1 is clicked
getButton1.onclick = function() {
    getResult1.style.color = 'black';
    getResult1.innerHTML = calculateFactorial(getInput1.value);
};

//Executing the calculateSKIM function when button2 is clicked
getButton2.onclick = function() {
    getResult2.innerHTML = "";
    getResult2.style.color = 'black';
    getResult2.innerHTML = calculateSKIM(getInput2.value, getResult2, getForm2, errorMessage2);
};

//Executing the reset function when the reset button is clicked
document.getElementById("reset").onclick = function() {
    reset(getForm1, getResult1);
    reset(getForm2, getResult2);
};

//3 FUNCTIONS

//Checking if the entered value is an integer number
function isInt(value) {
    return !isNaN(value) && 
    parseInt(Number(value)) == value && 
    !isNaN(parseInt(value, 10));
}

//Throw and catch errors
//Throwing an error message when the input is not a number or not positive
function throwAndCatchErrors(value, getResult, getForm, errorMessage) {
    try {
        if (!isInt(value)) throw errorMessage;
        if (value <= 0) throw errorMessage;
        //removed the upper limit after feedback
        return 'validInput';
    }
    
    catch(e) {
        getResult.innerHTML = e;
        getResult.style.color = 'red';
        getForm.reset();
        return 'notValidInput';
    }
}

//Challenge 1 - The input is multiplied by itself minus 1 until it reaches 1
function calculateFactorial(value) {

    //Calculating the factorial
    if(value == 1){
        return 1;
    }else{
        return value * calculateFactorial(value-1);
    }
}


//Challenge 2 - SKIM is a great place to work!
function calculateSKIM(value, getResult, getForm, errorMessage) {
    //Throwing an error message when the input is not a number or not positive
    let validInput = throwAndCatchErrors(value, getResult, getForm, errorMessage);
    if (validInput == 'notValidInput') return errorMessage;
   
    //Executing the function
    let SKIMList = [];
    let logElement = '';
    for (let i = 0; i < value;) {
        logElement = ((++i % 3 ? '' : 'SKIM ') + (i % 5 ? '' : 'is a great place to work!!') || i);
        console.log(logElement);
        SKIMList.push(logElement);
    }
    
    //Formatting the output to display as a list 
    SKIMList = SKIMList.map(n => '<li>' + n + '</li>').join(' ');
    
    return SKIMList;
}

//Reset
function reset(getForm, getResult) {
    getForm.reset();
    getResult.innerHTML = "";
}
