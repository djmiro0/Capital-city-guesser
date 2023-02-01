/**
 * Sets the backgroundcolor of an element by ID. 
 * @param {*} elementId 
 * @param {*} backgroundColor 
 */
export const setBackgroundColor = (elementId, backgroundColor) => {
    const element = document.getElementById(elementId);
    element.style.backgroundColor = backgroundColor;
}