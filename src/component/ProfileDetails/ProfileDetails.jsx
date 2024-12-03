import React from "react";
import { Button, Card, Container } from "react-bootstrap";
import "./ProfileDetails.css";
export default function ProfileDetails({ data }) {
  return (
    <>
      <Container className="d-flex justify-content-start mt-5">
        <Card className="shadow profile-card w-100">
          <Card.Img
            variant="top"
            src="https://i.pinimg.com/originals/2d/e8/82/2de882cd4f3992ada3d609e3a183f7a4.jpg"
            alt="Background"
            className="profile-card-header"
          />
          <div className="avatar-container">
            <div className="avatar-wrapper">
              <img
                src="https://via.placeholder.com/100?text=Avatar"
                alt="Avatar"
                className="rounded-circle border avatar-image"
              />
            </div>
          </div>
          <Card.Body className="">
            <Card.Title className="mb-1">
              {data.name} {data.surname}
            </Card.Title>
            <Card.Subtitle className="text-muted mb-2">
              {data.title}
            </Card.Subtitle>
            <Card.Text>
              <strong>{data.area}</strong>
              <a href="/">Informazioni di contatto</a>
              <br />
              <span>troppi follower · troppi collegamenti</span>
            </Card.Text>
            <Button className="mb-2">Disponibile per</Button>
            <Button variant="outline-primary" className="mb-2">
              Aggiungi sezione del profilo
            </Button>
            <Button variant="outline-primary" className="mb-2">
              Migliora profilo
            </Button>
            <Button variant="outline-secondary" className="mb-2">
              Risorse
            </Button>
          </Card.Body>
          <Card.Footer className="text-muted">
            <strong>Disponibile a lavorare</strong>
            <br />
            Ruoli di Sviluppatore Web
            <a href="/" className="d-block">
              Mostra dettagli
            </a>
          </Card.Footer>
        </Card>
      </Container>
    </>
  );
}
