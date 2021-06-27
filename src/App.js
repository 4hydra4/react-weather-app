import WeatherCard from "./components/WeatherCard";
import CitySelector from "./components/CitySelector";
import "./App.css";
import { useEffect, useState } from "react";
import { API_KEY } from "./apis/config";

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

  const fetchAPI = async (city) => {
    const result = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
    );
    const res = await result.json();
    // console.log(res);

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
    // console.log(data);
    if (data.length) {
      setWeatherData(data);
    }

    // data.forEach(element => {
    //   setWeatherList([...weatherList, element])
    // });

    // setWeatherList(weatherList.push(data));

 
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
