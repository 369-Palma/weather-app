import { Container, Row, Col } from "react-bootstrap";
/*import { useState, useEffect } from "react";

const Scheda = ({ dataW }) => {
  const [data, setData] = useState({});
  const [lon, setLon] = useState("");
  const [lat, setLat] = useState("");

  const searchLocation = (e) => {
    if (e.key === "Enter") {
      fetchFunction();
    }
  };
  const fetchFunction = async () => {
    try {
      let res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=affeeeefd8a69ba026cefacfe17d898f`
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
  }; */
/*   const [dataWeather, setDataWeather] = useState(null); 
const [lonQuery, setLonQuery] = useState("");
  const [latQuery, setLatQuery] = useState(""); 

 ;

  useEffect(() => {
    fetchFunction();
  }, [dataW]); */

const Scheda = ({ main, weather, name }) => {
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
