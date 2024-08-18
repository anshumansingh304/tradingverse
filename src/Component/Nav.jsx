import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav
      className="navbar navbar-expand-lg sticky-top"
      style={{
        backgroundColor: "black",
        color: "white",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <div className="container-fluid">
        <Link
          className="navbar-brand"
          to="/"
          style={{ fontWeight: "bolder", color: "white" }}
        >
          Trading{" "}
          <span style={{ color: "red", marginLeft: "-3px" }}>verse</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span
            className="navbar-toggler-icon"
            style={{ fontSize: 35, color: "red" }}
          >
            ......
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul
            className="navbar-nav me-auto mb-2 mb-lg-0"
            style={{ fontWeight: "bold" }}
          >
            <li className="nav-item">
              <Link
                className="nav-link active"
                to="/"
                style={{ color: "white" }}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/courses"
                style={{ color: "white" }}
              >
                Courses
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/analysis"
                style={{ color: "white" }}
              >
                Analysis
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/brokers"
                style={{ color: "white" }}
              >
                Brokers
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
