import React from "react";
import { Link, BrowserRouter as Route } from "react-router-dom";
function navbar(props) {
  return (
    <div
      style={{
        backgroundColor: "blue",
        height: "60px",
        width: "100",
        color: "white",
      }}
    >
      <div style={{ display: "inline-block", float: "left" }}>Home</div>
      <div style={{ display: "inline-block", float: "right" }}>
        <Link to="/signin">
          <span>Login</span>
        </Link>
        <Link to="/signup">
          <span>Signup</span>
        </Link>
      </div>
    </div>
  );
}

export default navbar;
