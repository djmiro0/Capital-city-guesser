import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <NavLink to="/"> Home </NavLink>
      <NavLink to="/about"> About </NavLink>
      <NavLink to="/signup"> Sing up </NavLink>
      <NavLink to="/login"> Login </NavLink>
    </div>
  );
}
