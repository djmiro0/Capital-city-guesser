import React, { useState, useEffect } from "react";
import "./App.css";
import data from "./capitalCities.json"; // json file with the capital cities
import DraggableMarker from "./components/DraggableMarker"; // component to create a draggable marker
import { MapContainer, TileLayer } from "react-leaflet"; // needed to change the default icon
import "leaflet/dist/leaflet.css"; // needed to change the default icon
import icon from "leaflet/dist/images/marker-icon.png"; // needed to change the default icon
import iconShadow from "leaflet/dist/images/marker-shadow.png"; // needed to change the default icon
import Leaflet from "leaflet"; // needed to change the default icon
import { calcDistance } from "./Helpers/DistanceCalculation"; // function to calculate distance between two points
import { Helmet } from "react-helmet"; // needed to change the title of the page

// icon for the pin
let DefaultIcon = Leaflet.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});
Leaflet.Marker.prototype.options.icon = DefaultIcon;
// starting point
const center = {
  lat: 54.526,
  lng: 15.2551,
};

// let points = 1500;

function App() {
  const [cities, setCities] = useState(data.capitalCities); // array of capital cities
  const [position, setPosition] = useState(center); // starting position
  const [city, setCity] = useState(null); // random city
  const [selected, setSelected] = useState(center); // distance between the two points
  const [points, setPoints] = useState(1500); // starting points
  const [showRules, setShowRules] = useState(false); // show rules
  const [correctGuess, setCorrectGuess] = useState(0); // show cities

  const toggleRules = () => {
    setShowRules(!showRules);
  }; // toggle rules

  const handleCities = () => {
    const city = cities[Math.floor(Math.random() * cities.length)];
    console.log(`The city found is ${city.capitalCity}`);
    setCity(city);
  };

  useEffect(() => {
    if (points < 0) {
      alert("You lost");
    }
    if (typeof selected === "number") {
      setPoints(points - selected);
    }
  }, [selected]);

  // so we would know where the pin is and when the player confirms it it saves the coordinates and puts it in the HELPER function
  const handlePosition = () => {
    if (city) {
      const distance = calcDistance(
        +position.lat,
        +position.lng,
        +city.lat,
        +city.long
      );
      console.log(`The distance is ${distance}`);
      const newPoints = points - distance;
      if (newPoints < 0) {
        alert("GAME OVER");
      } else {
        setSelected(distance);
        if (distance < 50) {
          alert("Correct!");
          setCorrectGuess(correctGuess + 1);
        }
        setPoints(newPoints);
      }
    }
  };

  const handleResetPoints = () => {
    setPoints(1500);
  };
  return (
    <div className="App">
      <Helmet>
        <title>Capital City Guesser</title>
      </Helmet>
      <h1>Capital Cities</h1>
      <h2 onClick={toggleRules}>Game Rules</h2>
      {showRules && (
        <div className="rulesContainer">
          <p className="rules">
            The player will see a map of Europe without Streets + Cities (Only
            Country-borders). Its mission is to find the right location to the
            city name on this map. After placing the needle pin, the game will
            show you the right location of the city and the difference of your
            needle pin and the city in kilometers. If it is in around 50km of
            the city, the selection will be defined as "correct. -Please click
            on the pin to start and "Confirm" to confirm your position.
          </p>
        </div>
      )}
      <div className="citiesContainer">
        {city ? city.capitalCity : "No City Selected"}
      </div>
      <button onClick={handleCities}>Random City</button>
      <button onClick={handleResetPoints}>Reset Points</button>
      <p>
        {position.lat} , {position.lng}
      </p>
      <div className="map">
        <MapContainer
          center={center}
          zoom={5}
          scrollWheelZoom={false}
          style={{ height: "500px", width: "70%", margin: "0 auto" }}
        >
          <TileLayer
            attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://stamen-tiles-{s}.a.ssl.fastly.net/terrain-background/{z}/{x}/{y}{r}.png"
          />
          <DraggableMarker
            center={center}
            position={position}
            setPosition={setPosition}
          />
        </MapContainer>

        <button onClick={handlePosition} className="ready">
          Confirm
        </button>
        <div className="pointsContainer">
          <p className="points">Points: {Math.floor(points)}</p>
          <p className="points">Correct guesses: {correctGuess}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
