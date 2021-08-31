import './App.css';
import React, {useState} from 'react'

const App = () => {
  let date = String(new window.Date());
  var day = date.slice(3, 15);

  const api = {
    key: '553dcfa609cbc86a81ba1a5dba914ba8',
    base: 'https://openweathermap.org/data/2.5/'

  }
  const [query,
    setQuery] = useState('')
  const [weather,
    setWeather] = useState({})

    const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result);
        });
    }
  }

  // const search = async()=>{
  //   const url = `${api.base}weather?q=${query}&units=metric&APPID=${api.key}`;
  //   const response = await fetch(url);
  //   const resJson = await response.json();
  //   setWeather(resJson)
  // }

  // (typeof weather.main !=undefined)
  // ?((weather.main.temp > 16) ? 'app warm' : 'app'):'app' 
  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="search..."
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}/>
        </div>
        
      {(typeof weather.main != "undefined")?(

        <div>
          <div className="location-box">
            <div className="location">{weather.name}</div>
            <div className="date">{day}</div>
          </div>
          <div className="weather-box">
            <div className="temp">
              15C
            </div>
            <div className="weather">Sunny</div>
          </div>
        </div>

      ):('')

      }
        

      </main>
    </div>
  );
}

export default App;
