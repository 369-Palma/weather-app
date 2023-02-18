import { Row, Col, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
/* import Scheda from "./SchedaMeteo"; */

const SearchTab = () => {
  const [cityName, setCityName] = useState("");
  const [lonQuery, setLonQuery] = useState("");
  const [latQuery, setLatQuery] = useState("");
  /* const [dataCitta, setDataCitta] = useState({}); */
  const [dataWeather, setDataWeather] = useState([]);
  /* const [dataWeather, setDataWeather] = useState([]); */

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
        console.log(latQuery);
        setLonQuery(data.lon);
        console.log(lonQuery);
      } else {
        console.log("Badoglio!");
      }
    } catch (error) {
      console.log("Something went wrong during the call", error);
    }
  };
  const mainUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=affeeeefd8a69ba026cefacfe17d898f`;
  /*   const dataUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latQuery}&lon=${lonQuery}&appid=affeeeefd8a69ba026cefacfe17d898f`;
  ;

  /* https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key} */

  const fetchFunction = async () => {
    try {
      let res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=41.1257843&lon=16.8620293&appid=affeeeefd8a69ba026cefacfe17d898f`
      );
      if (res.ok) {
        const dataW = await res.json();
        setDataWeather(dataW);
        console.log(dataWeather);
      } else {
        console.log("Badoglio!");
      }
    } catch (error) {
      console.log("Something went wrong during the call", error);
    }
  };

  useEffect(() => {
    fetchFunction();
  }, [latQuery]);
  /* const fetchFunction = async () => {
    try {
      let res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=41.2&lon=68.5&appid=affeeeefd8a69ba026cefacfe17d898f`
      );
      if (res.ok) {
        const dataW = await res.json();
        setDataWeather(dataW);
        console.log(dataWeather);
      } else {
        console.log("Badoglio!");
      }
    } catch (error) {
      console.log("Something went wrong during the call", error);
    }
  };
 */

  return (
    <>
      <Row className="d-flex flex-column mx-5 align-content-center mt-3 text-bg-primary border border-secondary">
        <Col sx={4}>
          <strong className="fs-1 mb-2">
            Inserisci i dati della tua città
          </strong>
        </Col>
        <Col md={2} className="mx-auto">
          <Form onSubmit={handleSubmit} className="my-4 ">
            <Form.Control
              className="text-center"
              type="search"
              placeholder="Enter your city name"
              value={cityName}
              onChange={handleChange}
            />
          </Form>
        </Col>
        <Col xs={10} className="my-3 mx-auto">
          {/*  <Scheda></Scheda> */}
        </Col>
      </Row>
    </>
  );
};

export default SearchTab;
