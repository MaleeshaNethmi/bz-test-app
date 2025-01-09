import React from "react";
import "../BugZeroUnique/Unique.css";
import { GridColumn, Grid, Container, Header, Image } from "semantic-ui-react";

import clock from "../../../Assets/clock.png";
import equalizer from "../../../Assets/equalizer.png";
import iteration from "../../../Assets/iteration.png";

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

const BugZeroOffer = () => (
  <div
    style={{ padding: "6em 0em", border: "none:", backgroundColor: "#212121" }}
  >
    <Container text>
      <Header as="h3" style={{ fontSize: "1.5em", color: "white" }}>
        Bug Zero is now offering
      </Header>
      <br></br>
    </Container>
    <Grid container doubling columns={3}>
      <Step img={clock} title="Incident Response Mastery" />
      <Step img={equalizer} title="Secure Coding Practices" />
      <Step img={iteration} title="Threat Awareness and Mitigation" />
    </Grid>
    <br />
    <br />
  </div>
);

export default BugZeroOffer;
