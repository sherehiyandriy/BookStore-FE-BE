import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <h1 className="navbar-header">Adrian's Book Collection</h1>
      <div className="navbar-links">
        <NavLink
          exact
          className="navbar-link"
          activeClassName="selected"
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className="navbar-link"
          activeClassName="selected"
          to="/add-book"
        >
          Add a Book
        </NavLink>
      </div>
    </div>
  );
}
