import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiDocker,
  SiWindows10,
  SiVisualstudiocode,
  SiGithub,
  SiStackoverflow,
  SiOpenai,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows10  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiOpenai/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiStackoverflow  />
      </Col>
    </Row>
  );
}

export default Toolstack;
