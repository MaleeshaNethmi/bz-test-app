import style from "./BannerPage.module.css";
import { Button, Container, Icon } from "semantic-ui-react";

const BannerPage = () => {
  return (
    <div className={style.section_container}>
      <Container>
        <div className={style.text_section}>
          <h2 className={style.text_title}>
            Crowdsource your security testing in a smarter way with Bug Zero
          </h2>
          <div className={style.button_section}>
            <Button
              size="huge"
              color="white"
              style={{
                color: "Black",
                borderRadius: "25px",
              }}
            >
              <span style={{ marginLeft: "10px" }}>
                {" "}
                <a href="/joinwithus" style={{ color: "black" }}>
                  Get Started
                </a>
              </span>
              <Icon name="right arrow" />
            </Button>
            <Button
              size="huge"
              color="white"
              style={{ borderRadius: "25px" }}
              className={style.learnmorebtn}
              inverted
              as="a"
              href="https://blog.bugzero.io/bug-bounties-in-sri-lanka-650f34bd162e"
            >
              <span>Learn More</span>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BannerPage;
