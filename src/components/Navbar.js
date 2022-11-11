import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="/about">
                  {props.aboutText}
                </a>
              </li> */}
            </ul>
            <form className="d-flex" role="search">
              <div className={`form-check form-switch text-${props.mode === 'light' ? 'Dark':'light'}`}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckDefault"
                  onClick ={props.toggleMode}
                />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                  Enable Dark Mode
                </label>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

// This is the part where I am setting some values to the props or properties i.e. the props has to be string.
// Ye batate hai jo prop hai uska type kya hai?
// isRequired matlab usme kuch na kuch value dalna padega.
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};

// This is the default props or properties i.e. if the values are not specified then it will take default values from below.
// Iska matlab hai kaun si values use kare agar kuch pass nhi kiya hai toh
Navbar.defaultProps = {
  title: "Set title here",
  aboutText: "About",
};
