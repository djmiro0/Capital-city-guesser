import React, {useEffect} from 'react'

export default function ExampleComponent() {
  //first parameter = effect function
  //second parameter = array of dependencies
  useEffect(() => {
    console.log("Example component rendered");
  },[])
  //adding the empty dependencylist = execute code on first render

  //adding no dependencylist => Code below = 
//executed on every re-render and first render
//   useEffect(() => {
//     console.log("Example component rendered");
//   }) 

  return (
    <div>ExampleComponent</div>
  )
}
