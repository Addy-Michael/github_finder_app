import React, { Component } from "react";
import PropTypes from "prop-types";

const Navbar = ({ icon, title }) => {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <i className={icon}></i>
        {title}
      </h1>
    </nav>
  );
};

// passing static props
Navbar.defaultProps = {
  title: "Github Finder",
  icon: "fab fa-github",
};

// Protypes
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
