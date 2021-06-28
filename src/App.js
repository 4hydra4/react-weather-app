import WeatherCard from "./components/WeatherCard";
import CitySelector from "./components/CitySelector";
import "./App.css";
import { useState } from "react";

function App() {
  const [weatherData, setWeatherData] = useState([]);

  // useEffect(() => {
  //   async function fetchAPI() {
  //     const result = await fetch(
  //       `http://api.openweathermap.org/data/2.5/weather?q=Vadodara&appid=${API_KEY}&units=metric`
  //     );
  //     const res = await result.json();
  //     console.log(res);
  //     setFeelsLike(res.main.feels_like);
  //     setMainTemp(res.main.temp);
  //     setDescription(res.weather[0].description);
  //     setIconID(res.weather[0].icon);
  //   }
  //   fetchAPI();
  // }, []);
  const API_KEY = process.env.REACT_APP_API_KEY;

  const fetchAPI = async (city) => {
    try {
      const result = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
      );
      const res = await result.json();
      const data = [];
      for (let i = 0; i <= 32; i += 8) {
        data.push({
          dt: res.list[i].dt,
          feelsLike: res.list[i].main.feels_like,
          mainTemp: res.list[i].main.temp,
          description: res.list[i].weather[0].description,
          iconID: res.list[i].weather[0].icon,
        });
      }
      if (data.length) {
        setWeatherData(data);
      }
    } catch (err) {
      alert("Enter a valid city name!");
    }

    // console.log(res);
    // if (res) {
    //   setWeatherData({
    //     dt: res.list[0].dt,
    //     feelsLike: res.list[0].main.feels_like,
    //     mainTemp: res.list[0].main.temp,
    //     description: res.list[0].weather[0].description,
    //     iconID: res.list[0].weather[0].icon
    //   });
  };

  console.log(weatherData);
  return (
    <div className="App">
      <CitySelector fetchAPI={fetchAPI} />
      {/* { weatherData && <WeatherCard weatherData={weatherData}/> } */}
      <div className="weatherList">
        {weatherData.length > 0 &&
          weatherData.map((dataEntry, index) => {
            return <WeatherCard key={index} weatherData={dataEntry} />;
          })}
      </div>
    </div>
  );
}

export default App;
