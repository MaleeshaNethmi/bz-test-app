import React, { useEffect, useState } from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import {
  CardHeader,
  CardGroup,
  CardDescription,
  CardContent,
  Button,
  Card,
} from "semantic-ui-react";

import "./OurServices.css";

const CardX = (props) => {
  return (
    <Card
      style={{
        height: "420px",
        width: "400px",
        backgroundColor: "#212121",
        margin: "15px 50px",
        border: "2.5px solid #f4c700",
        borderRadius: "15px",
      }}
    >
      <CardContent
        style={{
          display: "flex",
          alignItems: "flex-start",
          flexDirection: "column",
        }}
      >
        <CardHeader
          style={{ marginTop: "5px", color: "#f4c700 ", fontSize: "40px" }}
        >
          <IoMdCheckmarkCircleOutline style={{ color: "#f4c700" }} />
          <br />
          {props.name}
        </CardHeader>
        <CardDescription
          style={{ color: "white", fontSize: "20px", justifyContent: "left" }}
        >
          {props.message}
        </CardDescription>
      </CardContent>
      <CardContent extra>
        <div className="ui two buttons">
          <Button
            size="huge"
            style={{
              backgroundColor: " #f4c700 ",
              borderRadius: "35px",
            }}
          >
            Learn More
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

const OurServices = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div>
      <div
        style={{
          padding: "6em 0em",
          border: "none:",
          backgroundColor: "#121212",
        }}
      >
        <h1
          style={{
            marginBottom: "80px",
            color: "  #f4c700 ",
            fontSize: "40px",
          }}
        >
          All in one Vulnerability Management Platform
        </h1>
        <div style={{ color: "white", marginBottom: "50px", fontSize: "30px" }}>
          Our Services Includes{" "}
        </div>

        <CardGroup style={{ display: "flex", justifyContent: "center" }}>
          <CardX
            name={"Bug Bounty"}
            message={
              "Bug Zero connects ethical hackrs with organizations,allowing them to identify and fix system vulnerabilities."
            }
          />
          <CardX
            name={"Consultancy & Triaging"}
            message={
              "Patner with security experts to assess vulnerabilities, prioritize risks,and streamline the resolution process effectively."
            }
          />
          <CardX
            name={"Cybersecurity Training"}
            message={
              "Equip teams with essential skills and knowledge to defend against evolving threats and maintain robust security "
            }
          />
        </CardGroup>
      </div>
    </div>
  );
};

export default OurServices;
