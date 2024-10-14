import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";

function Banner() {

  const [hasAnimated, setHasAnimated] = useState(false);

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [
    "Im Web Developer Junior",
    "Im Front - End Developer",
    "Im Design Lover!",
  ];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(200 - Math.random() * 200);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  function tick() {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(55);
    }else{
      setDelta(150)
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(200);
    }
  }

  return (
    <section className="banner" id="home" href="/">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={8}>
            <TrackVisibility>
            {({isVisible}) =>  {
                // Esegui l'animazione solo la prima volta
                if (isVisible && !hasAnimated) {
                  setHasAnimated(true);
                }
                return (
              <div
                className={
                  hasAnimated ? "animate__animated animate__fadeIn animate_slower" : "invisible"
                }
              >
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>
                  Hi! Im Nicolò <hr className="w-100" />
                  <span className="wrap">{text}</span>
                </h1>
                <p>
                  Born in Verona, Veneto, IT. <br /> I am passionate about
                  front-end development and aim for intuitive projects with the
                  best user experience.
                </p>
                <a href="#connect" className="connect">
                <button className="mb-5" id="skills">
                  Contact Me<ArrowRightCircle size={25}></ArrowRightCircle>
                </button>
                </a>
              </div>)
              }
            }
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={4}>
            <img src={headerImg} alt="Header Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default Banner;
