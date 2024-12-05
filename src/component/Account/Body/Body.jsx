import React, { useEffect, useState } from "react";

// Importo i stili di react-bootstrap
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import ExperienceDiv from "./ExperienceDiv";

const API_TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzRlMDcyNTc0Yjc3ZDAwMTVkM2YwNzYiLCJpYXQiOjE3MzMxNjY4ODUsImV4cCI6MTczNDM3NjQ4NX0.yf8-j8u0AMCJk8jZ-xX7c-0WFOxGtDdFZu2TX6o6rjk";

const Body = ({ id }) => {
  const [experiences, setExperience] = useState([]);
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    const getExperience = async () => {
      try {
        const response = await fetch(
          ` https://striveschool-api.herokuapp.com/api/profile/${id}/experiences`,
          {
            headers: {
              Authorization: API_TOKEN,
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();

        setExperience(data);
      } catch (error) {
        console.error("Errore ", error);
      } finally {
        setLoading(false);
      }
    };

    getExperience(); // Chiamata alla funzione per recuperare gli utenti
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  function postExperience() {
    console.log(id)
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

  function handleSubmit(e) {
    console.log(e)
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

      <Container className="p-0">
        <Row>
          <Col>
            <h5 className="mx-2 my-3 mt-5">Esperienze Lavorative</h5>
            <Button
              type="button"
              className="add-experience"
              onClick={handleShow}
            >
              +
            </Button>
            {experiences.map((experience) => (
              <ExperienceDiv
                id={id}
                key={experience._id}
                experience={experience}
              />
            ))}
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Body;
