# DOM manipulation intro

## Overview used methods

- ### Get Element by ID
    Returns Element by id 
    ```javascript
    let element = document.getElementById('id');
    ```
- ### Get Elements by classname
    Returns Element by classname 
    ```javascript
    let element = document.getElementsByClassName('id');
    ```
- ### Get Element by tagname
    Returns Element by tagname 
    ```javascript
    let element = document.getElementsByTagName('tagname');
    ```

- ### Get Element using querySelector (by id)
    Returns Element by id 
    ```javascript
    let elementAsQuery = document.querySelector('#id');
    ```

- ### Get Element using querySelector (by class)
    Returns elements by classname 
    ```javascript
    let elementAsQuery = document.querySelector('.classname');
    ```
    
- ### Get multiple elements using querySelectorAll (by class)
    Returns multiple elements by classname 
    ```javascript
    let elementAsQuery = document.querySelectorAll('.classname');
    ```

- ### Create element using createElement
    Create an element (e.g. creating a li element)
    ```javascript
     let newLi = document.createElement('li');
    ```

- ### Add element as child of existing element using appenChild(element)
    Create an element (e.g. appending an li to an ul element)
    ```javascript
     element.appendChild(newLi);
    ```

# Resources

[Access elements in DOM](https://www.digitalocean.com/community/tutorials/how-to-access-elements-in-the-dom)

[MDN GetElementById spec example](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)

