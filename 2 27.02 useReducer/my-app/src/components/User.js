import React, { useReducer, useContext } from "react";
import { UserContext } from "./context/UserContext";

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

  //step 4: extracting the needed data from the global state:
  const { greeting } = useContext(UserContext);

  console.log(greeting);

  return (
    <div>
      <h3> username: </h3>
      <input
        type="text"
        onChange={(e) =>
          dispatch({ type: "add-name", payload: e.target.value })
        }
      />

      <h3> email: </h3>
      <input
        type={"email"}
        onChange={(e) =>
          dispatch({ type: "add-email", payload: e.target.value })
        }
      />
    </div>
  );
}
