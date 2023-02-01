/**
 * Prints a timestamped info message to the console
 * @param {*} info 
 */
export const info = (info) => {
    console.info(`${new Date().toLocaleString()} - INFO - ${info}`);
}

/**
 * Prints a timestamped warning message to the console
 * @param {*} warning 
 */
export const warning = (warning) => {
    console.warn(`${new Date().toLocaleString()} - WARN - ${warning}`);
}

/**
 * Prints a timestamped error message to the console
 * @param {*} error 
 */
export const error = (error) => {
    console.error(`${new Date().toLocaleString()} - ERROR - ${error}`);
}

export default {info, warning, error};