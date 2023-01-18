console.log("Hello I am a console line, printed from the javascript code");

//GET ELEMENT BY ID (gets an elementn from the dom by id of the element)
let element = document.getElementById('demo');
console.log("the element we found is", element);

//GET ELEMENT BY CLASS (gets all elements that have this class)
let elementsByClass = document.getElementsByClassName('example');
console.log("the elements we found by class", elementsByClass);

//GET ELEMENTS BY TAG (gets all elements by tagname e.g. h1, p, div)
let h1ElementsByTag = document.getElementsByTagName('h1');
console.log("the h1 elements by tag", h1ElementsByTag);

//**GETTING SAME ELEMENTS USING QUERY SELECTOR */
//GET ELEMENT BY ID (using query selector)
let elementAsQuery = document.querySelector('#demo');
console.log("element as query", elementAsQuery);

//GET ELEMENT BY CLASSNAME USING querySelectorAll
let elementsByClassNameQuery = document.querySelectorAll('.example');
console.log("the elements we found by class as query", elementsByClassNameQuery)

//GET ELEMENT BY TAGNAME 
let h1ElementsByTagQuery = document.querySelector('h1');
console.log("the h1 element by tag usin query",h1ElementsByTagQuery);

//loop through each element and update some styles.
for(let e of elementsByClass){
    e.style.border = '2px solid red';
    e.style.fontSize = '30px'; //font-size becomes fontSize
    e.style.backgroundColor = 'lightgrey'; //background-color becomes backgroundColor
    e.style.fontFamily = 'Arial'; //font-family becomes fontFamily
}

/**START OF PRODUCTS */
//get the first element with class product (if all elements use querySelectorAll)
let productFound = document.querySelector('.product');
console.log("the product found is", productFound);

//get the product list with this id (traversing the parents)
//closest will travel all parent elements of this element until it finds the first that matches the 
//css selector 
//TODO:: GOOD EXAMPLE CLOSEST with h1 ==> finding for tag
let productList = productFound.closest('#product-list');
console.log("the product list found is", productList);

//GET all the labels on the product list using query selector
let labelsInProductList = document.querySelectorAll('#product-list label');
console.log("labels in product labels", labelsInProductList);

//loop through all labels in the list & apply styling based on classes
for(let label of labelsInProductList){
    //if there is a in-stock class apply some styling.
    if(label.matches('.in-stock')){
        label.style.backgroundColor = 'lightgreen';
        label.style.borderRadius = '2px 2px';
        label.style.padding = '4px';
        label.style.fontWeight = 'bold';
        label.style.fontFamily = 'monospace';
    } else if(label.matches('.almost-sold-out')){
        label.style.backgroundColor = 'lightyellow';
        label.style.borderRadius = '2px 2px';
        label.style.padding = '4px';
        label.style.fontWeight = 'bold';
        label.style.fontFamily = 'monospace';
    } else if(label.matches('.sold-out')){
        label.style.backgroundColor = '#f56262';
        label.style.borderRadius = '2px 2px';
        label.style.padding = '4px';
        label.style.fontWeight = 'bold';
        label.style.fontFamily = 'monospace';
    }
}

//GENERATE AN UNORDERED LIST OF PRODUCTS / QUICK OVERVIEW 
console.log("The product list we're using is", productList.children);

//get the quick overview list
let quickOverviewProducts = document.querySelector('#quick-overview-list');

//COPY ALL CHILDREN TO A QUICK OVERVIEW LIST 
for(let item of productList.children){
    console.log("item", item);
    //create a new item
    let newLi = document.createElement('li'); //creating a new tag <li>
    newLi.innerText = item.querySelector('h2').innerText; //copying the text of h2 to li

    //apply a class to the element
    newLi.classList.add('overview-list-item');

    //add a child to an existing item (add li to <ul>)
    quickOverviewProducts.appendChild(newLi);
}

//TRAVERSE ALL PARENTS OF THE ELEMENT 
let listParents = [];

let currentElement = document.querySelector('#thank-you-title');
//loop through each element until root element is reached.
while(currentElement){
    console.log(currentElement);
    listParents.unshift(currentElement.nodeName.toLocaleLowerCase());
    currentElement = currentElement.parentElement;
}

console.log(listParents.join(' > '));


//OUR FIRST EVENT 
let btnClickMe = document.querySelector('#btnClickMe');
console.log("btnClickMe", btnClickMe);
let confirmationMessage = document.querySelector('#confirmation-message');

//ONCLICK event 
btnClickMe.onclick = (e) => {
    //event object
    console.log("I got clicked", e);
    //ask browser for input using a prompt
    let info = window.prompt("Hi we'll back to you, where can we reach you?");
    //if cancel = null otherwise data
    console.log("info", info);

    if(info){
        //update the elements innerText
        confirmationMessage.innerText = "We'll get back to you at:" + info;
    }
}