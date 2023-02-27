import React, { useReducer } from "react";

export default function User() {
  const initialState = {
    username: "",
    email: "",
    favMovies: [],
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "add-name":
        return { ...state, username: action.payload };
      case "add-email":
        return { ...state, email: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(state)

  return (
    <div>
      <h3> username: </h3>
      <input type="text" onChange={(e) => dispatch({type: "add-name", payload: e.target.value})} />
     
      <h3> email: </h3>
      <input type={"email"} onChange={(e) => dispatch({type: "add-email", payload: e.target.value})}  />
      
    </div>
  );
}
