import React from "react";
import PropTypes from "prop-types";

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg sticky-top bg-dark">
      <div className="d-flex ">
      <img src="logo.png" width="30" height="30" class="  d-inline-block ms-3 m-auto align-top" alt=""></img>
        
        <a href="index.html" className="navbar-brand ms-5 text-center text-white d-block ">
          {" "}
          <strong>{props.title}</strong>
        </a>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutUs: PropTypes.string.isRequired,
};
// Navbar.defaultProps={
//     title: "Title Here",
//     aboutUs: "About Us here"

// }
export default Navbar;
