import React, {useEffect} from 'react'

export default function RepeatMessage({message}) {
  
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

  return (
    <div>RepeatMessage</div>
  )
}
