import WeatherCard from "./components/WeatherCard";
import CitySelector from "./components/CitySelector";
import "./App.css";
import { useEffect, useState } from "react";
import { API_KEY } from "./apis/config";

function App() {

  const [ weatherData, setWeatherData ] = useState('');

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
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    const res = await result.json();
  
    // const data = [
    //   {
    //     feelsLike: res.main.feels_like,
    //     mainTemp: res.main.temp,
    //     description: res.weather[0].description,
    //     iconID: res.weather[0].icon
    //   },
    //   {
    //     feelsLike: res.main.feels_like,
    //     mainTemp: res.main.temp,
    //     description: res.weather[0].description,
    //     iconID: res.weather[0].icon
    //   },
    //   {
    //     feelsLike: res.main.feels_like,
    //     mainTemp: res.main.temp,
    //     description: res.weather[0].description,
    //     iconID: res.weather[0].icon
    //   }
    // ]
    if (res) {
      setWeatherData({
        dt: res.dt,
        feelsLike: res.main.feels_like,
        mainTemp: res.main.temp,
        description: res.weather[0].description,
        iconID: res.weather[0].icon
      });
    }
  };


  return (
    <div className="App">
      <CitySelector fetchAPI={fetchAPI}/>
      { weatherData && <WeatherCard weatherData={weatherData}/> }
      {/* {data.map((dataEntry) => {
        return (
          <WeatherCard weatherData={dataEntry} />
        )
      })} */}
    </div>
  );
}

export default App;