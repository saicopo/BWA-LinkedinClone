import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import "./Experience.css";

export default function Experience({ experience, id, apiToken, setReload }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const API_EXP_PUT_URL = `https://striveschool-api.herokuapp.com/api/profile/${id}/experiences/`;

  const [inputs, setInputs] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    area: "",
  });
  useEffect(() => {
    if (experience) {
      setInputs({
        role: experience.role,
        company: experience.company,
        startDate: experience.startDate?.slice(0, 10),
        endDate: experience.endDate?.slice(0, 10),
        description: experience.description,
        area: experience.area,
      });
    }
  }, [experience]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const modifyExp = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(API_EXP_PUT_URL + experience._id, {
        method: "PUT",
        headers: {
          Authorization: apiToken,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputs),
      });

      if (response.ok) {
        console.log("Esperienza aggiornata con successo");
        handleClose();
        setReload(true);
      } else {
        console.error("Errore nell'aggiornamento");
      }
    } catch (error) {
      console.error("Errore durante la richiesta PUT", error);
    }
  };

  const handleDelete = (selected) => {
    const confirmDelete = window.confirm(
      "Sei sicuro di voler eliminare questa esperienza?"
    );

    if (confirmDelete) {
      deleteExp(selected);
    } else {
      console.log("Eliminazione annullata.");
    }
  };

  const deleteExp = async (selectedId) => {
    try {
      const response = await fetch(API_EXP_PUT_URL + selectedId, {
        method: "DELETE",
        headers: {
          Authorization: apiToken,
        },
      });

      if (response.ok) {
        console.log("Esperienza eliminata con successo");
        setReload(true);
      } else {
        console.error("Errore nell'eliminazione dell'esperienza");
      }
    } catch (error) {
      console.error("Errore durante la richiesta DELETE", error);
    }
  };

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
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modifica esperienza</Modal.Title>
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
          <Button type="submit" variant="primary" onClick={modifyExp}>
            Modifica
          </Button>
        </Modal.Footer>
      </Modal>
      <Container className="container-experience shadow mb-2">
        <Row>
          <Col className="mt-2">
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
          <Col className="d-flex flex-column align-items-end justify-content-end">
            <Button className="mb-2" onClick={handleShow}>
              <i className="bi bi-pencil"></i>
            </Button>
            <Button
              variant="danger"
              onClick={() => handleDelete(experience._id)}
            >
              <i className="bi bi-x"></i>
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}
