import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default class NavBar extends Component {
  render() {
    return (
      <nav className={`navbar navbar-expand-sm bg-light navbar-light`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Class Base
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/android">
                  AndroidNews
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/crypto">
                Crypto
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blog">
                  Blogs
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
