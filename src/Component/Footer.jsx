import React from "react";
import Social from "./Social";
import "./Footer.css"; 

export default function Footer() {
  return (
    <div className="footer-container">
      <footer className="text-center text-lg-start bg-body-tertiary text-muted">
        <div className="footer-content d-flex flex-column flex-md-row justify-content-evenly align-items-start p-4">
          <div className="follow-us mb-4 mb-md-0">
            <h6 className="text-uppercase fw-bold mb-4">
              Follow us{" "}
              <span>
                Trading <span style={{ color: "red" }}>verse</span>
              </span>
            </h6>
            <Social />
          </div>
          <div className="contact">
            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
            <p
              style={{
                color: "white",
                fontWeight: "bolder",
                textDecoration: "none",
              }}
            >
              <i className="fas fa-home me-3"></i> Delhi, India
            </p>
            <p>
              <i className="fas fa-envelope me-3"></i>
              <a
                href="mailto:learning@tradingverse.in"
                className="text"
                style={{
                  color: "white",
                  fontWeight: "bolder",
                  textDecoration: "none",
                }}
              >
                learning@tradingverse.in
              </a>
            </p>
            <p>
              <i className="fas fa-phone me-3"></i>
              <a
                href="https://wa.me/919450516403"
                className="text"
                style={{
                  color: "white",
                  fontWeight: "bolder",
                  textDecoration: "none",
                }}
              >
                +91 9450516403 (WhatsApp)
              </a>
            </p>
            <p>
              <i className="fas fa-print me-3"></i>
              <a
                href="tel:+919450516403"
                className="text"
                style={{
                  color: "white",
                  fontWeight: "bolder",
                  textDecoration: "none",
                }}
              >
                +91 9450516403
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
