import React from "react";
import { Button, Container, Icon } from "semantic-ui-react";

const PDPAPage = () => {
  return (
    <div
      style={{
        backgroundColor: "#121212",
      }}
    >
      <h1
        style={{
          marginBottom: "60px",
          color: "white ",
          fontSize: "40px",
        }}
      >
        What is PDPA Compliance?
      </h1>
      <div
        style={{
          color: "white",
          fontSize: "23px",
          textAlign: "center",
          lineHeight: "2px",
        }}
      >
        <p>
          PDPA Compliance refers to adhering to Sri Lanka's Personal Data
          <p>
            Protection Act, which ensures the lawful and transparent handling of
            <p>personal data while safeguarding individual privacy.</p>
          </p>{" "}
        </p>
        <p>
          Bug Zero helps businesses achieve compliance by providing expert
          <p>
            consulting on implementing data protection measures managing data
            <p>
              responsibly,and fulfilling legal obligations as Controllers or
              <p> Processors</p>{" "}
            </p>
          </p>
        </p>
        <p>
          With Bug Zero guidance,you can build trust,avoid penalties,
          <p>and unlock new oppatunities in the digital economy</p>
        </p>
      </div>
    </div>
  );
};

export default PDPAPage;
