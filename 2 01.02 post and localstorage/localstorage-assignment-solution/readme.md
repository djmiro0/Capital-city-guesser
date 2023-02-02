# Localstorage assignment
In this assignment we will be practicing the use of storage API. 

We would like to:
 - Get data from an API 
 - Save and get data from localstorage 


Let's get started!

## 1. Getting started
Take a look at the project structure. We would like to build an app that shows us a random catfact every time we click on the button 'fetch a new cat fact'. 

We will be using the API https://catfact.ninja/fact, to get our supply of random cat facts. 

Next we want to store every catfact we fetched into an array in localstorage.

### 1.1 Starting the project 
Open the project using live server. Notice the layout.

### 1.2 Visit the API endpoint
Take a look at the api endpoint, notice it returns a JSON string with two keys `fact` and `length`.

> https://catfact.ninja/fact 

## 2. Fetching the cat fact
First of all we would like to get access to our data. let's start off with fetching for cat facts.

### 2.1 Adding eventlistener to the button
Add an eventlistener to the button with id `btn-cat-fact` that's listening for a `click` event.


### 2.2 Create a getRandomFact() function
Next we will create our `getRandomFact()` function. This function will:
-  make a fetch request to `https://catfact.ninja/fact`.
- set the innerText of `paragraph` element with id `latest-fact` to the `response.fact`. 

**HINT:** 

```javascript
 const getRandomFact = async () => {
    //make fetch call 
    //set paragraph to jsonResponse.
 }
```

```javascript
 const res = await fetch('https://catfact.ninja/fact');

const jsonResponse = await res.json();
 
```

### 2.3 Adding cat fact to localstorage 
Improve the function so each fact is added to an array in localstorage. 

- use `JSON.stringify`
- use `JSON.parse`

**HINT:** 

```javascript
    const currentCatFacts = localStorage.getItem('catFactsList');

    if(!currentCatFacts){
        localStorage.setItem('catFactsList', JSON.stringify([jsonResponse.fact]));
    } else {
        const arrCurrentCatFacts = JSON.parse(currentCatFacts);
        arrCurrentCatFacts.push(jsonResposne.fact);
        localStorage.setItem('catFactsList',JSON.stringify(arrCurrentCatFacts));
    }
```


## 3. Display list of cat facts from array localstorage
As a final step we would like to see the history of cat facts. 

### 3.1 Create a function `loadCatFactsFromLocalStorage`.

**HINT:** 

```javascript
 const loadCatFactsFromLocalStorage = () => {
    
 }
```

### 3.2 Getting cat facts from local storage
We can get all cat facts from localstorage. Using `localstorage.getItem('catFactsList')`. We have to use the `JSON.parse` to convert our JSON string to a javascript object. Improve the function to get all the cat facts from localstorage.


**HINT:** 
```javascript
    const currentCatFacts = localStorage.getItem('catFactsList');
    const arrCurrentCatFacts = JSON.parse(currentCatFacts);
```
### 3.3 Create `<li>` for each cat fact.  
Now we have to improve the function so it creates a listitem (`<li>`) for each catfact and add it to the `ul` with id `list-cat-facts`.

If you wish you can also change the ul to a div, apply some custom html inside instead.

> Make sure to remove previously added `<li>` items before you start looping.

**HINT:** 
```javascript
    arrCurrentCatFacts.forEach(element => {
        //empty the <ul> using innerHtml.
        //create li element
        //add it to the unorderd list.
    });
```


## 4 Test your code 
Test if everything works accordingly. Every time a cat fact is fetched it is added to the list in localstorage.

If you want, you can add some additional styling to application. 




