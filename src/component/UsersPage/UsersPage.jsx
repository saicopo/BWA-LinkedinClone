import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import FemaleImg from "../assets/img/female.png";
import MaleImg from "../assets/img/male.png";
import { Link } from "react-router-dom";

export default function UsersPage() {
  const usersID = {
    jessica: "674f52c122ca0300154884b1",
    carmine: "6752096f7246ad0015c51593",
    gabriele: "674f538122ca0300154884b2",
    andrei: "674e072574b77d0015d3f076",
  };

  return (
    <Container>
      <Row className="text-center mt-5 g-5 vh-75">
        <Col xs={12} md={6}>
          <Link to={`/profile/${usersID.jessica}`}>
            <Image src={FemaleImg} roundedCircle />
          </Link>
          <p className="mt-4">Jessica Fraino</p>
        </Col>

        <Col xs={12} md={6}>
          <Link to={`/profile/${usersID.andrei}`}>
            <Image src={MaleImg} roundedCircle />
          </Link>
          <p className="mt-4">Plescan Andrei Leonard</p>
        </Col>

        <Col xs={12} md={6}>
          <Link to={`/profile/${usersID.gabriele}`}>
            <Image src={MaleImg} roundedCircle />
          </Link>
          <p className="mt-4">Gabriele Aloi</p>
        </Col>

        <Col xs={12} md={6}>
          <Link to={`/profile/${usersID.carmine}`}>
            <Image src={MaleImg} roundedCircle />
          </Link>
          <p className="mt-4">Carmine Berardi</p>
        </Col>
      </Row>
    </Container>
  );
}
