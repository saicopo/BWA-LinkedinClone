import React, { useEffect, useState } from "react";
// Importo i stili di react-bootstrap
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import Experience from "./Experience";

const ExperiencesContainer = ({ id }) => {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);
  const [reload, setReload] = useState(false);
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

  const API_EXP_URL = `https://striveschool-api.herokuapp.com/api/profile/${id}/experiences`;

  const users = [
    {
      name: "Jessica",
      token:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzRmNTJjMTIyY2EwMzAwMTU0ODg0YjEiLCJpYXQiOjE3MzMyNTE3NzcsImV4cCI6MTczNDQ2MTM3N30.2ILN61xsYSCkFQcH7evxZxTq8xCfbieJfh2FBphi8NQ",
      id: "674f52c122ca0300154884b1",
    },
    {
      name: "Carmine",
      token:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzUyMDk2ZjcyNDZhZDAwMTVjNTE1OTMiLCJpYXQiOjE3MzM0Mjk3MDgsImV4cCI6MTczNDYzOTMwOH0.1tYavcCRvJyrvhEHVAWTA4NKhDhmPjZupeZDNhZ0RQE",
      id: "6752096f7246ad0015c51593",
    },
    {
      name: "Andrei",
      token:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzRlMDcyNTc0Yjc3ZDAwMTVkM2YwNzYiLCJpYXQiOjE3MzMxNjY4ODUsImV4cCI6MTczNDM3NjQ4NX0.yf8-j8u0AMCJk8jZ-xX7c-0WFOxGtDdFZu2TX6o6rjk",
      id: "674e072574b77d0015d3f076",
    },
    {
      name: "Gabriele",
      token:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzRmNTM4MTIyY2EwMzAwMTU0ODg0YjIiLCJpYXQiOjE3MzMyNTE5NjksImV4cCI6MTczNDQ2MTU2OX0.9Ip7DU9cVmjVt3nUjU88T3YB17fcUyo2a06NCXHOVlw",
      id: "674f538122ca0300154884b2",
    },
  ];

  let apiToken = "";
  for (let i = 0; i < users.length; i++) {
    if (id === users[i].id) {
      apiToken = users[i].token;
    }
  }

  const getExperiences = async () => {
    try {
      const response = await fetch(API_EXP_URL, {
        headers: {
          Authorization: apiToken,
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Errore nel recuperare le esperienze");
      }
      const data = await response.json();
      setExperiences(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
      setReload(false);
    }
  };

  const postExperience = async () => {
    try {
      const response = await fetch(API_EXP_URL, {
        method: "POST",
        headers: {
          Authorization: apiToken,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputs),
      });
      if (!response.ok) {
        throw new Error("Errore nell'aggiunta dell'esperienza");
      }
      setReload(true);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getExperiences();
  }, [reload]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await postExperience();
    setShow(false);
    setInputs({
      role: "",
      company: "",
      startDate: "",
      endDate: "",
      description: "",
      area: "",
    });
  };

  if (loading) return <p>Loading...</p>;

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
            <Col className="d-flex justify-content-between align-items-center">
              <h5 className="m-3">Esperienze Lavorative</h5>
              <Button className="mx-4" type="button" onClick={handleShow}>
                <i className="bi bi-plus"></i>
              </Button>
            </Col>
            {experiences.map((experience) => (
              <Experience
                setReload={setReload}
                apiToken={apiToken}
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

export default ExperiencesContainer;
