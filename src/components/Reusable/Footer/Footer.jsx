import React from "react";
import {
  Container,
  Grid,
  Header,
  List,
  Segment,
  Button,
} from "semantic-ui-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBluesky } from "@fortawesome/free-brands-svg-icons";

const Footer = () => (
  <Segment inverted vertical style={{ padding: "5em 0em" }}>
    <Container>
      <Grid divided inverted stackable>
        <Grid.Row>
          <Grid.Column width={3}>
            <Header inverted as="h4" content="About" />
            <List link inverted>
              <List.Item as="a">Contact Us</List.Item>
              <List.Item as="a">About Bug Zero</List.Item>
              <List.Item as="a">Privacy Policy</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as="h4" content="Services" />
            <List link inverted>
              <List.Item as="a">Bug Bounty</List.Item>
              <List.Item as="a">Consulting</List.Item>
              <List.Item as="a">Blog</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={7}>
            <Header as="h4" inverted>
              Bug Zero
            </Header>
            <p>Securing Your Organization, One Cyberspace at a Time.</p>
            <Header as="h4" inverted>
              Email:
            </Header>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=support@bugzero.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              support@bugzero.io
            </a>
          </Grid.Column>
          <Grid.Column
            width={3}
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "4px",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <Button
              circular
              color="facebook"
              icon="facebook"
              style={{ width: 40, height: 40 }}
              href="https://www.facebook.com/bugzero.io/"
              target="_blank"
            />
            <Button
              circular
              color="black"
              icon="x"
              style={{ width: 40, height: 40 }}
              href="https://x.com/BugZero_io"
              target="_blank"
            />
            <Button
              circular
              color="linkedin"
              icon="linkedin"
              style={{ width: 40, height: 40 }}
              href="https://www.linkedin.com/company/bug-zero-io/"
              target="_blank"
            />
            <Button
              circular
              color="youtube"
              icon="youtube"
              style={{ width: 40, height: 40 }}
              href="https://www.youtube.com/@bugzero"
              target="_blank"
            />
            <Button
              circular
              color="blue"
              style={{
                width: 40,
                height: 40,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              href="https://bsky.app/profile/bugzero.bsky.social"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faBluesky}
                style={{
                  fontSize: "1.2em",
                  display: "block",
                }}
              />
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
);

export default Footer;
