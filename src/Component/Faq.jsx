import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./Ques.css";
export default function Faq() {
  return (
    <>
      {" "}
      <div className="container">
        <Accordion style={{ backgroundColor: "transparent" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            style={{ backgroundColor: "transparent" }}
          >
            <Typography className="Ques">Who should Trade?</Typography>
          </AccordionSummary>
          <AccordionDetails style={{ backgroundColor: "transparent" }}>
            <Typography style={{ backgroundColor: "transparent" }}>
              Trading is not for everyone, but it can be suitable for certain
              individuals depending on their goals, personality traits, and
              financial situation. Here’s who might consider trading:
              <p>Financially Stable Individuals</p>
              <p> Individuals with Analytical Skills</p>
              <p>Disciplined and Emotionally Stable People</p>
              <p> Professionals Looking to Diversify Income Streams</p>
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion style={{ backgroundColor: "transparent" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
            style={{ backgroundColor: "transparent" }}
          >
            <Typography className="Ques">Who we are?</Typography>
          </AccordionSummary>
          <AccordionDetails style={{ backgroundColor: "transparent" }}>
            <Typography style={{ backgroundColor: "transparent" }}>
              We are not SEBI registered and do not offer any buy or sell
              recommendations. Our services are focused solely on providing
              market analysis based on technical analysis.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion style={{ backgroundColor: "transparent" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
            style={{ backgroundColor: "transparent" }}
          >
            <Typography className="Ques">How we will help you?</Typography>
          </AccordionSummary>
          <AccordionDetails style={{ backgroundColor: "transparent" }}>
            <Typography style={{ backgroundColor: "transparent" }}>
              We will provide you with insights based on our best efforts in
              technical analysis. Our analysis is intended solely for
              educational purposes and is not to be considered as buy or sell
              advice. Before making any investment decisions, please consult
              with your registered financial advisor.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
}
