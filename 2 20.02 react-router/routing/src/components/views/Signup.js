import { useState } from "react";

export default function Signup() {
  const [user, setUser] = useState({ username: "", email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  return (
    <form
      onSubmit={handleSubmit}
    >
      <h1>Sign up</h1>
      <h3>Username:</h3>
      <input
        required
        type="text"
        onChange={
          (e) => setUser((prev) => ({ ...prev, username: e.target.value }))
          //similar to: setUser({...user, username: e.target.value})
        }
      />
      <h3>Email:</h3>
      <input
        required
        type="email"
        onChange={(e) =>
          setUser((prev) => ({ ...prev, email: e.target.value }))
        }
      />
      <h3>Password:</h3>
      <input
        required
        type="password"
        onChange={(e) =>
          setUser((prev) => ({ ...prev, password: e.target.value }))
        }
      />
      <button> Signup </button>
    </form>
  );
}
