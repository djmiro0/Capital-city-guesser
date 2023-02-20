import { useState } from "react";

export default function Signup() {
  const [user, setUser] = useState({ username: "", email: "", password: "" });

  return (
    <form>
      <h1>Sign up</h1>
      <h3>Username:</h3>
      <input
        type="text"
        onChange={(e) =>   
          setUser((prev) => ({ ...prev, username: e.target.value }))
        }  
      />
      {/* setUser({...user, username: e.target.value})*/}
    </form>
  );
}
