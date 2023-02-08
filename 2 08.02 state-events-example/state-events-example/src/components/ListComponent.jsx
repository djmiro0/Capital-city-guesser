import React, {useState} from 'react'

export default function ListComponent() {
  const [listItems, setListItems] = useState([]);

  const keyDownHandler = (event) => {
    console.log("event", event);
    if(event.key === 'Enter'){
        console.log("We want to add an item");
        //update the state with a new array.
        setListItems([...listItems, event.target.value]);

        event.target.value = "";
    }
  }

  return (
    <>
        <h2>Type something and hit enter</h2>
        <input type="text"
               className='form-control' 
               placeholder='Please enter an item...'
               onKeyDown={keyDownHandler}
               />

        <ul>
            {listItems.map((item, i) =>  <li key={i}>{item}</li>)}
        </ul>
    </>
  )
}
