import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ahmad Faraz</span><br /> from{" "}
            <span className="purple">Pakistan.</span>
            <br />
            I am currently studing BSCYS.
            <br />
            Apart from coding, my main focus is in areas of&nbsp;
            <i>
              <b className="purple">
                DevOps, Network Security, and Application Security
              </b>
            </i>
            . I am passionate about automating workflows, securing systems, and
            building scalable, robust infrastructures.
            <br />
            <br />
            Some of the tools and technologies I work with include&nbsp;
            <i>
              <b className="purple">Docker, Kubernetes, Jenkins, AWS,</b>
              <b className="purple"> Terraform,</b> and&nbsp;
              <b className="purple">Ansible.</b>
            </i>
            <br />
            <br />
            Apart from my professional work, some other activities that I love
            to do include:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"
          </p>
          <footer className="blockquote-footer">co</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
