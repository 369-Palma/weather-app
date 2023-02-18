/* import { useState, useEffect } from "react";
import "./SearchTab";

const WeatherDataResults = () => {
  const [lonQuery, setLonQuery] = useState("");
  const [latQuery, setLatQuery] = useState("");
  const [dataWeather, setDataWeather] = useState([]);

  const dataUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latQuery}&lon=${lonQuery}&appid=affeeeefd8a69ba026cefacfe17d898f`;

  const fetchFunction = async () => {
    try {
      let res = await fetch(dataUrl);
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

  return <></>;
};

export default WeatherDataResults; */
