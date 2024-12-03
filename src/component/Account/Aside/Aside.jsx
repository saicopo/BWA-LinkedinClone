import React, { useState, useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';

    const Aside = () => {
        const [users, setUsers] = useState([]);
        const [loading, setLoading] = useState(true);
      
        useEffect(() => {
          const fetchUsers = async () => {
            try {
              const response = await fetch("https://striveschool-api.herokuapp.com/api/profile/", {
                headers: {"Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzRmNTJjMTIyY2EwMzAwMTU0ODg0YjEiLCJpYXQiOjE3MzMyNTE3NzcsImV4cCI6MTczNDQ2MTM3N30.2ILN61xsYSCkFQcH7evxZxTq8xCfbieJfh2FBphi8NQ",
                        "Content-Type": "application/json",
              }});
              const data = await response.json();
              setUsers(data);
            } catch (error) {
              console.error("Errore nel caricamento degli utenti", error);
            } finally {
              setLoading(false);
            }
          };
      
          fetchUsers();  // Chiamata alla funzione per recuperare gli utenti
        }, []);
      
        if (loading) {
          return <p>Loading...</p>;
        }
      
        return (
            <aside className="d-flex flex-column align-items-stretch flex-shrink-0 bg-body-tertiary" style={{width: "380px"}}>
          <ListGroup>
            {users.map(user => (
              <ListGroup.Item key={user._id}>
                <strong>{user.name} {user.surname}</strong> - {user.title}
                </ListGroup.Item>
            ))}
          </ListGroup>
          </aside>
        );
      };

export default Aside