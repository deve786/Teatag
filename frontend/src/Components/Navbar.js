import React from "react";
import { Link, useNavigate } from "react-router-dom";
function Navbar() {

  const navigate=useNavigate
  const handleLogout=()=>{
    localStorage.removeItem('authToken');
    navigate('/')
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark ">
        <div className="container-fluid ">
          <Link className="navbar-brand text-light fs-1" to="/">
            TeaTag
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto ">
              <li className="nav-item">
                <Link
                  className="nav-link active text-light"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              {(localStorage.getItem('authToken'))?
              <Link className="nav-link text-light" to="/">
              My Orders
            </Link>:""
              }
            </ul>
            {(!localStorage.getItem('authToken'))?
                <div className="d-flex ">
                <Link className="nav-link text-light" to="login">
                  Login
                </Link>
  
                <Link className="nav-link text-light" to="signup">
                  Sign Up
                </Link>
              </div>:<div className="d-flex">
              <Link className="nav-link text-light" to='cart'>
              Cart
            </Link>
              <Link className="nav-link text-light" onClick={handleLogout}>
                  Logout
                </Link></div>
            }

            
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
