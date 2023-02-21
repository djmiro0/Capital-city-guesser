import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function Home() {
  const [users, setUsers] = useState([]);

  console.log(users);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      {users.map((x) => (
        <div
          key={x.id}
          style={{ padding: "20px", margin: "10px", border: "1px solid black" }}
        >
          <NavLink className="user-card" to={`/user/${x.id}`}>
            <h1> {x.username} </h1> <h3> {x.name} </h3>
          </NavLink>
        </div>
      ))}
    </div>
  );
}
