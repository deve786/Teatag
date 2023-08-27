import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    console.log("s");
    e.preventDefault();
    try {
      console.log("sadasdas");
      const response = await axios.post("http://localhost:5000/api/loginuser", {
        email,
        password,
      });
      console.log("first");
      console.log("Successfully LoggedIn");
      const data = await response.data;
      console.log(data);
      if (data.success) {
        localStorage.setItem("authToken", data.authToken);
        console.log(localStorage.getItem("authToken"));
        navigate("/");
      }
    } catch (error) {
      console.log("Error in Registering", error);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Log In
        </button>
        <Link to="/signup" className="m-3 btn btn-danger">
          New User
        </Link>
      </form>
    </div>
  );
}

export default Login;
