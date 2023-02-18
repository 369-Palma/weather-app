import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SearchTab from "./components/SearchTab";

function App() {
  /* const mainUrl = `https://api.openweathermap.org/data/2.5/weather?lat=41.07&lon=16.52&appid=affeeeefd8a69ba026cefacfe17d898f`;
   */
  /* const mainUrl= `api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=affeeeefd8a69ba026cefacfe17d898f` */

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<SearchTab />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
