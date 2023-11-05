import "./WeatherCard.css";
import { weatherOptions } from "../../utils/constants";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import React, { useContext } from "react";

const WeatherCard = ({ day, type, weatherTemp = "" }) => {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const weatherOption = weatherOptions.filter((item) => {
    return item.day === day && item.type === type;
  });

  const imagesrcUrl = weatherOption[0].url || "";

  return (
    <section className="weather" id="type">
      <div className="weather__info">
        {weatherTemp}°{currentTemperatureUnit}
      </div>
      <img src={imagesrcUrl} className="weather__image" alt="weather display" />
    </section>
  );
};
export default WeatherCard;
