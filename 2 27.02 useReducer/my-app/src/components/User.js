import React, { useReducer, useState } from "react";

export default function User() {
  const initialState = {
    username: "",
    email: "",
    favMovies: [],
  };

  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");

  const reducer = (state, action) => {
    switch (action.type) {
      case "add-name":
        return { ...state, username: nameInput };
      case "add-email":
        return { ...state, email: emailInput };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(state)

  return (
    <div>
      <h3> username: </h3>
      <input type="text" onChange={(e) => setNameInput(e.target.value)} />
      <button onClick={()=> dispatch({type: "add-name" })}>add name</button>
      <h3> email: </h3>
      <input type={"email"} onChange={(e) => setEmailInput(e.target.value)} />
      <button onClick={()=> dispatch({type: "add-email"})}> add email </button>
    </div>
  );
}
