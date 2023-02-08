import React, {useState} from 'react'

export default function RandomNumber() {
 //declare the state and set it default to 0 
 const [number, setNumber] = useState(0); //STATE

 //LOGIC
 const clickHandler = (event) => {
    console.log("Hello I am a click handler", event);
    const number = Math.floor(Math.random() * 100);
    //setting the state to a new value.
    setNumber(number);
 }
 //VIEW / JSX / HTML 
  return (
    <div>
        <h1>{number}</h1>
        <button className='btn btn-primary' onClick={clickHandler} >Show a random number</button>
    </div>
  )
}
