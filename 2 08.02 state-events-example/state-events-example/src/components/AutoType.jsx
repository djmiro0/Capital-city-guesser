import React, {useState} from 'react'

export default function AutoType() {
  const [currentInput, setCurrentInput] = useState("");  

  return (
    <div>
        <p>{currentInput}</p>
        <input type="text" 
               onChange={(e) => setCurrentInput(e.target.value)}
               className='form-control'
               placeholder='Type something here please...' />
    
    </div>
  )
}
