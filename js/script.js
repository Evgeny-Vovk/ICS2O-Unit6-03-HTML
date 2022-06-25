// Copyright (c) 2022 Evgeny All rights reserved
//
// Created by: Evgeny
// Created on: Apr 2022
// This file contains the JS functions for index.html

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit6-03-HTML/sw.js", {
    scope: "/ICS2O-Unit6-03-HTML/",
  })
}

/**
 * Get API info.
*/
const getWeather = async (URLAddress) => {
  try {
    const result = await fetch(URLAddress)
    const jsonData = await result.json()
    console.log(jsonData.main.temp)
    const temperature = jsonData.main.temp - 273.15
    const symbol = jsonData.weather[0].icon
    const description = jsonData.weather[0].description
    document.getElementById("weather").innerHTML = "The current weather is " + temperature.toFixed(0) + "°C " + "with " + description + "<img src='https://openweathermap.org/img/wn/" + symbol + "@2x.png' alt='Weather Icon' width='100' height='100'>"
  } catch (err) {
    console.log(err)
    document.getElementById("weather").innerHTML = "Error fetching current weather."
  }
}

getWeather("https://api.openweathermap.org/data/2.5/weather?lat=45.4211435&lon=-75.6900574&appid=fe1d80e1e103cff8c6afd190cad23fa5")
