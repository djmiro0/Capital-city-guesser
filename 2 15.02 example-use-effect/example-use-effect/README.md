# UseEffect Example

## Get Started

-  `npm i`

- `npm start`

## Project Structure
There are five components. More info for each component see below.


## UseEffect structure
```javascript
  useEffect(() => {
    //logic we want to execute 
    //when component unmounts/disappears => clean up the timer
    return () => {
        //instructions to execute when umounting component or when dependency value changes. e.g. cleanup of timer
    }

  }, [])//[] = allows us to add dependencies. (if empty effect is only called on first render)

```

### ExampleComponent.jsx
  The example component contains a useEffect which prints a console.log on first render
### FetchDataComponent.jsx
  The fetchdata component fetches the data when component renders for the first time.

### Greeting.jsx
  Greeting.jsx contains a useEffect which has a dependency `name`. Every time the name changes the effect function will be called. 

### RepeatMessage.jsx
  RepeatMessage.jsx contains a useEffect which has a dependency `message`. Every time the message changes the effect function will be called. This results in a new timer, that's created, printing the name to the console. 
  When component unmounts or dependency value changes, the return function will clean up the timer using `clearInterval`.
  
  ```javascript
  useEffect(() => {
    const id = setInterval(() => {
        console.log(message);
    },2000)
    //when component unmounts clean up the timer.
    //when the dependency value changes clean the timer and create a new one.
    return () => {
       clearInterval(id);
    }
  },[message])
```

### TimerComponent.jsx
The timercomponent also contains a timer which executes a function every 1000 ms and increases the time state value by one. 

Return function also cleans up the timer when component unmounts. 

```javascript
  useEffect(() => {
    //creates one timer which will execute a function every second.
    const id = setInterval(() => {
        setTime(time => time + 1);
    },1000)
    
    //when component unmounts/disappears => clean up the timer
    return () => {
        clearInterval(id);
    }

  }, [])

```



