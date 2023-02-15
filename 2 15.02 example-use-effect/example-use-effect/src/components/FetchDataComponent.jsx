import React, {useState, useEffect} from 'react'

export default function FetchDataComponent() {
  const[randomDogImage, setRandomDogImage] = useState(null);

  const loadRandomDog = async () => {
    const response = await fetch('https://random.dog/woof.json'); //returns response object
    const fetchedDog = await response.json(); //converts JSON into Javascript Object
    setRandomDogImage(fetchedDog.url);
  }
  //this useEffect is called on first render of component
  useEffect(() => {
    loadRandomDog();
  },[])

  return (
    <div>
        <div>FetchDataComponent</div>
        {randomDogImage ? <img src={randomDogImage} alt="Dogimage" height={300} /> : null}
    </div>
  )
}
