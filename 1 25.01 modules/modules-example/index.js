//import functionality from a different module using destructuring
//{sum as sumOperation} using as alias
import { sum, difference, multiplication } from './modules/calculations.js';
//importing default object
import calculation from './modules/calculations.js';
//logging importing default and also specific error function.
import logging, {error} from './modules/logging.js';
//destructure setBackgroundColor
import {setBackgroundColor} from './modules/layoutenhancer.js';


/**Uncomment to test and experiment */
// console.log("The sum of 4 and 5 makes", sum(4,5));
// console.log("The difference of 10 and 5 makes", difference(10,5));
console.log("The multiplication of 2 and 2 makes", calculation.multiplication(2,2));

// const testElement = document.getElementById('test');
// testElement.innerText = `The sum of 4 and 5 makes ${sum(4,5)}`;

logging.info("Hello I am an info message");
logging.warning("Hello I am a warning messsage");
logging.error("Hello I am an error message");

error('hello I am an additional error');

//use the layoutenhancer we built 
setBackgroundColor('test','orange');

const sum_1 = document.getElementById('sum_1');
const sum_2 = document.getElementById('sum_2');
const operator = document.querySelector('.operator select');
const sum_result = document.getElementById('sum_result');



const calculate = () => {
    console.log("change event occurred");
    logging.warning("Operation is running");
    //check which operator is selected and apply the method accordingly.
    if(operator.value == '+'){
        sum_result.value = sum(sum_1.value, sum_2.value);
    }
    if(operator.value == '-'){
        sum_result.value = difference(sum_1.value, sum_2.value);
    }
    if(operator.value == '*'){
        sum_result.value = multiplication(sum_1.value, sum_2.value);
    }  
}

//change event 
// sum_1.addEventListener('change', calculate);
// sum_2.addEventListener('change', calculate);

//alternative keyup (when we type in the input field.)
sum_1.addEventListener('keyup', calculate);
sum_2.addEventListener('keyup', calculate);

//when the value changes of the select (when we select a value)
operator.addEventListener('change', calculate);