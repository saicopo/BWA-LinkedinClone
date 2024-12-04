// Importo gli hooks utilizzati
import React, { useEffect, useState } from "react";

// Importo i stili di react-bootstrap
import { Col, Container, Row } from "react-bootstrap";
import ExperienceDiv from "./ExperienceDiv";

const Token =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzQyZjM4MDdlNDMzYzAwMTVjMDUwYzkiLCJpYXQiOjE3MzI0NDA5NjAsImV4cCI6MTczMzY1MDU2MH0.lHjuMYpUBJPy-9kM8aMBmk_LABGnFUtTQrgH4m8lWzA";

const Body = ({ id }) => {
  const [experiences, setExperience] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getExperience = async () => {
      try {
        const response = await fetch(
          `https://striveschool-api.herokuapp.com/api/profile/${id}/experiences`,
          {
            headers: {
              Authorization: Token,
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
  return (
    <Container>
      <Row className="mt-5">
        <Col>
          {experiences.map((experience) => (
            <ExperienceDiv id={id} key={experience._id} experience={experience} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};
export default Body;
