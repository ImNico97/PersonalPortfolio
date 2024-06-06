import { Container, Row, Col } from "react-bootstrap";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Skills() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
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
      <section className="skill" id="skills">
        <Container>
          <Row>
            <Col>
              <div className="skill-bx wow zoomIn">
                <h2>Skills</h2>
                <p>
                  I am always looking for new inspiration to continue developing my
                  skills.<br/>Here are some developed during my studies and projects.
                </p>
                <Carousel infinite={true} responsive={responsive} infiniteLoop={true} className="skill-slider">
                  <div className="item">
                    <img src={meter1} alt="Image" />
                    <h5>Html</h5>
                  </div>
                  <div className="item">
                    <img src={meter3} alt="Image" />
                    <h5>CSS</h5>
                  </div>
                  <div className="item">
                    <img src={meter2} alt="Image" />
                    <h5>Javascript</h5>
                  </div>
                  <div className="item">
                    <img src={meter2} alt="Image" />
                    <h5>PHP</h5>
                  </div>
                </Carousel>
              </div>
            </Col>
          </Row>
        </Container>
        <img className="background-image-left" src={colorSharp}/>
      </section>
    );
}
export default Skills;
