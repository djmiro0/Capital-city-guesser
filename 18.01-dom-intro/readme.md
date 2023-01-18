# DOM manipulation intro

## Overview used methods

- ### Get Element by ID
    Returns element by id 
    ```javascript
    let element = document.getElementById('id');
    ```
- ### Get Elements by classname
    Returns element by classname 
    ```javascript
    let element = document.getElementsByClassName('id');
    ```
- ### Get Element by tagname
    Returns element by tagname 
    ```javascript
    let element = document.getElementsByTagName('tagname');
    ```

- ### Get Element using querySelector (by id)
    Returns element by id 
    ```javascript
    let elementAsQuery = document.querySelector('#id');
    ```

- ### Get Element using querySelector (by class)
    Returns element by classname 
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
    Add an element as child of existing element (e.g. appending an li to an ul element)
    ```javascript
     element.appendChild(newLi);
    ```

- ### Travel parent elements using closest(id)
    Closest will travel all parent elements of this element until it finds the first that matches the css selector.
    ```javascript
    let itemFound = element.closest('#id');
    ```

- ### Check if element matches selector.
    The matches() method of the Element interface tests whether the element would be selected by the specified CSS selector.
    ```javascript
    let labelFound = label.matches('.className'))
    ```
  

# Resources

[Access elements in DOM](https://www.digitalocean.com/community/tutorials/how-to-access-elements-in-the-dom)

[MDN GetElementById spec example](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)

[MDN Element matches spec example](https://developer.mozilla.org/en-US/docs/Web/API/Element/matches)

