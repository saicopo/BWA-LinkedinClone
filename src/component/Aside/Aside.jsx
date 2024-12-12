import React, { useState, useEffect } from "react";
import { Card, Container, Button, Row, Col } from "react-bootstrap";

const Aside = () => {
  const [users, setUsers] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [loading, setLoading] = useState(true);
 const randomAvatar = "https://i.pravatar.cc/300"
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://striveschool-api.herokuapp.com/api/profile/",
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzRmNTJjMTIyY2EwMzAwMTU0ODg0YjEiLCJpYXQiOjE3MzMyNTE3NzcsImV4cCI6MTczNDQ2MTM3N30.2ILN61xsYSCkFQcH7evxZxTq8xCfbieJfh2FBphi8NQ",
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Errore nel caricamento degli utenti", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers(); // Chiamata alla funzione per recuperare gli utenti
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  const displayedUsers = showAll ? users : users.slice(0, 5);

  return (
    <aside className="mt-5 pt-2">
      <h6>Altri profili per te</h6>
      <Container
        className="m-2 mt-3"
        style={{ height: "650px", position: "relative" }}
      >
        <Row
          className="g-0"
          style={{
            height: "calc(100% - 65px)", // Dedica lo spazio per il bottone in fondo
            paddingRight: "10px", // Per evitare che compaia una scrollbar orizzontale
            overflowY: "auto", // Permette di scrollare solo la parte delle card
          }}
        >
          {displayedUsers.map((user) => (
            <Col key={user._id} sm={12} className="mb-1">
              <Card
                className="d-flex flex-row flex-wrap border-0"
                style={{ width: "100%" }}
              >
                <Col
                  md={4}
                  className="d-flex justify-content-center align-items-center"
                >
                  <Card.Img
                    src={randomAvatar}
                    alt={`${user.name} ${user.surname}`}
                    style={{
                      width: "50px",
                      height: "50px",
                      objectFit: "cover",
                    }}
                    className="img-fluid rounded-circle"
                  />
                </Col>
                <Col md={8}>
                  <Card.Body className="p-0">
                    <Card.Title style={{ fontSize: "13px" }}>
                      {user.name} {user.surname}
                    </Card.Title>
                    <Card.Text className="mb-1" style={{ fontSize: "12px" }}>
                      {user.title || ""}
                    </Card.Text>
                    <Button variant="primary" size="sm">
                      Collegati
                    </Button>
                  </Card.Body>
                </Col>
              </Card>
              <hr style={{ border: "1px solid #ddd", margin: "10px 0" }} />
            </Col>
          ))}
        </Row>
        {/* Bottone "Mostra tutto" */}
        {!showAll && users.length > 5 && (
          <div
            className="d-flex justify-content-center"
            style={{
              position: "absolute",
              bottom: "10px",
              width: "100%",
              paddingBottom: "10px", // Aggiungiamo un po' di spazio sotto il bottone
            }}
          >
            <Button
              variant="outline-primary"
              size="lg"
              onClick={() => setShowAll(true)}
              style={{
                fontSize: "15px",
              }}
            >
              Mostra tutto
            </Button>
          </div>
        )}
      </Container>
    </aside>
  );
};

export default Aside;
