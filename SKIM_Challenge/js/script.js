//1 CONSTANTS

//Defining constants for elements that are reocurring in my functions
const errorMessage = 'Please enter an integer number between 1 and 18!'
const getResult1 = document.getElementById('result1')
const getForm1 = document.getElementById('formC1')
const getInput1 = document.getElementById('inputChallenge1')
const getButton1 = document.getElementById('buttonChallenge1')

const getResult2 = document.getElementById('result2')
const getForm2 = document.getElementById('formC2')
const getInput2 = document.getElementById('inputChallenge2')
const getButton2 = document.getElementById('buttonChallenge2')

//2 ACTIONS

//Executing the calculateFactorial function when button1 is clicked
getButton1.onclick = function() {
    getResult1.style.color = 'black';
    calculateFactorial(getInput1.value);
};

//Executing the calculateSKIM function when button2 is clicked
getButton2.onclick = function() {
    getResult2.innerHTML = "";
    getResult2.style.color = 'black';
    calculateSKIM(getInput2.value);
};

//Executing the reset function when the reset button is clicked
document.getElementById("reset").onclick = function() {
    reset();
};

//3 FUNCTIONS

//Checking if the entered value is an integer number
function isInt(value) {
    return !isNaN(value) && 
    parseInt(Number(value)) == value && 
    !isNaN(parseInt(value, 10));
}

//Challenge 1 - The input is multiplied by itself minus 1 until it reaches 1
function calculateFactorial(valueC1) {
    //Throwing an error message when the input is not a number or not between 1 and 18
    try {
        if (!isInt(valueC1)) throw errorMessage;
        if (valueC1 <= 0) throw errorMessage;
        if (valueC1 >= 19) throw errorMessage;
    }
    
    catch(e) {
        getResult1.innerHTML = e;
        getResult1.style.color = 'red';
        getForm1.reset();
        return;
    }

    //Calculating the factorial
    if(valueC1 == 0 || valueC1 == 1){
        return getResult1.innerHTML = 1;
    }else{
        return getResult1.innerHTML = valueC1 *= calculateFactorial(valueC1-1);
    }
}


//Challenge 2 - SKIM is a great place to work!
function calculateSKIM(valueC2) {
    //Throwing an error message when the input is not a number or not between 1 and 18
    try {
        if (!isInt(valueC2)) throw errorMessage;
        if (valueC2 <= 0) throw errorMessage;
        if (valueC2 >= 19) throw errorMessage;
    }
    
    catch(e) {
        getResult2.innerHTML = e;
        getResult2.style.color = 'red';
        getForm2.reset();
        return;
    }

    //Executing the function
    for (let i = 0; i < valueC2;) {
        let element = document.createElement('li')
        element.innerText = "";
            {element.innerText += ((++i % 3 ? '' : 'SKIM ') + (i % 5 ? '' : 'is a great place to work!!') || i)}
        
        getResult2.appendChild(element);
    }
}

//Reset
function reset() {
    getForm1.reset();
    getForm2.reset();

    getResult1.innerHTML = "";
    getResult2.innerHTML = "";
}
