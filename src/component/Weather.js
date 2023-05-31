import React from 'react'
// import Card from './Card'
// import axios from 'axios'
import {useState} from 'react'
const Weather = () => {
  const [city,setCity] = useState("");

    const handleClick =()=>{
     window.location = `/card/${city}`
    }
  return (
    <>
      
    <style>
        {`

        
      * {
        box-sizing: border-box;
      }
      body {
        margin: 0;
        padding: 0;
        font-family: Arial, sans-serif;
        background-color: #000;
      }
      .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        height: 100vh;
      }
      .search-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        max-width: 700px;
        padding: 20px;
        background-color: #f5f5f5;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
        border-radius: 10px;
      }
      .search-box input[type="text"] {
        width: 100%;
        max-width: 1000px;
        padding: 10px;
        padding-left:150px;
        padding-right:150px;
        border-radius: 5px;
        border: none;
        margin-bottom: 20px;
        font-size: 16px;
      }
      .weather-info {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-top: 20px;
      }
      .weather-info .card {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        max-width: 200px;
        margin: 10px;
        padding: 20px;
        background-color: #f5f5f5;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
        border-radius: 10px;
      }
      .weather-info .card h2 {
        margin-bottom: 10px;
        font-size: 24px;
      }
      .weather-info .card p {
        font-size: 16px;
      }
      @media screen and (min-width: 768px) {
        .search-box {
          margin-right: 20px;
        }
        .weather-info {
          margin-top: 0;
        }
      }
    `}
    </style>
  
      <div className="search-box">
        <h1>Weather App</h1>
        <input type="text"  onChange={e => setCity(e.target.value)} name="city" value={city} className="form-control" id="city" placeholder="Enter city name" />
        <button onClick={handleClick}>Search</button>
      </div>
      <div className="weather-info"></div>

 

    </>
  )
}

export default Weather
