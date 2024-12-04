import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import "./ExperienceDiv.css";

const API_TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzRmNTM4MTIyY2EwMzAwMTU0ODg0YjIiLCJpYXQiOjE3MzMyNTE5NjksImV4cCI6MTczNDQ2MTU2OX0.9Ip7DU9cVmjVt3nUjU88T3YB17fcUyo2a06NCXHOVlw";

export default function ExperienceDiv({ experience, id }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [inputs, setInputs] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    area: "",
  });

  const [experiences, setExperiences] = useState([experience]);

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

  function postExperience() {
    fetch(
      `https://striveschool-api.herokuapp.com/api/profile/${id}/experiences`,
      {
        method: "POST",
        headers: {
          Authorization: API_TOKEN,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputs),
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Errore nel caricare le esperienze");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Dati mandati correttamente", data);
        setExperiences([...experiences, inputs]);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  }

  function handleSubmit() {
    postExperience();
    setShow(false);
    setInputs({
      role: "",
      company: "",
      startDate: "",
      endDate: "",
      description: "",
      area: "",
    });
  }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Aggiungi esperienza</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex flex-column">
          <label>Qualifica</label>
          <input
            name="role"
            value={inputs.role}
            type="text"
            placeholder="Posizione lavorativa"
            onChange={handleChange}
          />

          <label>Azienda</label>
          <input
            name="company"
            value={inputs.company}
            type="text"
            placeholder="Esempio: Microsoft"
            onChange={handleChange}
          />

          <label>Data di inizio</label>
          <input
            name="startDate"
            value={inputs.startDate}
            type="text"
            placeholder="AAAA-MM-GG"
            onChange={handleChange}
          />

          <label>Data di fine</label>
          <input
            name="endDate"
            value={inputs.endDate}
            type="text"
            placeholder="AAAA-MM-GG"
            onChange={handleChange}
          />

          <label>Descrizione</label>
          <input
            name="description"
            value={inputs.description}
            type="text"
            placeholder="Descrizione"
            onChange={handleChange}
          />

          <label>Località</label>
          <input
            name="area"
            value={inputs.area}
            type="text"
            placeholder="Esempio: Roma, Italia"
            onChange={handleChange}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit" variant="primary" onClick={handleSubmit}>
            Salva
          </Button>
        </Modal.Footer>
      </Modal>

      <Container className="container-experience shadow">
        <Button type="button" className="add-experience" onClick={handleShow}>
          +
        </Button>
        <Row>
          <Col className="mt-4">
            <h4>{experience.company}</h4>
            <p>
              {formatDate(experience.startDate)} -{" "}
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
