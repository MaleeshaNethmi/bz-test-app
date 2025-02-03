import style from "../BannerPage3/BannerPage3.module.css";
import { Button, Container, Icon } from "semantic-ui-react";
import OfferPage from "../OfferPage/OfferPage";
import PDPAPage from "../PDPAPage/PDPAPage";
import OurServices from "../OurServicesPage/OurServices";

const BannerPage4 = () => {
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
                    Harnes the power of trusted ethical hackers to secure your
                    systems
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
                    Collabaration Fuels Protection
                  </h1>

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
                        <a
                          href={`${process.env.PUBLIC_URL}/joinwithus`}
                          style={{ color: "black" }}
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

export default BannerPage4;
