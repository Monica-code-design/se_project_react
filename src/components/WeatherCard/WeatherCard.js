import "./WeatherCard.css";
import { weatherOptions } from "../../utils/constants";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import React, { useContext } from "react";

const WeatherCard = ({ weatherTemp = "" }) => {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  // Determine whether it's day or night
  const now = new Date();
  const isDay = now.getHours() >= 6 && now.getHours() <= 18;

  // Determine the weather type based on the input temperature
  let type;
  if (weatherTemp >= 80) {
    type = "sunny";
  } else if (weatherTemp >= 60) {
    type = "cloudy";
  } else if (weatherTemp >= 40) {
    type = "fog";
  } else if (weatherTemp >= 32) {
    type = "rain";
  } else {
    type = "snow";
  }

  // Find the weather option that matches type and day
  const weatherOption = weatherOptions.find(
    (item) => item.type === type && item.day === isDay
  );

  // If weatherOption exists, use its URL; otherwise, provide a default URL
  const imagesrcUrl = weatherOption ? weatherOption.url : "";

  return (
    <section className="weather" id={type}>
      <div className="weather__info">
        {weatherTemp}°{currentTemperatureUnit}
      </div>
      <img src={imagesrcUrl} className="weather__image" alt="weather display" />
    </section>
  );
};

export default WeatherCard;
