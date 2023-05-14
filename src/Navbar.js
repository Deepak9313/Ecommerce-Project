import React from "react";
import Card from "./Card";
import "./Navbar.css";
import { Outlet, Link } from "react-router-dom";
let dark = document.getElementById("dark");
function darkmode() {
  var element = document.body;
  element.classList.toggle("dark");
}
const Navbar = (props) => {
  return (<>
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Home</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/categories">Categories</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
          </ul>
          <div className="just">
          <form className="d-flex" role="search">
            <input className="form1" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn1 btn-outline-success" type="submit"><span className="material-symbols-outlined">
search
</span></button>
          </form>
          <button className="btn22">
          <span className="material-symbols-outlined a2">
            person
          </span>
          </button>
          <button className="btn22" id="dark" onClick={darkmode}>
          <span className="material-symbols-outlined a2">
            dark_mode
          </span>
          </button>
          </div>
        </div>
      </div>
    </nav>
    <Outlet />
  </>
  );
}
export default Navbar;