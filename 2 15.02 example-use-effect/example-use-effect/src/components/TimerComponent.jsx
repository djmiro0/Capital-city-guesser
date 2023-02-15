import React, {useState, useEffect} from 'react'

export default function TimerComponent() {
  const [time, setTime] = useState(0);

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

  return (
    <div>{time} seconds went by.</div>
  )
}
