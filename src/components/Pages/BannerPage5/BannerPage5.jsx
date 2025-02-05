import style from "../BannerPage3/BannerPage3.module.css";
import { Button, Container, Icon } from "semantic-ui-react";
import OfferPage from "../OfferPage/OfferPage";
import PDPAPage from "../PDPAPage/PDPAPage";
import OurServices from "../OurServicesPage/OurServices";

const BannerPage5 = () => {
  return (
    <>
      <>
        <>
          {" "}
          <>
            <div className={style.section_container}>
              <Container>
                <div className={style.text_section}>
                  <h1
                    style={{
                      stylepadding: ((5 % 0) % 5) % 0,
                      color: " #f4c700 ",
                      fontFamily: "poppins,sans-serif",
                      fontSize: "90px",
                      fontWeight: "bold",
                    }}
                  >
                    Together, We Build Safer Systems
                  </h1>

                  <h2 style={{ fontSize: "40px", color: "white" }}>
                    {" "}
                    Identify,fix,and prevent risks with tailored{" "}
                    <p>Bug Bounty Programs and expert consultationss</p>
                  </h2>

                  <div className={style.button_section}>
                    <Button
                      size="huge"
                      color=" #f4c700 "
                      style={{
                        color: "Black",
                        borderRadius: "25px",
                        backgroundColor: "#f4c700",
                        marginTop: "60px",
                      }}
                    >
                      <span style={{ marginLeft: "10px" }}>
                        {" "}
                        <a href="#/joinwithus" style={{ color: "black" }}>
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

export default BannerPage5;
