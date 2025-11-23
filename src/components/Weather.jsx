// import React, { useEffect, useRef, useState } from 'react'
// import './Weather.css'
// import search_icon from '../assets/search.png'
// import clear_icon from '../assets/clear.png'
// import cloud_icon from '../assets/cloud.png'
// import drizzle_icon from '../assets/drizzle.png'
// import rain_icon from '../assets/rain.png'
// import snow_icon from '../assets/snow.png'
// import wind_icon from '../assets/wind.png'
// import humidity_icon from '../assets/humidity.png'
// import aqi_icon from '../assets/aqi.png'

// const Weather = () => {
//     const inputRef = useRef();
//     const [weatherData, setWeatherData] = useState(false);
//     const [aqiData, setAqiData] = useState(null);

//     const allIcons = {
//         "01d": clear_icon,
//         "01n": clear_icon,
//         "02d": cloud_icon,
//         "02n": cloud_icon,
//         "03d": cloud_icon,
//         "03n": cloud_icon,
//         "04d": drizzle_icon,
//         "04n": drizzle_icon,
//         "09d": rain_icon,
//         "09n": rain_icon,
//         "10d": rain_icon,
//         "10n": rain_icon,
//         "13d": snow_icon,
//         "13n": snow_icon
//     }

//     const getAQILevel = (aqi) => {
//         const levels = {
//             1: { label: 'Good', color: '#00e400' },
//             2: { label: 'Fair', color: '#ffff00' },
//             3: { label: 'Moderate', color: '#ff7e00' },
//             4: { label: 'Poor', color: '#ff0000' },
//             5: { label: 'Very Poor', color: '#8f3f97' }
//         };
//         return levels[aqi] || { label: 'Unknown', color: '#808080' };
//     };

//     const fetchAQI = async (lat, lon) => {
//         try {
//             const url = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_APP_ID}`;
//             const response = await fetch(url);
//             const data = await response.json();
            
//             if (response.ok && data.list && data.list.length > 0) {
//                 const aqi = data.list[0].main.aqi;
//                 const aqiInfo = getAQILevel(aqi);
//                 setAqiData({
//                     value: aqi,
//                     label: aqiInfo.label,
//                     color: aqiInfo.color
//                 });
//             }
//         } catch (error) {
//             console.error("Error fetching AQI data:", error);
//             setAqiData(null);
//         }
//     };

//     const search = async (city) => {
//         if (city === "") {
//             alert("Enter City Name!");
//             return;
//         }
//         try {
//             const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;
//             const response = await fetch(url);
//             const data = await response.json();

//             if (!response.ok) {
//                 alert(data.message);
//                 return;
//             }

//             const icon = allIcons[data.weather[0].icon] || clear_icon;
            
//             setWeatherData({
//                 humidity: data.main.humidity,
//                 windSpeed: data.wind.speed,
//                 temperature: Math.floor(data.main.temp),
//                 location: data.name,
//                 icon: icon
//             });

//             if (data.coord) {
//                 fetchAQI(data.coord.lat, data.coord.lon);
//             }

//         } catch (error) {
//             setWeatherData(false);
//             setAqiData(null);
//             console.error("Error in fetching data.")
//         }
//     }

//     useEffect(() => {
//         search("New Delhi");
//     }, []);

//     return (
//         <div className='weather'>
            
//             <div className="search-bar">
//                 <input 
//                     ref={inputRef} 
//                     type="text" 
//                     placeholder='Search' 
//                     onKeyDown={(e) => e.key === 'Enter' && search(inputRef.current.value)}
//                 />
//                 <img src={search_icon} alt="" onClick={() => search(inputRef.current.value)} />
//             </div>

//             {weatherData ? (
//                 <>
//                     <img src={weatherData.icon} alt="" className='weather-icon' />
//                     <p className='temperature'>{weatherData.temperature}°C</p>
//                     <p className='location'>{weatherData.location}</p>

//                     <div className="weather-data">

//                         {/* Humidity */}
//                         <div className="col">
//                             <img src={humidity_icon} alt="Humidity" />
//                             <div>
//                                 <span>Humidity</span>
//                                 <p>{weatherData.humidity}%</p>
//                             </div>
//                         </div>

//                         {/* Wind */}
//                         <div className="col">
//                             <img src={wind_icon} alt="Wind" />
//                             <div>
//                                 <span>Wind Speed</span>
//                                 <p>{weatherData.windSpeed} Km/h</p>
//                             </div>
//                         </div>

//                         {/* AQI */}
//                         <div className="col">
//                             <img src={aqi_icon} alt="AQI" className="aqi-icon" />
//                             <div>
//                                 {aqiData ? (
//                                     <>
//                                         <span>Air Quality</span>
//                                         <p 
//                                             className="aqi-value"
//                                             style={{ borderColor: aqiData.color }}
//                                         >
//                                             {aqiData.label}
//                                         </p>
//                                     </>
//                                 ) : (
//                                   <>
//                                   <span>Air Quality</span>
//                                         <p className="aqi-value">--</p>
//                                     </>
//                                 )}
//                             </div>
//                         </div>

//                     </div>
//                 </>
//             ) : null}

