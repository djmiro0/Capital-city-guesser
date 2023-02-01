/**
 * Calculates the sum of two numbers.
 * @param {*} number1 
 * @param {*} number2 
 * @returns 
 */
export const sum = (number1, number2) => {
    return Number(number1) + Number(number2);
}
/**
 * Calculates the difference of two numbers
 * @param {*} number1 
 * @param {*} number2 
 * @returns 
 */
export const difference = (number1, number2) => {
    return Number(number1) - Number(number2);
}
/**
 * Calculates the multiplicatin of two numbers.
 * @param {*} number1 
 * @param {*} number2 
 * @returns 
 */
export const multiplication = (number1, number2) => {
    return Number(number1) * Number(number2);
}


//default export. 
export default {sum, difference, multiplication};
