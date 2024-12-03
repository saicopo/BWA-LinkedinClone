import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./body.css"
const Token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzQyZjM4MDdlNDMzYzAwMTVjMDUwYzkiLCJpYXQiOjE3MzI0NDA5NjAsImV4cCI6MTczMzY1MDU2MH0.lHjuMYpUBJPy-9kM8aMBmk_LABGnFUtTQrgH4m8lWzA"
const Body = () => {
    
   
        const getEsperienze = async () =>{
            try {
                let response = await fetch(
                  'https://striveschool-api.herokuapp.com/api/profile/674e09d774b77d0015d3f07a/experiences', 
                    {headers: {
                      Authorization: Token,
                    },
                  })
                 response.json();
                  console.log(response);
                  
        }catch (error) {
            console.log(error)
           
          }}
        getEsperienze()
  
    return (
      <Container>
        <Row>
          <Col className="col-6 me-auto">
            <h5>Esperienza</h5>
            <Col id="singleExperience" className="mt-3 d-flex singleExperience">
             {response.map((esperienza) =>{
                <ul>
                    <li>{esperienza.role}</li>
                </ul>
                
             })}
              </Col>
             
          </Col>
        </Row>
      </Container>
    );
  
}

export default Body;
