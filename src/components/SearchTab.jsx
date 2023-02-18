import { Row, Col, Form } from "react-bootstrap";
import { useState } from "react";
/* import SchedaMeteo from "./SchedaMeteo"; */

const SearchTab = () => {
  /* const [latQuery, setLatQuery] = useState("");
  const [lonQuery, setLonQuery] = useState(""); */

  const [cityName, setCityName] = useState("");
  const [lonQuery, setLonQuery] = useState("");
  const [latQuery, setLatQuery] = useState("");

  /*   const latitude = (e) => setLatQuery(e.target.value);
  const longitude = (e) => setLonQuery(e.target.value); */
  const handleChange = (e) => {
    setCityName(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let res = await fetch(mainUrl);
      if (res.ok) {
        const data = await res.json();
        console.log(data);
        setLatQuery(data.lat);
        setLonQuery(data.lon);
      } else {
        console.log("Badoglio!");
      }
    } catch (error) {
      console.log("Something went wrong during the call", error);
    }
  };

  /*   const dataUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latQuery}&lon=${lonQuery}&appid=affeeeefd8a69ba026cefacfe17d898f`;
   */ const mainUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=affeeeefd8a69ba026cefacfe17d898f`;
  /* const mainUrl = `http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}` */

  return (
    <>
      <Row className="d-flex flex-column mx-5 align-content-center mt-3 text-bg-primary border border-secondary">
        <Col sx={4}>
          <strong className="fs-1 mb-2">
            Inserisci i dati della tua città
          </strong>
        </Col>
        <Col md={2} className="mx-auto">
          <Form onSubmit={handleSubmit} className="my-4">
            <Form.Control
              type="search"
              placeholder="Enter your city name"
              value={cityName}
              onChange={handleChange}
            />
          </Form>
        </Col>
        {/* <Col xs={10} className="my-3 mx-auto">
          <Container className="d-flex flex-column justify-content-between">
            <Row>
              <p>{data.name} </p>
              {data.main ? <h1> {data.main.temp} </h1> : null}
            </Row>
          </Container>
        </Col> */}
      </Row>
    </>
  );
};

export default SearchTab;
