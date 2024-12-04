import React from "react";
import { Button, Card } from "react-bootstrap";
import "./ProfileDetails.css";

export default function ProfileDetails({ data }) {
  return (
    <>
      <Card className="shadow profile-card">
        <Card.Img
          variant="top"
          src="https://i.pinimg.com/originals/2d/e8/82/2de882cd4f3992ada3d609e3a183f7a4.jpg"
          alt="Background"
          className="profile-card-header"
        />
        <img
          src={data.image}
          alt="Avatar"
          className="rounded-circle border avatar-image"
        />
        <Card.Body className="mt-5">
          <Card.Title className="mb-2">
            {data.name} {data.surname}
          </Card.Title>
          <Card.Subtitle className="text-muted mb-2">
            {data.title}
          </Card.Subtitle>
          <Card.Text>
            {data.area} -
            <a href="/" className="mx-1 text-decoration-none">
              Informazioni di contatto
            </a>
          </Card.Text>
          <Button className="mb-2">Disponibile per</Button>
          <Button variant="outline-primary" className="mb-2 mx-2">
            Aggiungi sezione del profilo
          </Button>
          <Button variant="outline-primary" className="mb-2">
            Migliora profilo
          </Button>
          <Button variant="outline-secondary" className="mb-2 mx-2">
            Risorse
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}
