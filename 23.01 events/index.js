console.log("hello");
//====================================
// the 'window' object:

console.log(window);
// window.alert('good morning')
//  const userInput = window.prompt("what's your name?")

// console.log(userInput)

console.log(window.document);

// Note: we can omit the window object since it's the root object of our project (only works with window object)
//=====================================================
//+++++++++++++++++++++++++++++++++++++++++++++++++++++
// DOM manipulation:

//1.select element(s):
//1.a. selecting single element:
const testDiv = document.getElementById("test1");
const test2 = document.querySelector("#test2");

//1.a. selecting multiple elements:
const allSpans = document.getElementsByTagName("span"); // (live) html collection (array-like list) you can use .length, [i], forEach()
// same for getElementsByClassName

const allDivs = document.querySelectorAll("div"); // (not live) returns a node list
//=================================================
//2.creating elements:

// has 2 steps:

//2.a. creating the element:

const myEL = document.createElement("section");

//2.b. adding the element to a previously selected element in the html doc:

// appending myEl to testDiv

testDiv.appendChild(myEL);
//===================================================
//3.deleting a selected elements:

test2.remove();
//===================================================
//4.modifying the selected (or created) elements:
//4.a. innerText:
// adding a text in the section element myEL

myEL.innerText = "this text is coming from js using innerText";

myEL.innerText += " new text";
//4.b innerHTML:
//adding a 'p' with the text "hello world" tag in our section myEL:

myEL.innerHTML = "<p> this is from js using innerHTML </p>";

//4.c modifying the style object of an element:

console.log(myEL.style);
// myEL.style.backgroundColor = "black";

myEL.style = "text-align: center; color: red;"; // similar to: myEl.style.textAlign = "center" very similar to el.style.cssText

//4.d adding a className to a selected element:

const main = document.querySelector("main");

console.log(main.classList)

main.classList.add("light");

main.classList.remove("someClassName")

//================================================================
//5.adding events to the element:
// selecting the body element
const btn = document.querySelector("#btn-theme");
const footer = document.querySelector("footer")

// applying onclick event on it directly:
btn.onclick = () => {
    main.classList.toggle("light")
}

// applying the event using the .addEventListener() method:

const myFunc = () => {
    console.log('good afternoon')
    footer.style.fontSize = "70px";
// footer.classList.toggle("bigFont");

}

main.addEventListener("click", myFunc);


main.addEventListener("click", ()=>{
    console.log('hello again')
})

// the differences between the 2 ways: https://www.geeksforgeeks.org/difference-between-addeventlistener-and-onclick-in-javascript/

// list of all the common events: https://www.freecodecamp.org/news/javascript-events-explained-in-simple-english/
