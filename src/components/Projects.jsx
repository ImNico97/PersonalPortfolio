// import React from "react";
// import Tab from "react-bootstrap/Tab";
// import Tabs from "react-bootstrap/Tabs";
// import { Container, Row, Col } from "react-bootstrap";
// import colorSharp2 from "../assets/img/color-sharp2.png";
// import ProjectCard from "../components/ProjectCard";
// import "animate.css";
// import TrackVisibility from "react-on-screen";

// function Projects() {
//   const projects = [
//     {
//       title: "Business Startup",
//       description: "Design and development",
//       imgUrl: "projImg1",
//     },
//     {
//       title: "Business Startup",
//       description: "Design and development",
//       imgUrl: "projImg2",
//     },
//     {
//       title: "Business Startup",
//       description: "Design and development",
//       imgUrl: "projImg3",
//     },
//     {
//       title: "Business Startup",
//       description: "Design and development",
//       imgUrl: "projImg4",
//     },
//     {
//       title: "Business Startup",
//       description: "Design and development",
//       imgUrl: "projImg5",
//     },
//     {
//       title: "Business Startup",
//       description: "Design and development",
//       imgUrl: "projImg6",
//     },
//   ];

//   return (
//     <section className="project" id="project">
//       <Container>
//         <Row>
//           <Col size={12}>
//             <TrackVisibility>
//               {({ isVisible }) => (
//                 <div
//                   className={
//                     isVisible ? "animate__animated animate__fadeIn" : ""
//                   }
//                 >
//                   <h2>Progetti</h2>
//                   <p>
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                     Repudiandae nam commodi expedita quisquam dignissimos, at
//                     aspernatur quidem, culpa doloremque a nulla eum soluta odit
//                     tempora quis consectetur, corrupti numquam accusamus!
//                   </p>
//                   <Tabs
//                     defaultActiveKey="first"
//                     id="projects-tabs"
//                     className="mb-3 Tabs"
//                     justify
//                   >
//                     <Tab
//                       id="slideInUp"
//                       className={
//                         isVisible ? "animate__animated animate__slideInUp" : ""
//                       }
//                       eventKey="first"
//                       title="Page 1"
//                     >
//                       <Row>
//                         {projects.map((project, index) => {
//                           return <ProjectCard key={index} {...project} />;
//                         })}
//                       </Row>
//                     </Tab>
//                     <Tab eventKey="second" title="Page 2"></Tab>
//                     <Tab eventKey="third" title="Page 3"></Tab>
//                   </Tabs>
//                 </div>
//               )}
//             </TrackVisibility>
//           </Col>
//         </Row>
//       </Container>
//       <img className="bg-img-right" src={colorSharp2} alt="" />
//     </section>
//   );
// }

// export default Projects;



import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard from "../components/ProjectCard";
import projImg1 from "../assets/img/ScreenshotPrestoHome.png";
// import projImg2 from "../assets/img/project-img2.png";
// import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

function Projects (){

  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
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
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
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
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
export default Projects
