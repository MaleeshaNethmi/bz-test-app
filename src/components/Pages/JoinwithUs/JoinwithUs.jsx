import React from "react";
import "semantic-ui-css/semantic.min.css";
import Hacker from "../../../Assets/Hacker.jpg";
import Organization from "../../../Assets/Organization.jpg";
import {
  Divider,
  CardMeta,
  CardHeader,
  CardContent,
  Card,
  Icon,
} from "semantic-ui-react";

const JoinwithUs = () => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-evenly",
      position: "relative",
    }}
  >
    <Card style={{ marginTop: "20px", marginBottom: "0" }}>
      <img src={Hacker} style={{ height: "225px" }} />
      <CardContent>
        <CardHeader>Join as a Hacker</CardHeader>
        <CardMeta>Put your tech skills to good use.</CardMeta>
      </CardContent>
      <CardContent extra>
        <div
          className="ui fluid large teal submit button"
          style={{ marginTop: "10px", backgroundColor: "#f4c700" }}
        >
          Sign Up
        </div>
      </CardContent>
    </Card>

    <Divider vertical>Or</Divider>
    <Card style={{ marginTop: "20px" }}>
      <img src={Organization} style={{ height: "225px" }} />
      <CardContent>
        <CardHeader>Create a Program</CardHeader>
        <CardMeta>Make your organisation safe</CardMeta>
      </CardContent>
      <CardContent extra>
        <div
          className="ui fluid large teal submit button"
          style={{ marginTop: "10px", backgroundColor: "#f4c700" }}
        >
          Sign Up
        </div>
      </CardContent>
    </Card>
  </div>
);

export default JoinwithUs;
