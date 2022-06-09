import React from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import { Parallax } from "react-parallax";
import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Particles from "react-particles-js";
import { particlesOption2 } from "./particlesOption2.js";
import imgCode from "./assets/img-code.jpg";

// components====================================

import MyNavbar from "./components/myNavbar";
import ScreenHome from "./components/ScreenHome";
import TitleMessage from "./components/titleMessage";
import About from "./pages/about";
import Skills from "./pages/skills.jsx";
import TimeLine from "./pages/timeLine";
import Contact from "./pages/contact";
import Footer from "./components/myFooter";
import Portfolio from "./pages/myPortFolio";
import Title from "./components/myTitle";

const App = () => {
  return (
    <div style={{ position: "relative" }}>
      <MyNavbar />
      <ScreenHome />
      <TitleMessage />
      <Particles
        className="particles particles-box"
        params={particlesOption2}
      />
      <Container className="container-box  titleStyle" id="about">
        <Row>
          <Col>
            <Title
              className="text-center "
              title={"à propos"}
              span={" à propos"}
            />
          </Col>
        </Row>
      </Container>
      <Parallax
        blur={{ min: -30, max: 30 }}
        bgImage={imgCode}
        bgImageAlt=""
        className="imgAbout "
        strength={100}
      >
        <Container className="container-box rounded">
          <Fade duration={500}>
            <About />
          </Fade>
        </Container>
      </Parallax>
      <Container className="container-box rounded titleStyle" id="skills">
        <Row>
          <Col>
            <Title title={"Compétences"} span={"Compétences"} />
          </Col>
        </Row>
      </Container>
      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <Skills />
        </Slide>
      </Container>
      <Container className="container-box rounded titleStyle" id="portfolio">
        <Row>
          <Col>
            <Title title={"Projets"} span={"Projets"} />
          </Col>
        </Row>
      </Container>
      <Container className="container-box ">
        <Slide bottom duration={500}>
          <Portfolio />
        </Slide>
      </Container>
      <Container className="container-box rounded">
        <Container
          className="container-box rounded titleStyle"
          id="experiences"
        >
          <Row>
            <Col>
              <Title title={"Parcours"} span={"parcours"} />
            </Col>
          </Row>
        </Container>
        <Slide bottom duration={500}>
          <TimeLine />
        </Slide>
      </Container>
      <Container className="container-box rounded titleStyle" id="contact">
        <Row>
          <Col>
            <Title title={"Contact"} span={"Contact"} />
          </Col>
        </Row>
      </Container>
      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <Contact />
        </Slide>
      </Container>
      <Footer />
    </div>
  );
};

export default App;
