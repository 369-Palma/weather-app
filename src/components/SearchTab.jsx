import { Row, Col, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
/* import DatiCity from "./DatiCity"; */
import Scheda from "./SchedaMeteo";

const SearchTab = () => {
  const [cityName, setCityName] = useState("");
  const [lonQuery, setLonQuery] = useState("");
  const [latQuery, setLatQuery] = useState("");

  const [data, setData] = useState([]);
  const [weatherData, setWeatherData] = useState([]);

  const mainUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=affeeeefd8a69ba026cefacfe17d898f`;
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latQuery}&lon=${lonQuery}&appid=affeeeefd8a69ba026cefacfe17d898f`;

  const fetchweather = async () => {
    let respWeather = await fetch(weatherUrl);
    let dataWeather = await respWeather.json();
    setWeatherData(dataWeather);
    console.log(weatherData);
    return dataWeather;
  };

  const handleChange = (e) => {
    setCityName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let res = await fetch(mainUrl);
      if (res.ok) {
        const city = await res.json();
        console.log("res.json data city:", city);
        console.log(city.lat);
        setData({ data });
        console.log("data:", data);
        setLatQuery(city.lat);
        setLonQuery(city.lon);

        if (city.length > 0) {
          useEffect =
            (() => {
              fetchweather();
            },
            [data]);
        } else {
          alert("Ops! We didn't find the city");
        }
      }
    } catch (error) {
      console.log("Something went wrong during the call", error);
    }
  };

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
          {/*  <div>
            <p>Nome città: {props.name}</p>
            <p>Stato: {props.state}</p>
            <p>Longitudine: {props.lon}</p>
            <p>Latitudine: {props.lat}</p>
          </div> */}
          {/* <DatiCity></DatiCity> */}
          <Scheda></Scheda>
        </Col>
      </Row>
    </>
  );
};

export default SearchTab;
