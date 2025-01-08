import style from "../BannerPage/BannerPage.module.css";
import { Button, Container, Icon } from "semantic-ui-react";

const BannerPage2 = () => {
  return (
    <div className={style.section_container}>
      <Container>
        <div className={style.text_section}>
          <h2 className={style.text_title}>
            Empower your teams to defend against threats
          </h2>
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
  );
};

export default BannerPage2;
