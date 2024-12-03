import { Col, Form, Row } from "react-bootstrap";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import React from "react";
import "./navbar.css";
function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Row className="justify-content-start w-100">
          <Col className="d-flex align-items-center col-3">
            <span>
              <i class="bi bi-linkedin h2 me-2 text-primary "></i>
            </span>

            <Form>
              <input placeholder="Cerca"></input>
            </Form>
          </Col>

          <Col className="d-flex align-items-center justify-content-around col-9 ">
            <Nav.Link>
              <div className=" d-flex flex-column align-items-center">
                <i class="bi bi-house h4"></i>
                <p>Home</p>
              </div>
            </Nav.Link>
            <Nav.Link>
            <div className=" d-flex flex-column align-items-center">
              <i class="bi bi-people-fill h4"></i>
              <p>Rete</p>
              </div>
            </Nav.Link>
            <Nav.Link>
            <div className=" d-flex flex-column align-items-center">
              <i class="bi bi-suitcase-lg h4"></i>
              <p>Lavoro</p>
              </div>
            </Nav.Link>
            <Nav.Link>
            <div className=" d-flex flex-column align-items-center">
              <i class="bi bi-chat-dots h4"></i>
              <p>Messagistica</p>
              </div>
            </Nav.Link>
            <Nav.Link>
            <div className=" d-flex flex-column align-items-center">
              <i class="bi bi-bell h4"></i>
              <p>Notifiche</p>
              </div>
            </Nav.Link>
            
            <Nav.Link>
              <img
                src="https://picsum.photos/25/25"
                className="rounded-circle mt-2"
                alt="img-profile"
              />
              <div className="d-flex">
                <p className="me-1 fs-6">TU</p>
                <NavDropdown>
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                </NavDropdown>
              </div>
            </Nav.Link>

            <Nav.Link>
              <i class="bi bi-list h4"></i>
            </Nav.Link>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
