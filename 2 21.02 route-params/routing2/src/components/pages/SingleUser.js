import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function SingleUser() {
  let { id } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [id]);
  console.log(user);
  return (
    <div>
      <h1> {user.username} </h1>
      <h3>{user.name} </h3>
      <p> {user.email} </p>
    </div>
  );
}
