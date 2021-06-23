import React, { useEffect, useState } from "react";


function WeatherCard({ weatherData }) {
  
  const { dt, description, mainTemp, feelsLike, iconID } = weatherData;
  const date = new Date(dt*1000);

  return (
    <div className="container-fluid">
      <div
        className="card shadow rounded"
        style={{ width: "15rem", textAlign: "center" }}
      >
        <img
          src={`http://openweathermap.org/img/wn/${iconID}@2x.png`}
          className="card-img-top mx-auto"
          style={{ width: "10rem" }}
        ></img>
        <div className="card-body">
          <h4 className="card-text">{description}</h4>
          <p className="card-text"> {date.toLocaleDateString()}</p>
          <p className="card-text">Main Temperature: {mainTemp} &deg;C</p>
          <p className="card-text">Feels Like: {feelsLike} &deg;C</p>
        </div>
      </div>
    </div>
  )
}

export default WeatherCard;
