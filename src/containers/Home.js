import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import Header from "../components/Header";
import WeatherImage from "../components/WeatherImage";

import City from "../components/City"

function Home() {
  const history = useHistory();
  
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("Tokyo");

  useEffect(() => {
    // console.log(process.env.REACT_APP_WEATHER_KEY);
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_WEATHER_KEY}`
      )
      .then(function (response) {
        // Successful request
        const weather = response.data;
        setWeatherData(weather);
      })
      .catch(function (error) {
        // The best practice of coding is to not use console.log
        console.log(error);
      });
  }, [city]);

  useEffect(() => {
    const searchParams = history.location.search;
    const urlParams = new URLSearchParams(searchParams);
    const city = urlParams.get("city");
    if (city) {
      setCity(city);
    }
  }, [history]);

  const { currentTemp } = useMemo(() => {
    let currentTemp = "";
    if (weatherData) {
      currentTemp = `${Math.round(weatherData.main.temp)}°C`;
    }
    return {
      currentTemp,
    };
  }, [weatherData]);



  return (
    // Container

    <div className="flex flex-col h-screen bg-gradient-to-r from-blue-800 via-pink-600 to-yellow-800" > 
    <div class="container mx-auto px-4"></div>

    <City 
          cityName={"Seoul"}
          temp={"-27°C"}
          color={"bg-indigo-200 hover:bg-indigo-100"}

        />

    <City
          cityName={"Rovaniemi"}
          temp={"-2°C"}
          color={"bg-blue-200 hover:bg-blue-100"}

        />

    <City
          cityName={"Antartica"}
          temp={"-27°C"}
          color={"bg-purple-200 hover:bg-purple-100"}

        />
  
    <Header
          header={"Levina Lauwis"}
        />
    </div>    


  );
}

export default Home;