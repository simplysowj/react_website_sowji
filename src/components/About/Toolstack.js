import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
 
} from "react-icons/si";
import { SiAnaconda } from "react-icons/si";
import { SiJupyter } from "react-icons/si";
import { SiGooglecolab } from "react-icons/si";
function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAnaconda />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJupyter />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGooglecolab />
      </Col>
    </Row>
  );
}

export default Toolstack;
