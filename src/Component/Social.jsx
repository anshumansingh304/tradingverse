import React from "react";
import "./Social.css";

export default function Social() {
  return (
    <div className="container">
      <div className="card">
        <div className="boxshadow"></div>
        <div className="main">
          <div className="top"></div>
          <div className="left side"></div>
          <div className="right side"></div>
          <div
            className="title"
            style={{ backgroundColor: "transparent", fontSize: "20px" }}
          >
            Follow us
          </div>
          <div className="button-container">
            <button className="button">
              <a
                href="https://www.instagram.com/tradin_verse/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="svg"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke="green"
                  fill="none"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
            </button>
            <button className="button">
              <a
                href="https://x.com/tradiologyy"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="svg twitter"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  width="24"
                  fill="green"
                  viewBox="0 0 512 512"
                >
                  <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                </svg>
              </a>
            </button>
            <button className="button">
              <a
                href="https://www.youtube.com/@tradingversee"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="svg"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="red"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ backgroundColor: "transparent" }}
                >
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.96-1.96C18.88 4 12 4 12 4s-6.88 0-8.58.46a2.78 2.78 0 0 0-1.96 1.96 29.26 29.26 0 0 0-.46 5.54 29.26 29.26 0 0 0 .46 5.54 2.78 2.78 0 0 0 1.96 1.96c1.7.46 8.58.46 8.58.46s6.88 0 8.58-.46a2.78 2.78 0 0 0 1.96-1.96 29.26 29.26 0 0 0 .46-5.54 29.26 29.26 0 0 0-.46-5.54zM9.75 15.02V9.01l6 3.01-6 3z"></path>
                </svg>
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
