console.log("I'm linked to the html");

const h2 = document.querySelector('h2');

console.log("I am an h2 element", h2);

const btnChangeStyle = document.querySelector('#btn-style');

btnChangeStyle.addEventListener('click',() => {
    h2.style.fontFamily = 'monospace';
    h2.style.color = "green";
    h2.classList.add("title-border");
    //h2.setAttribute('id','testing');

    console.log("the class assigned to it called: ",h2.attributes.class.value);
});


//EVENTS 
const listInputs = document.querySelectorAll('input'); //get all 

listInputs.forEach(input => {
    input.addEventListener('focus', () => {
        console.log("I get focus");
        input.style.backgroundColor = 'lightblue';
    });
    
    input.addEventListener('blur', ()=> {
        input.style.backgroundColor = '';
    });
});


//FORM EVENT
const form = document.querySelector('#form1');
const formEventResult = document.querySelector('#form-event-result');

form.addEventListener('submit', (event)=> {
    event.preventDefault();
    console.log("submit event happened");
    console.log("the event object is", event);
    //GET access to the target.
    console.log("the name filled in is ", event.target.name.value);
    formEventResult.innerHTML += `<p>The name you entered: ${event.target.name.value}</p>`
});

//MOUSE EVENT 
const h1hover = document.querySelector('#h1hover');

h1hover.addEventListener('mouseover',() => {
    console.log("I hovered over h1 element");
    h1hover.style.color = "orange";
});

h1hover.addEventListener('mouseout',() => {
    console.log("I left the h1 element");
    h1hover.style.color = "";
});

//KEYUP event 
const planet = document.querySelector('#planet'); //<input>
const planetResult = document.querySelector('#planet-result'); //<p>

planet.addEventListener('keyup',(event) => {
    console.log("the keyup event fired");
    planetResult.innerText = event.target.value; //value of our input element
});

//WINDOW object 
const btnPrompt = document.querySelector('#btn-prompt');
const inputResult = document.querySelector('#input-result');

 btnPrompt.addEventListener('click', ()=> {
    const hobby = window.prompt("What's your hobby?");

    const p = document.createElement('p'); //creates a tag 
    p.innerText = hobby;

    inputResult.appendChild(p);

    window.alert("Hello I am an alert message");
 });

 //STATES
//pending --> it's in the workings. (neither fulfilled or rejected)
// I promise to do my task (taking garbage out)
//fulfilled --> I actually put garbage outside
//rejected --> I didn't put garbage outside, I rejected doing it. (I will not take garbage.)
//                                          something went wrong, I had another appointment.

//WHY --> doing some work in the background, and we don't know when it will be finished.

 //PROMISE 
 const myPromise = new Promise((resolve, reject) => {
    //doign some task here (mowing my lawn)
    //rejecting the promise
    //reject("Something went wrong trying to complete my task"); //I couldn't fulfill my promise.

    setTimeout(() => {
        resolve("I completed my task");
    },10000)
 });

 console.log("the promise looks like this", myPromise);

//  myPromise.then((parameter) => { //then is used when the promise is fulfilled. (resolve)
//     window.alert("I completed the task");
//     console.log("the parameter is", parameter);
//  }).catch((error) => {
//     console.error("There was an error", error);
//  });

 const promiseFunction = () => {
    return myPromise;
 }

 const asyncCall = async () => {
    try {//promise got resolved 
        const result = await promiseFunction();
        console.log("the result is", result);
    } catch (error) {//promise got rejected (throws error)
        console.error("The error happened", error);
    }
 }

 asyncCall();