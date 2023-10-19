import React, { Component } from "react";
import NavBar from "./components/NavBar";
import "./App.css";
import { Outlet } from "react-router-dom";

export default class App extends Component {

  render() {
    return (
      <>
        <NavBar />
        <div className="container mt-5">
          <Outlet />
        </div>
      </>
    );
  }
}
