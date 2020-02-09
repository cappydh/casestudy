import React from "react";

import "../styles/Header.css";
import logo from "../images/kariyer_logo.png";

class Header extends React.Component {
  render() {
    return (
      <div className="header sticky-top">
        <nav className="nav">
          <ul className="nav">
            <a className="header-logo" href="/home">
              <img src={logo} href="/home" alt="logo" width="160" height="50" />
            </a>
            <li className="nav-item">
              <a className="nav-link" href="/home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/joblist">
                Job List
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
