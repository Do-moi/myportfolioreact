import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import photo from "../assets/photoCV.jpg";
import Button from "react-bootstrap/Button";
import "./about.style.css";

const About = () => {
  return (
    <div>
      <Container className="align-items-center">
        <Row className=" align-items-center">
          <Col xs={12} md={6}>
            <Row className="justify-content-center ">
              <Image
                className="profile justify-content-end "
                width={270}
                src={photo}
                alt="photo"
                thumbnail
                fluid
              />
            </Row>
          </Col>
          <Col xs={12} md={6}>
            <Row className="p-2 my-details justify-content-center mt-4 mb-4">
              <p className="text-justify p-3 text">
                Je m’intéresse aux domaines des nouvelles technologies et de
                l’informatique car j’apprécie le fait de donner vie à des
                projets d’applications ou de sites, de trouver des solutions aux
                problèmes et de savoir que les clients les utilisent. En effet,
                j’ai le goût pour développer continuellement mes connaissances
                en matière de programmation afin de m’améliorer et acquérir de
                l’expérience en tant que développeur web.
              </p>
              <Col className="d-flex justify-content-center flex-wrap mb-4">
                <div>
                  <a href="#contact">
                    <Button className="m-2" variant="outline-primary">
                      Contact
                    </Button>
                  </a>
                </div>
                <div>
                  <a
                    href="https://drive.google.com/file/d/1v5KPsXmsAhgcx2yYHjFTj1LsYZKMxQom/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="m-2" variant="outline-success">
                      CV
                    </Button>
                  </a>
                </div>
                <div>
                  <a
                    href="https://github.com/Do-moi"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="m-2" variant="outline-dark">
                      GitHub
                    </Button>
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.linkedin.com/in/marc-do-5481831b2/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="m-2" variant="outline-info">
                      LinkedIn
                    </Button>
                  </a>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
