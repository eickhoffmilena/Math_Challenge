// Challenge 1 - The input is multiplied by itself minus 1 until it reaches 1 - factorial
function calculateFactorial(valueC1) {
    // Option 1
    // let value = (valueC1 - 1);
    // for(let i = value; i >= 1; i--) {
    //     valueC1 *= i;
    // }
    // return valueC1;

    //Option 2 - Factorial - I chose this option as it is shorter and cleaner code when implemented
    //as in this specific challenge the first if-statement is substituted by a throw and catch statement
    if(valueC1 < 0){
        return "number has to be positive."
    }
    if(valueC1 == 0 || valueC1 == 1){
        return 1;
    }else{
        return valueC1 * calculateFactorial(valueC1-1);
    }
}

console.log(calculateFactorial(4));
console.log(calculateFactorial(8));

//Challenge 2 - SKIM is a great place to work
//This code will return numbers from 1 until the entered number, for multiples of 3 it will display 'SKIM', 
//for multiples of 5 it will display 'is a great place to work' and for multiples of both 3 and 5 it will display
//'SKIM is a great place to work', otherwise it will display just the number

function calculateSKIM(valueC2) {
    //Option 1 - using a for loop with if, else if and else
    // for(let i = 1; i <= valueC2; i++) {
    //     if ((i % 3 === 0) && (i % 5 === 0)) console.log('SKIM is a great place to work!!');
    //     else if (i % 3 === 0) console.log('SKIM');
    //     else if (i % 5 ===  0) console.log ('is a great place to work!!');
    //     else console.log(i);
    // }


   //Option 2 using ternary operators - any value that is not 0 is not considered falsy and therefore returns the first option, ? truthy : falsy
   //I chose this option as it is much shorter and cleaner code, also according to Mozilla.org ternary operators are preferred - (please find the link I refer to in my readme file)
   //however the first option is much easier to understand, so I am open to discuss about this choice
    for (let i = 0; i < valueC2;) console.log((++i % 3 ? '' : 'SKIM ') + (i % 5 ? '' : 'is a great place to work!!') || i)
    
}

calculateSKIM(15);