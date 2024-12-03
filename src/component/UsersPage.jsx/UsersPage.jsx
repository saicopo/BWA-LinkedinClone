import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import FemaleImg from "../assets/img/female.png";
import MaleImg from "../assets/img/male.png";

export default function UsersPage() {
  return (
    <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image src={FemaleImg} roundedCircle />
        </Col>
        <Col xs={6} md={4}>
          <Image src={MaleImg} roundedCircle />
        </Col>
        <Col xs={6} md={4}>
          <Image src={MaleImg} roundedCircle />
        </Col>
        <Col xs={6} md={4}>
          <Image src={MaleImg} roundedCircle />
        </Col>
      </Row>
    </Container>
  );
}
