import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./ExperienceDiv.css";

export default function ExperienceDiv({ experience }) {
  // Funzione per formattare le date
  const formatDate = (dateString) => {
    if (!dateString) return "Presente";
    const date = new Date(dateString); // Converte la stringa in un oggetto Date
    return date.toLocaleDateString("it-IT", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    }); // Formatta solo anno e mese
  };

  return (
    <>
      <Container className="container-experience shadow mb-2">
        <Row>
          <Col className="mt-4">
            <h4>{experience.company}</h4>
            <p>
              {formatDate(experience.startDate)} -
              {formatDate(experience.endDate)}
            </p>
            <p>{experience.area}</p>
            <p>
              <strong>{experience.role}</strong>
            </p>
            <p>{experience.description}</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}
