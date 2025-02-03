import React from "react";
import "../BugZeroUnique/Unique.css";
import { GridColumn, Grid, Container, Header, Image } from "semantic-ui-react";

import tick from "../../../Assets/tick.png";

const Step = ({ img, title, desc }) => (
  <GridColumn>
    <div className="ui steps" style={{ display: "block", margin: "auto" }}>
      <div className="step" style={{ padding: "2em" }}>
        <Image src={img} alt="BigCo Inc. logo" size="tiny" />
        <div className="content">
          <div className="title" style={{ color: "white" }}>
            {title}
          </div>
          <div className="description" style={{ color: "white" }}>
            {desc}
          </div>
        </div>
      </div>
    </div>
  </GridColumn>
);

const OfferPage = () => (
  <div
    style={{ padding: "6em 0em", border: "none:", backgroundColor: "#121212" }}
  >
    <Container text>
      <div style={{ fontSize: "30px", color: "white" }}>
        Bug Zero is now offering
      </div>
      <br></br>
    </Container>
    <Grid container doubling columns={3}>
      <Step img={tick} title="Technical Audits " desc="and Remediation" />
      <Step img={tick} title="Policy Audits" desc="and Remediation" />
      <Step img={tick} title="Process Audits" desc="and Remediation" />
      <Step img={tick} title="DSR Audits" desc="and Remediation" />
      <Step img={tick} title="3rd Party Risk" desc="Assessment" />
      <Step img={tick} title="Privacy Red" desc="Teaming" />
    </Grid>
    <br />
    <br />
  </div>
);

export default OfferPage;
