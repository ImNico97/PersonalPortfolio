import { useState } from 'react';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard from "../components/ProjectCard";
import projImg1 from "../assets/img/ScreenshotPrestoHome.png";
import projImg2 from "../assets/img/ScreenshotPP.png";
import projImg3 from "../assets/img/ScreenshotBuildingCompany.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

function Projects() {
  const [hasAnimated, setHasAnimated] = useState(false); // Inizializza lo stato

  const projects = [
    {
      title: "Presto Project",
      description: "Buy & Sell",
      imgUrl: projImg1,
      link: "https://github.com/ImNico97/Personal-Presto",
    },
    {
      title: "Personal Portfolio",
      description: "This Website!",
      imgUrl: projImg2,
      link: "https://github.com/ImNico97/PersonalPortfolio",
    },
    {
      title: "Building Project",
      description: "Construction Company Website",
      imgUrl: projImg3,
      link: "https://github.com/ImNico97/Personal-Livewire",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => {
                // Esegui l'animazione solo la prima volta
                if (isVisible && !hasAnimated) {
                  setHasAnimated(true);
                }
                return (
                  <div className={hasAnimated ? "animate__animated animate__fadeIn animate__slower" : "invisible"}>
                    <h2>Projects</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                      <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                        <Nav.Item>
                          <Nav.Link eventKey="first">Page 1</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="second">Page 2</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="third">Page 3</Nav.Link>
                        </Nav.Item>
                      </Nav>
                      <Tab.Content id="slideInUp">
                        <Tab.Pane eventKey="first">
                          <Row>
                            {projects.map((project, index) => (
                              <ProjectCard key={index} {...project} />
                            ))}
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                          <h2>For the future...</h2>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                          <h2>For the future...</h2>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </div>
                );
              }}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background Design" />
    </section>
  );
}

export default Projects;
