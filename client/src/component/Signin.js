import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
function Signin(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("firing signup");
    //
    try {
      const data = {
        email,
        password,
      };
      const res = await axios.post(
        "http://localhost:7000/user/create-session",
        data,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "JWT fefege...",
          },
        }
      );

      console.log("signup res", res);
      const token = res.data.data.token;
      localStorage.setItem("token", token);
      <Redirect to="/" />;
    } catch (err) {
      console.log("Error in signup", err);
    }
  };
  if (localStorage.getItem("token")) {
    return <Redirect to="/" />;
  }
  return (
    <div>
      signin
      <form onSubmit={handleSubmit}>
        <h1>SignIn</h1>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="btn btn-primary">SignIn</button>
      </form>
    </div>
  );
}

export default Signin;
