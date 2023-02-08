import React, {useState} from 'react'

export default function CheckComponent() {
  const [isChecked, setIsChecked] = useState(false);
 
  return (
    <div>
        <input type="checkbox" onChange={(e) => setIsChecked(e.target.checked)} />
         {/* ternary expression condition ? true : false */}
         {
           isChecked ? (<div className='alert alert-danger' role="alert">A simple danger alert! Be careful</div>) : null 
         }
         
    </div>
  )
}
