import React from 'react'
import axios from 'axios'
import { useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';

const  Card = () => {
  // e.preventDefault()
  const {city} = useParams()
  console.log({city})
  const [weatherr,setWeather]=useState([]);
  const API = "aec081cc61b3881e60b6a51523269abc"
  useEffect(() => {
    try{
      // eslint-disable-next-line
         axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}`)
          .then((response) => {
            setWeather(response.data);
            console.log("Weather data =>",response.data);
            console.log("Weather data =>",response.data.base);
            console.log("Weather data =>",response.data.main.temp);
          });
      
    }catch(err){
      console.log(err)
    }
  },[city]);
    
    


      
  return (
    <>
    
    <style>
      {`

body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    background-color: #000;
  }
         .weather-card {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 300px;
            height: 400px;
            padding: 20px;
            background-color: #fff;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
            border-radius: 10px;
            margin-left:39vw;
            margin-top:10vw;
          }
          
          .weather-icon img {
            width: 100px;
            height: 100px;
          }
          
          .weather-info {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            width: 100%;
            margin-top: 20px;
          }
          
          .weather-info div {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 10px;
          }
          
          .weather-info h2 {
            font-size: 36px;
            font-weight: 700;
            color: #333;
            text-align: center;
            margin: 0;
          }
          
          .weather-info p {
            font-size: 18px;
            font-weight: 400;
            color: #666;
            text-align: center;
            margin: 0;
          }
          
      `}
     
    </style>
  
    <div className="weather-card">
      <div className="weather-icon">
      
      <h2>{weatherr.name}</h2>
          <p>City</p>
        <img src="https://www.weatherbit.io/static/img/icons/c01d.png" alt="Weather Icon"/>
      </div>
      <div className="weather-info">
        <div className="temp">
           {/* <h2>{weatherr[0].main[0].temp}</h2> */}
        
          <p>Temperature</p>
        </div>
        <div className="precipitation">
           {/* <h2>{weatherr[0].main[0].feels_like}</h2> */}
         
          <p>Feels Like</p>
        </div>
        <div className="humidity">
          {/* <h2>{weatherr[0].main[0].humidity}</h2> */}
          
          <p>Humidity</p>
        </div>
        <div className="wind">
          {/* <h2>{weatherr[0].wind[0].speed}</h2> */}
         
          <p>Wind Speed</p>
        </div>
      </div>
    </div>
    
 

    </>
  )
}

export default Card
