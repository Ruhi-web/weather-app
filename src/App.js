import './App.css';
import React, { useState } from 'react'
import Weather from './Weather';


const App = () => {

  let date = String(new window.Date());


  const [query, setQuery] = useState('')
  const [weather, setWeather] = useState({})


    const api = {
      key: 'aa8ed9f76f5f4edfaa583915211809',

    }

    const search = (evt) => {
      if (evt.key === "Enter") {
        fetch(`https://api.weatherapi.com/v1/current.json?key=${api.key}&q=${query}&aqi=no`)
          .then(res => res.json())
          .then(result => {
            setWeather(result);
            setQuery('');
            console.log(result);
          });
      }
     
    }

  return (

    <div className={(typeof weather.location != "undefined") ? ((weather.current.temp_c > 16) ? 'app warm' : 'app') : 'app'}>
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="search..."
            onChange={e => {
              setQuery(e.target.value)
            }}
            value={query}
            onKeyPress={search}
            />
        </div>
        {(typeof weather.location != "undefined") ?(  <Weather name={weather.location.name} date={date} country={weather.location.country} temp={weather.current.temp_c} text={weather.current.condition.text}  />): (<div style={{ fontSize: '3rem', color: "#b6b7c8", textAlign: 'center' }}> Please enter city </div>)

}
      </main>
    </div>
  );
}

export default App;
