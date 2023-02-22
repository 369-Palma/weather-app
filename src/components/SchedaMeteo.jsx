import { Container, Row, Col } from "react-bootstrap";

const Scheda = ({ main, weather, name, wind }) => {
  return (
    <Container className=" container d-flex flex-column justify-content-between">
      <Row>
        <Col className="location">
          <p> {name}</p>
        </Col>
        <Col className="temperature fs-2 ">
          <p className="bold"> {main?.temp} °C </p>
        </Col>
        <Col className="info">
          <p> {weather.main}</p>
        </Col>
      </Row>
      <Row className="bottom">
        <Col className="feels">
          <p className="bold">{main?.feels_like} °F</p>
          <p>Feels like</p>
        </Col>
        <Col className="humidity">
          <p className="bold">{main?.humidity} %</p>
          <p>Humidity</p>
        </Col>
        <Col className="wind">
          <p className="bold">{wind?.speed} MPH</p>
          <p>Wind speed</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Scheda;
