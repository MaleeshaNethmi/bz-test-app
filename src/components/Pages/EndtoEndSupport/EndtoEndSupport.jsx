import {
  Segment,
  Container,
  Header,
  Grid,
  GridColumn,
} from "semantic-ui-react";
import { Stepper } from "react-form-stepper";
import "./EndtoEndSuppor.css";
import useIsMobile from "../../../components/Reusable/useIsMobile/useIsMobile.js";

const Step = ({ num, title }) => (
  <GridColumn style={{ maxWidth: 300, marginBottom: "1em" }}>
    <div className="ui steps" style={{ display: "block", margin: "auto" }}>
      <div
        className="step step-card"
        style={{ padding: "2em 1em", justifyContent: "center" }}
      >
        <h1 className="step_num">{num}</h1>
        <div className="content" style={{ margin: "auto" }}>
          <div
            className="title title-margin"
            style={{
              textAlign: "center",
              lineHeight: "22px",
              fontSize: "1em",
              color: "#fff",
            }}
          >
            {title}
          </div>
        </div>
      </div>
    </div>
  </GridColumn>
);

const EndtoEndSupport = () => {
  const isMobile = useIsMobile();

  const steps = [
    "Define policy Scope and Rewards",
    "Define Right Tester",
    "Validate and prioratize vulnalabilities",
    "Verify and Intergrate",
  ];

  return (
    <Segment
      style={{
        padding: "6em 0em",
        border: "none",
        backgroundColor: "transparent",
      }}
    >
      <Container text>
        <Header as="h3" style={{ fontSize: "2.5em", color: "white" }}>
          Providing end to end support to every bug bounty program
        </Header>
        <br />
      </Container>
      <Container>
        {isMobile ? (
          <Grid container centered doubling columns={2}>
            {steps.map((text, index) => (
              <Step key={index} num={index + 1} title={text} />
            ))}
          </Grid>
        ) : (
          <Stepper
            style={{ color: "white", fontSize: "1.5em" }}
            steps={steps.map((text) => ({ label: text }))}
          />
        )}
      </Container>
    </Segment>
  );
};

export default EndtoEndSupport;
