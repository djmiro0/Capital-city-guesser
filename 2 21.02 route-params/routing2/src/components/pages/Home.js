import { useState, useEffect } from "react";

export default function Home() {
  const [users, setUsers] = useState([]);

  console.log(users)

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
      .then((res) => res.json())
      .then((data) => console.log(data));
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      {users.map((x) => (
        <div key={x.id}
          style={{ padding: "20px", margin: "10px", border: "1px solid black" }} 
        >
          <h1> {x.username} </h1> <h3> {x.name} </h3>
        </div>
      ))}
    </div>
  );
}
