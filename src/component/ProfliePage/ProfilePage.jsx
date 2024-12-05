import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProfileDetails from "../ProfileDetails/ProfileDetails";
import Aside from "../Account/Aside/Aside";
import { Col, Container, Row } from "react-bootstrap";
import Body from "../Account/Body/Body";

const API_PROFILE_URL = "https://striveschool-api.herokuapp.com/api/profile/";
const API_TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzUxZjRiZTcyNDZhZDAwMTVjNTE1NzYiLCJpYXQiOjE3MzM0MjQzMTgsImV4cCI6MTczNDYzMzkxOH0.FgQRbzIKWv_pm2t9v9nus4hRdQgxTsCFHLOOUN994Hs";

export default function ProfilePage() {
  const params = useParams();

  const [profileDetails, setProfileDetails] = useState([]);

  useEffect(() => {
    fetch(API_PROFILE_URL + params.id, {
      headers: {
        Authorization: API_TOKEN,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Errore del server");
        }
        return response.json();
      })
      .then((data) => {
        setProfileDetails(data);
      })
      .catch((error) => {
        console.error("Errore:", error);
      });
  }, [params]);

  return (
    <>
      <Container>
        <Row>
          <Col lg={9} md={8}>
            <ProfileDetails data={profileDetails} />
            <Body id={params.id} />
          </Col>
          <Col lg={3} md={4} className="d-none d-md-block">
            <Aside />
          </Col>
        </Row>
      </Container>
    </>
  );
}
