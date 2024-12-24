import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with technology and have built a strong passion for
              creating secure, scalable, and efficient systems. My expertise
              lies in&nbsp;
              <i>
                <b className="purple">
                  DevOps, Network Security, and Application Security.
                </b>
              </i>
              <br />
              <br />I specialize in leveraging tools and technologies like
              <i>
                <b className="purple">
                  {" "}
                  Docker, Kubernetes, Ansible, and Terraform{" "}
                </b>
              </i>
              to design and automate infrastructure. I also focus on
              strengthening systems through&nbsp;
              <i>
                <b className="purple">
                  Vulnerability Management, Threat Analysis, and Incident
                  Response.
                </b>
              </i>
              <br />
              <br />
              My field of interest includes building and securing&nbsp;
              <i>
                <b className="purple">Cloud Infrastructure, CI/CD Pipelines,</b>
              </i>
              and applying best practices in&nbsp;
              <i>
                <b className="purple">Application and Network Security.</b>
              </i>
              <br />
              <br />
              Whenever possible, I enjoy staying ahead of evolving security
              challenges and ensuring that the systems I develop are resilient,
              efficient, and secure.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://ehmad.site/github"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://ehmad.site/x"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://ehmad.site/linkedin"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://ehmad.site/instagram"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
