import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
//import yy from "./../../assets/yy.jpg"

// import aa from "./../assets/aa.jpg"
// import as from "./../assets/aa.jpg"
// import cc from "./../assets/aa.jpg"
import { Link } from "react-router-dom";

export default function UsersPage() {
  const usersID = {
    jessica: "674f52c122ca0300154884b1", img:"../../../assets/yy.jpg",
    carmine: "6752096f7246ad0015c51593", img:"../../../assets/yy.jpg",
    gabriele: "674f538122ca0300154884b2", img:"./../../assets/yy.jpg",
    andrei: "674e072574b77d0015d3f076", img:"./../../assets/yy.jpg",
  };

  return (
    <Container className="mt-5 pt-2">
      <Row className="text-center mt-5 g-5 vh-75">
        <Col xs={12} md={6}>
          <Link to={`/profile/${usersID.jessica}`}>
            <Image className="img-fluid" src={usersID.img} roundedCircle />
          </Link>
          <p className="mt-4">Jessica Fraino</p>
        </Col>

        <Col xs={12} md={6}>
          <Link to={`/profile/${usersID.andrei}`}>
            <Image className="img-fluid" src={usersID.img} roundedCircle />
          </Link>
          <p className="mt-4">Plescan Andrei Leonard</p>
        </Col>

        <Col xs={12} md={6}>
          <Link to={`/profile/${usersID.gabriele}`}>
            <Image className="img-fluid" src={usersID.img} roundedCircle />
          </Link>
          <p className="mt-4">Gabriele Aloi</p>
        </Col>

        <Col xs={12} md={6}>
          <Link to={`/profile/${usersID.carmine}`}>
            <Image className="img-fluid" src={usersID.img} roundedCircle />
          </Link>
          <p className="mt-4">Carmine Berardi</p>
        </Col>
      </Row>
    </Container>
  );
}
