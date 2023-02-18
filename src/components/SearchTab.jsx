import { Row, Col, Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";

const SearchTab = () => {
  /* const [latQuery, setLatQuery] = useState("");
  const [lonQuery, setLonQuery] = useState(""); */
  const [weatherData, setWeatherData] = useState([]);
  const [cityName, setCityName] = useState("");

  /*   const latitude = (e) => setLatQuery(e.target.value);
  const longitude = (e) => setLonQuery(e.target.value); */

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  /* const mainUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latQuery}&lon=${lonQuery}&appid=affeeeefd8a69ba026cefacfe17d898f`; */
  const mainUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=affeeeefd8a69ba026cefacfe17d898f`;
  /* const mainUrl = `http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}` */

  const fetchFunction = async () => {
    try {
      let res = await fetch(mainUrl);
      if (res.ok) {
        const data = await res.json();
        console.log(data);
        return data;
      } else {
        console.log("Badoglio!");
      }
    } catch (error) {
      console.log("Something whent wrong during the call", error);
    }
  };

  return (
    <>
      <Row className="d-flex flex-column mx-5 align-content-center mt-3 text-bg-dark border border-secondary">
        <Col sm={6}>
          <strong className="fs-1 mb-2">
            Inserisci i dati della tua città
          </strong>
        </Col>
        <Col sm={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="Enter your city name"
                value={cityName}
                onChange={(e) => setCityName(e.target.value)}
              />
            </Form.Group>

            {/* <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="text"
                placeholder="Enter logitude"
                value={longitude}
                onChange={(e) => setLonQuery(e.target.value)}
              />
            </Form.Group> */}

            <Form.Group
              className="mb-3"
              controlId="formBasicCheckbox"
            ></Form.Group>
            <Button
              className="mb-3"
              variant="secondary"
              type="submit"
              /* onClick={useEffect(() => {
                setWeatherData(fetchFunction());
              }, [cityName])} */
            >
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default SearchTab;
