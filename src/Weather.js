import React from 'react'

const Weather=({name, date, country, temp, text})=> {
    return (
        <div>
        <div className="location-box">
        <div className="location">{name}
          <br /> <span style={{ 'fontSize': '2rem' }}>{country}</span>
        </div>
        <div className="date">{date}</div>
      </div>
      <div className="weather-box">
        <div className="temp">
          {temp}°C
        </div>
        <div className="weather">{text}</div>
      </div> 
        </div>
    )
}

export default Weather
