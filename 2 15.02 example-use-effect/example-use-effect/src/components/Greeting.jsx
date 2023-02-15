import React, {useEffect} from 'react'

export default function Greeting({name}) {
  //useEffect listens for dependency name 
  //when the name changes --> produces side-effect = changing document.title
  useEffect(() => {
    console.log("The greeting component rendered");
    document.title = `Hello ${name}`; //this is a side-effect
  }, [name])

 
    
  return (
    <div>Hello, welcome {name}!</div>
  )
}