//         </div>
//     )
// }

// export default Weather
import React, { useEffect, useRef, useState } from 'react'
import './Weather.css'
import search_icon from '../assets/search.png'
import clear_icon from '../assets/clear.png'
import cloud_icon from '../assets/cloud.png'
import drizzle_icon from '../assets/drizzle.png'
import rain_icon from '../assets/rain.png'
import snow_icon from '../assets/snow.png'
import wind_icon from '../assets/wind.png'
import humidity_icon from '../assets/humidity.png'
import aqi_icon from '../assets/aqi.png'

const Weather = () => {
  const inputRef = useRef();
  const [weatherData, setWeatherData] = useState(false);
  const [aqiData, setAqiData] = useState(null);

  const allIcons = {
    "01d": clear_icon,
    "01n": clear_icon,
    "02d": cloud_icon,
    "02n": cloud_icon,
    "03d": cloud_icon,
    "03n": cloud_icon,
    "04d": drizzle_icon,
    "04n": drizzle_icon,
    "09d": rain_icon,
    "09n": rain_icon,
    "10d": rain_icon,
    "10n": rain_icon,
    "13d": snow_icon,
    "13n": snow_icon
  }

  const getAQILevel = (aqi) => {
    const levels = {
      1: { label: 'Good', color: '#00e400' },
      2: { label: 'Fair', color: '#ffff00' },
      3: { label: 'Moderate', color: '#ff7e00' },
      4: { label: 'Poor', color: '#ff0000' },
      5: { label: 'Very Poor', color: '#8f3f97' }
    };
    return levels[aqi] || { label: 'Unknown', color: '#808080' };
  };

  const fetchAQI = async (lat, lon) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_APP_ID}`;
      const response = await fetch(url);
      const data = await response.json();

      if (response.ok && data.list && data.list.length > 0) {
        const aqi = data.list[0].main.aqi;
        const aqiInfo = getAQILevel(aqi);
        setAqiData({
          value: aqi,
          label: aqiInfo.label,
          color: aqiInfo.color
        });
      } else {
        setAqiData(null);
      }
    } catch (error) {
      console.error("Error fetching AQI data:", error);
      setAqiData(null);
    }
  };

  const search = async (city) =>{
    if (!city || city.trim() === "") {
      alert("Enter City Name!");
      return;
    }
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;

      const response = await fetch(url);
      const data = await response.json();

      if (!response.ok) {
        alert(data.message || 'Failed to fetch weather');
        return;
      }

      const icon = allIcons[data.weather[0].icon] || clear_icon;
      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: Math.round(data.main.temp),
        location: data.name,
        icon: icon
      });

      if (data.coord) {
        fetchAQI(data.coord.lat, data.coord.lon);
      } else {
        setAqiData(null);
      }

    } catch (error) {
      setWeatherData(false);
      setAqiData(null);
      console.error("Error in fetching data.", error)
    }
  }

  useEffect(()=>{
    search("New Delhi");
  },[])

  return (
    <div className='weather'>
      {/* <div className="search-bar" role="search">
        <input
          ref={inputRef}
          type="text"
          placeholder='Search'
          aria-label="Search city"
          onKeyDown={(e) => {
            if (e.key === 'Enter') search(inputRef.current.value)
          }}
        />
        <img src={search_icon} alt="Search" onClick={()=>search(inputRef.current.value)}/>
      </div> */}
      <div className="search-bar">
  <div className="search-input-wrap">
    <input
      ref={inputRef}
      type="text"
      placeholder="Search"
      onKeyDown={(e) => e.key === "Enter" && search(inputRef.current.value)}
    />

    <button onClick={() => search(inputRef.current.value)}>
      <img src={search_icon} alt="Search"/>
    </button>
  </div>
</div>

      {weatherData ? (
        <>
          <img src={weatherData.icon} alt="Weather icon" className='weather-icon' />
          <p className='temperature'>{weatherData.temperature}°C</p>
          <p className='location'>{weatherData.location}</p>

          <div className="weather-data" role="list">
            <div className="col" role="listitem" aria-label="Humidity">
              <img src={humidity_icon} alt="Humidity icon" />
              <div>
                <span>Humidity</span>
                <p>{weatherData.humidity}%</p>
              </div>
            </div>

            <div className="col" role="listitem" aria-label="Wind speed">
              <img src={wind_icon} alt="Wind icon" />
              <div>
                <span>Wind Speed</span>
                <p>{weatherData.windSpeed} Km/h</p>
              </div>
            </div>

            <div className="col" role="listitem" aria-label="Air quality">
              <img src={aqi_icon} alt="Air quality icon" className="aqi-icon" />
              <div>
                {aqiData ? (
                  <>
                      <span>Air Quality</span>
                    <p
                      className="aqi-value"
                      /* optional inline border to reflect aqi color but not necessary */
                      style={{ borderColor: aqiData.color ? aqiData.color : 'rgba(255,255,255,0.08)' }}
                    >
                      {aqiData.label}
                    </p>
                  </>
                ) : (
                  <>
                    <span>Air Quality</span>
                    <p className="aqi-value">--</p>
                  </>
                )}
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  )
}

export default Weather