const btnCatFact = document.querySelector("#btn-cat-fact");
const listCatFacts = document.querySelector("#list-cat-facts");
const latestFact = document.querySelector("#latest-fact");


//get random fact
const getRandomFact = async () => {
    //make get request to catfact.ninja/fact
    const res = await fetch("https://catfact.ninja/fact");
    const jsonResponse = await res.json();
    //set innerText of paragraph to fact
    latestFact.innerText = jsonResponse.fact;
    //call function to store fact in localstorage
    storeFactInLocalStorage(jsonResponse);
    //load the facts from localstorage
    loadCatFactsFromLocalStorage();
};


//store fact in localstorage
const storeFactInLocalStorage = (jsonResponse) => {
    //get list as JSON string from localstorage
    const currentCatFacts = localStorage.getItem('catFactsList');
    
    if(!currentCatFacts){
        //initialize array with item inside
        localStorage.setItem('catFactsList', JSON.stringify([jsonResponse.fact]));
    } else {
        //parse the JSON string array into javacript object array
        const arrCurrentCatFacts = JSON.parse(currentCatFacts);
        //add element to the array
        arrCurrentCatFacts.push(jsonResponse.fact);
        //stringify the array and store it back into localstorage
        localStorage.setItem('catFactsList',JSON.stringify(arrCurrentCatFacts));
    }
  }

  //load catfacts from localstorage
  const loadCatFactsFromLocalStorage = () => {
    const currentCatFacts = localStorage.getItem('catFactsList');
    const arrCurrentCatFacts = JSON.parse(currentCatFacts);
     //empty the <ul> using innerHtml.
    listCatFacts.innerHTML = '';

    arrCurrentCatFacts.forEach(element => {
         //first option:
         //create li element
         const li = document.createElement('li');
         //set innerText of li
         li.innerText = element;
         //add it to the unorderd list.
         listCatFacts.appendChild(li);
         
         //second option
        //  listCatFacts.innerHTML += `<li>${element}</li>`
    });
  }

//Get latest fact
btnCatFact.addEventListener("click", () => {
    getRandomFact();
});

//load items from localstorage when page loads
loadCatFactsFromLocalStorage();