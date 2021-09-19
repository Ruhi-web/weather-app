import './App.css';
import React, { useState } from 'react'
import Weather from './Weather';


const App = () => {

  let date = String(new window.Date());


  const [query, setQuery] = useState('dubai')
  const [weather, setWeather] = useState('')
  const [temp, setTemp] = useState('')


    const api = {
      key: 'aa8ed9f76f5f4edfaa583915211809',

    }

    const search = async (evt) => {

      const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${api.key}&q=${query}&aqi=no`)
      const data = await response.json()

      setWeather(data.location)
      setTemp(data.current)

      console.log(data.current.condition.text, data.location.name, data.location.country, data.current.temp_c, data.current.condition.icon)

      setQuery('')
    }




  return (

    <div className='app'>
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="search..."
            onChange={e => {
              e.preventDefault();
              setQuery(e.target.value)
            }}
            value={query}
            onKeyPress={e => {
              if (e.key === 'Enter') {
                 search()
                 }
            }} />
        </div>
        <Weather name={weather.name} date={date} country={weather.country} temp={temp.temp_c} text={temp.condition.text} />
      </main>
    </div>
  );
}

export default App;

{(!query) ? (<div style={{ fontSize: '3rem', color: "#b6b7c8", textAlign: 'center' }}> Please enter city </div>) :

(
  <Weather name={weather.location.name} date={date} country={weather.location.country} temp={weather.current.temp_c} text={weather.current.condition.text}  />)
}
