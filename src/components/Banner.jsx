import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";

function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [
    "m Web Developer Junior",
    "m Front - End Developer",
    "m Design Lover!",
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
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(400);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={8}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>
              Hi! Im Nicolò <hr className="w-100" />
              I<span className="wrap">{text}</span>
            </h1>
            <p>
              Born in Verona, Veneto, IT. <br /> I am passionate about front-end
              development and aim for intuitive projects with the best user
              experience.
            </p>
            <button>
              Contact Me<ArrowRightCircle size={25}></ArrowRightCircle>
            </button>
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
