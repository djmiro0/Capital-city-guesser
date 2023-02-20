import { useState, useEffect } from "react";

export default function Home() {
  const [posts, setPosts] = useState([]);

 useEffect(()=>{
  fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => setPosts(data));

 }, [])
    
 

  return (
    <div>
      {posts.map((item,i) => (
        <div
        key={i}
          style={{ padding: "10px", margin: "5px", border: "1px solid black" }}
        >
          <h3> {item.title} </h3> <p> {item.body} </p>
        </div>
      ))}
    </div>
  );
}
