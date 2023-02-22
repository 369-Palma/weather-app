import { Container, Row, Col } from "react-bootstrap";

const Scheda = (props) => {
  return (
    <Container className=" container d-flex flex-column justify-content-between">
      <Row>
        <Col className="location">
          <p> {props.name}</p>
        </Col>
        <Col className="temperature fs-2 ">
          <p className="bold"> {props.main?.temp} °C </p>
        </Col>
        <Col className="info">
          <p> {props.weather.main}</p>
        </Col>
      </Row>
      <Row className="bottom">
        <Col className="feels">
          <p className="bold">{props.main?.feels_like} °F</p>
          <p>Feels like</p>
        </Col>
        <Col className="humidity">
          <p className="bold">{props.main?.humidity} %</p>
          <p>Humidity</p>
        </Col>
        <Col className="wind">
          <p className="bold">{props.wind?.speed} MPH</p>
          <p>Wind speed</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Scheda;
