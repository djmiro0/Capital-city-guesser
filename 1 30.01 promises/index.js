let userExist = false;
//======================================================================
//this part mimics the fetch method which returns a promise
const myPromise = new Promise((resolve, reject) => {
  //some code that usually takes some time

  if (userExist) {
    resolve("hi");
  } else {
    reject("bye");
  }
});

//=====================================================================
// myPromise.then(
//   (result) => console.log(result),
//   (err) => {
//     return console.log(err);
//   }
// ); // not very common

myPromise
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
//====================================================================
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// example of successful/not successful login with a delay

let loginSuccessful;
//======================================================================
//this part mimics the fetch method which returns a promise with a delay
const loginPromise = new Promise((resolve, reject) => {
  //some code that usually takes some time

  setTimeout(() => {
    loginSuccessful = true;

    if (loginSuccessful) {
      resolve("logged in successfully");
    } else {
      reject("incorrect credentials");
    }
  }, 2000);
});

//=====================================================================
// loginPromise.then(
//   (result) => console.log(result),
//   (err) => {
//     return console.log(err);
//   }
// ); // not very common

loginPromise
  .then((result) => console.log(result))
  .catch((err) => console.log(err));

console.log("hello world");

//============================================================
//   setTimeout(()=>console.log('test hi'), 5000 )
//   setInterval(()=>console.log('test interval'), 1000 )
//==============================================================
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// async await syntax:

// the next function returns a promise (just like the fetch function)
const promiseFunc = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let myVar = true;
      if (myVar) {
        resolve("resolved with async");
      } else {
        reject("rejected with async");
      }
    }, 3000);
  });
};
//============================================================
// solution with .then() .catch():

// promiseFunc
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));
//==========================================================

//solution with async await:

const getResult = async () => {
  try {
    let result = await promiseFunc();
    console.log(result);
    // alert(result)
  } catch (err) {
    console.log(err);
    // alert(err)
  }
};

getResult();
//=========================================================
//side note:
// using the async with the old function syntax:
// async function testAsyncFunc(){
// *your code*
// }
//=============================================================
//example:
//write a promise that adds the text "the promise is resolved" to the div with the class "box" after 3 seconds

//solution:

//selecting the element:
const box = document.querySelector(".box");

//writing the promise:

const boxPromise = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("the promise is resolved");
    }, 3000);
  });
};

//resolving the promise using .then():

// boxPromise().then((result) => (box.innerText = result));

//resolving the promise using async await:

const resolvingBoxPromise = async () =>{
    let result = await boxPromise();
    box.innerText = result
}

resolvingBoxPromise();