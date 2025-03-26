import style from "./BannerPage3.module.css";
import { Button, Container, Icon } from "semantic-ui-react";
import OfferPage from "../OfferPage/OfferPage";
import PDPAPage from "../PDPAPage/PDPAPage";
import OurServices from "../OurServicesPage/OurServices";

const BannerPage3 = () => {
  return (
    <>
      <>
        <>
          {" "}
          <>
            <div className={style.section_container}>
              <Container>
                <div className={style.text_section}>
                  <h2 style={{ fontSize: "40px", color: "white" }}>
                    {" "}
                    Your Data, Our Priority
                  </h2>

                  <h1
                    style={{
                      stylepadding: ((5 % 0) % 5) % 0,
                      color: " white",
                      fontFamily: "poppins,sans-serif",
                      fontSize: "40px",
                      fontWeight: "bold",
                    }}
                  >
                    Expert Consulting and Triagaing
                  </h1>

                  <div className={style.button_section}>
                    <Button
                      size="huge"
                      color="white "
                      style={{
                        color: "Black",
                        borderRadius: "25px",
                        backgroundColor: "white",
                        marginTop: "60px",
                      }}
                    >
                      <span style={{ marginLeft: "10px" }}>
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
          <OfferPage />
        </>
        <PDPAPage />
      </>
      <OurServices />
    </>
  );
};

export default BannerPage3;
