import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "animate.css";
import TrackVisibility from "react-on-screen";

function Skills() {
  const [hasAnimated, setHasAnimated] = useState(false); // Stato per gestire l'animazione

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill">
      <Container>
        <Row>
          <Col>
            <TrackVisibility >
              {({ isVisible }) => {
                // Esegui l'animazione solo la prima volta
                if (isVisible && !hasAnimated) {
                  setHasAnimated(true); // Imposta hasAnimated a true quando il componente diventa visibile
                }
                return (
                  <div className={hasAnimated ? "animate__animated animate__fadeIn animate_slower" : "invisible"}>
                    <div className="skill-bx">
                      <h2>Skills</h2>
                      <p>
                        I am always looking for new inspiration to continue developing my
                        skills.<br />Here are some developed during my journey:
                      </p>
                      <Carousel responsive={responsive} infinite={true} className="skill-slider">
                        <div className="item">
                          <img src={meter1} alt="Skill 1" />
                          <h5>Html</h5>
                        </div>
                        <div className="item">
                          <img src={meter2} alt="Skill 2" />
                          <h5>JavaScript</h5>
                        </div>
                        <div className="item">
                          <img src={meter3} alt="Skill 3" />
                          <h5>CSS</h5>
                        </div>
                        <div className="item">
                          <img src={meter2} alt="Skill 4" />
                          <h5>Php</h5>
                        </div>
                        <div className="item">
                          <img src={meter3} alt="Skill 5" />
                          <h5>Laravel</h5>
                        </div>
                      </Carousel>
                    </div>
                  </div>
                );
              }}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="Background Design" />
    </section>
  );
}

export default Skills;
