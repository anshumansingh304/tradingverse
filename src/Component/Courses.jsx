import React from "react";
import "./Course.css"; // Assuming you will use external CSS for styling

export default function Courses() {
  return (
    <div>
      <section id="table">
        <div className="comparison-table">
          <div className="header">
            <h4>
              The Edge of <span className="grad">Trading</span>{" "}
              <span className="tech" style={{ color: "red" }}>
                verse
              </span>
            </h4>
          </div>

          <div className="rowT transparent">
            <div className="feature"></div>
            <div className="status status-header">Monthly</div>
            <div className="status status-header">Quarterly</div>
            <div className="status status-header">Annually</div>
          </div>

          <div className="rowT">
            <div className="feature">Live market support</div>
            <div className="status">
              <img
                src="https://www.shutterstock.com/shutterstock/videos/11968325/thumb/5.jpg?ip=x480"
                alt="Check"
              />
            </div>
            <div className="status">
              <img
                src="https://www.shutterstock.com/shutterstock/videos/11968325/thumb/5.jpg?ip=x480"
                alt="Check"
              />
            </div>
            <div className="status">
              <img
                src="https://www.shutterstock.com/shutterstock/videos/11968325/thumb/5.jpg?ip=x480"
                alt="Check"
              />
            </div>
          </div>

          <div className="rowT">
            <div className="feature">Educational trade support</div>
            <div className="status">
              <img
                src="https://www.shutterstock.com/shutterstock/videos/11968325/thumb/5.jpg?ip=x480"
                alt="Check"
              />
            </div>
            <div className="status">
              <img
                src="https://www.shutterstock.com/shutterstock/videos/11968325/thumb/5.jpg?ip=x480"
                alt="Check"
              />
            </div>
            <div className="status">
              <img
                src="https://www.shutterstock.com/shutterstock/videos/11968325/thumb/5.jpg?ip=x480"
                alt="Check"
              />
            </div>
          </div>

          <div className="rowT">
            <div className="feature">Fastest 1:1 doubt support</div>
            <div className="status">
              <img
                src="https://www.shutterstock.com/shutterstock/videos/11968325/thumb/5.jpg?ip=x480"
                alt="Check"
              />
            </div>
            <div className="status">
              <img
                src="https://www.shutterstock.com/shutterstock/videos/11968325/thumb/5.jpg?ip=x480"
                alt="Check"
              />
            </div>
            <div className="status">
              <img
                src="https://www.shutterstock.com/shutterstock/videos/11968325/thumb/5.jpg?ip=x480"
                alt="Check"
              />
            </div>
          </div>

          <div className="rowT">
            <div className="feature">Post market support</div>
            <div className="status">
              <img
                src="https://www.shutterstock.com/shutterstock/videos/11968325/thumb/5.jpg?ip=x480"
                alt="Check"
              />
            </div>
            <div className="status">
              <img
                src="https://www.shutterstock.com/shutterstock/videos/11968325/thumb/5.jpg?ip=x480"
                alt="Check"
              />
            </div>
            <div className="status">
              <img
                src="https://www.shutterstock.com/shutterstock/videos/11968325/thumb/5.jpg?ip=x480"
                alt="Check"
              />
            </div>
          </div>

          <div className="rowT">
            <div className="feature">Price</div>
            <div className="status">
              <p>₹3999/-</p>
            </div>
            <div className="status">
              <p>₹9999/-</p>
            </div>
            <div className="status">
              <p>₹16999/-</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
