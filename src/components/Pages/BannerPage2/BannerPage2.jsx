import style from "../BannerPage/BannerPage.module.css";
import { Button, Container, Icon } from "semantic-ui-react";
import BugZeroOffer from "../BugZeroOffer/BugZeroOffer";
import BugZeroTest from "../BugZeroOffer/BugZeroTest";

const BannerPage2 = () => {
  return (
    <>
      {" "}
      <div className={style.section_container}>
        <Container>
          <div className={style.text_section}>
            <h1 className={style.text_title}>
              Empower your teams to defend against threats
            </h1>
            <div className={style.button_section}>
              <Button
                size="huge"
                color="yellow"
                style={{
                  color: "Black",
                  borderRadius: "25px",
                  backgroundColor: "#f4c700",
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
      <BugZeroOffer />
    </>
  );
};

export default BannerPage2;
