import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./Component/Nav";
import Courses from "./Component/Courses"; // Import your Courses component
import Analysis from "./Component/Analysis"; // Import your Analysis component
import Ticker from "./Component/Ticker";
import Brokers from "./Component/Brokers";
import MarketChart from "./Component/MarketChart";
import Fact from "./Component/Fact";
import IndianMarket from "./Component/IndianMarket";
import Trade from "./Component/Trade";
import Faq from "./Component/Faq";
import Newslater from "./Component/Newslater";
//import Social from "./Component/Social";
import Footer from "./Component/Footer";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Ticker />
      <br />
      <br />
      <div className="slang">
        <p>
          In this business, if you’re good, you’re right six times out of ten.
          You’re never going to be right nine times out of ten. <br />
          <figcaption className="blockquote-footer" style={{ marginTop: 5 }}>
            Peter Lynch-
          </figcaption>
        </p>
      </div>
      <Routes>
        <Route path="/" />
        <Route path="/courses" element={<Courses />} />
        <Route path="/analysis" element={<Analysis />} />
        <Route path="/Brokers" element={<Brokers />} />
      </Routes>
      <MarketChart />
      <br />
      <br />
      <br /> <br />
      <Fact />
      <IndianMarket />
      <Trade />
      <div className="container">
        <Faq />
      </div>
      <Newslater />
      <hr />
      <Footer />
      <br />
      <br />
    </BrowserRouter>
  );
}

export default App;
