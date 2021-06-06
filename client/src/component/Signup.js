import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
function Signup(props) {
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
        "http://localhost:7000/user/register",
        data,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "JWT fefege...",
          },
        }
      );

      console.log("signup res", res);
      <Redirect to="/signin" />;
    } catch (err) {
      console.log("Error in signup", err);
    }
  };

  if (localStorage.getItem("token")) {
    return <Redirect to="/" />;
  }
  return (
    <div>
      Signup
      <form onSubmit={handleSubmit}>
        <h1>SignUp</h1>

        <div className="form-group">
          <label>Email</label>
          <input
            value={email}
            type="email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            value={password}
            type="password"
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="btn btn-primary">SignUp</button>
      </form>
    </div>
  );
}

export default Signup;
