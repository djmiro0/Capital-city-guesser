const form = document.querySelector("form");
const box = document.querySelector(".box");

form.addEventListener("submit", (event) => {
  event.preventDefault();
// if(event.target.innerText.includes('cancel')){
//     return;
// }
  console.log(document.querySelector("#input123").value);

  const userInput = event.target.myInput.value;
  const email= event.target.email.value;
  const password = event.target.pwd.value;
  const color = event.target.color.value;

  console.log(userInput);

  box.innerHTML += `<h1> the user entered: </h1> 
  <p> ${userInput} </p> 
  <p> Email: ${email}</p> 
  <p> Password: ${password} </p> 
  <p> Color: ${color} </p>`

  document.querySelectorAll('input').forEach((el)=> el.value = "");
});
