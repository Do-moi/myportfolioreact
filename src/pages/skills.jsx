import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tilt from "react-tilt";
import Image from "react-bootstrap/Image";
import { skills } from "./skills-data";
import "./skills.style.css";

const Skills = () => {
  return (
    <div>
      <Row className="rowStyle d-flex justify-content-center ">
        <Col md={5} className="mb-3">
          <Card className="focus  ">
            <Card.Body>
              <Card.Title className="text-center  card-title">
                Frontend
              </Card.Title>
              <hr />
              <div className="card-text d-flex justify-content-start flex-column">
                {skills.frontend.map((skill, i) => (
                  <Tilt className=" m-2 " key={i}>
                    <span key={i}>
                      <a
                        className="text-dark text-decoration-none"
                        href={skill.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src={skill.imgSrc}
                          alt={skill.imgAltText}
                          className="image-style m-2"
                        ></Image>{" "}
                        {skill.skillName}
                      </a>
                    </span>
                  </Tilt>
                ))}
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={5}>
          <Card className="focus">
            <Card.Body>
              <Card.Title className="text-center  card-title">
                Backend
              </Card.Title>
              <hr />

              <div className="card-text d-flex justify-content-start flex-column">
                {skills.backend.map((skill, index) => (
                  <Tilt className=" mb-2 ml-2" key={index}>
                    <span key={index}>
                      <a
                        className="text-dark text-decoration-none"
                        href={skill.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src={skill.imgSrc}
                          alt={skill.imgAltText}
                          rounded
                          className="image-style m-1"
                        ></Image>{" "}
                        {skill.skillName}
                      </a>
                    </span>
                  </Tilt>
                ))}
              </div>
            </Card.Body>
          </Card>
          <Card className="focus mt-3 ">
            <Card.Body>
              <Card.Title className="text-center  card-title">
                Hosting Platforms & databases
              </Card.Title>
              <hr />
              <Row className=" d-flex justify-content-start">
                <Col>
                  <div className="card-text d-flex justify-content-start flex-column">
                    {skills.hostingPlatforms.map((skill, index) => (
                      <Tilt className=" mb-2" key={index}>
                        <span className="p-2" key={index}>
                          <a
                            className="text-dark text-decoration-none"
                            href={skill.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Image
                              src={skill.imgSrc}
                              alt={skill.imgAltText}
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            {skill.skillName}
                          </a>
                        </span>
                      </Tilt>
                    ))}
                  </div>
                </Col>
                <Col>
                  <div className="card-text d-flex justify-content-start flex-column">
                    {skills.databases.map((skill, index) => (
                      <Tilt className=" mb-2" key={index}>
                        <span className="p-2">
                          <a
                            className="text-dark text-decoration-none"
                            href={skill.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Image
                              src={skill.imgSrc}
                              alt={skill.imgAltText}
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            {skill.skillName}
                          </a>
                        </span>
                      </Tilt>
                    ))}
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Card className="focus mt-3 mb-2">
            <Card.Body>
              <Card.Title className="text-center  card-title">CMS</Card.Title>
              <hr />
              <div className="card-text d-flex justify-content-start flex-column">
                {skills.versionControl.map((skill, index) => (
                  <Tilt key={index}>
                    <span className="p-2" key={index}>
                      <a
                        className="text-dark text-decoration-none"
                        href={skill.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src={skill.imgSrc}
                          alt={skill.imgAltText}
                          rounded
                          className="image-style m-1"
                        ></Image>{" "}
                        {skill.skillName}
                      </a>
                    </span>
                  </Tilt>
                ))}
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
export default Skills;
