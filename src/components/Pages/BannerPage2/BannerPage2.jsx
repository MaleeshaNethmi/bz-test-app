import style from "./BannerPage2.module.css";
import { Button, Container } from "semantic-ui-react";
import BugZeroOffer from "../BugZeroOffer/BugZeroOffer";
import OurServices from "../OurServicesPage/OurServices";

const BannerPage2 = () => {
  return (
    <>
      <>
        {" "}
        <>
          <div className={style.section_container}>
            <Container>
              <div className={style.text_section}>
                <h2 style={{ fontSize: "40px", color: "white" }}>
                  {" "}
                  Work with seasoned expert to defend against evolving threats
                </h2>

                <h1
                  style={{
                    stylepadding: ((5 % 0) % 5) % 0,
                    color: " #f4c700 ",
                    fontFamily: "poppins,sans-serif",
                    fontSize: "90px",
                    fontWeight: "bold",
                  }}
                >
                  Empower your Teams to Defend Against Threats
                </h1>

                <div className={style.button_section}>
                  <Button
                    size="huge"
                    color="#f4c700"
                    style={{
                      color: "Black",
                      borderRadius: "25px",
                      backgroundColor: "#f4c700",
                      marginTop: "60px",
                    }}
                  >
                    <span style={{ marginLeft: "10px" }}>
                      {" "}
                      <a
                        href="mailto:privacy@bugzero.io?subject=Interest%20in%20BugZero%20Services&body=Hello,%20I%20am%20interested%20in%20your%20services.%20Please%20contact%20me%20with%20more%20details."
                        style={{ color: "black", textDecoration: "none" }}
                      >
                        I'm Interested
                      </a>
                    </span>
                  </Button>
                </div>
              </div>
            </Container>
          </div>
        </>
        <BugZeroOffer />
      </>
      <OurServices />
    </>
  );
};

export default BannerPage2;
