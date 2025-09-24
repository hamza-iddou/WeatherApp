import styles from './Weather.module.scss'
import { Card } from "react-bootstrap"
import location from "../../assets/img/weather/location-sign.png"
import weatherIcon from "../../assets/img/weather/weather.png"
import cloudy from "../../assets/img/weather/cloudy.png"
import fog from "../../assets/img/weather/fog.png"
import lightRain from "../../assets/img/weather/light-rain.png"
import photography from "../../assets/img/weather/photography.png"
import storm from "../../assets/img/weather/storm.png"
import sun from "../../assets/img/weather/sun.png"
import sunnyAndRain from "../../assets/img/weather/sunny-and-rain.png"
import umbrella from "../../assets/img/weather/umbrella.png"
import wind from "../../assets/img/weather/wind.png"
import clock from "../../assets/img/weather/clock.png"
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

const Weather = () => {
  const weather = useSelector((state) => state.weather)
  
  // Debug: Check what data we're receiving
  useEffect(() => {
    console.log('Weather data:', weather)
    if (weather.main) {
      console.log('Temperature data:', weather.main.temp)
      console.log('Feels like:', weather.main.feels_like)
    }
  }, [weather])

  // Get appropriate weather icon based on weather condition
  const getWeatherIcon = () => {
    if (!weather.weather || !weather.weather[0]) return weatherIcon;
    
    const main = weather.weather[0].main.toLowerCase();
    switch(main) {
      case 'clouds': return cloudy;
      case 'rain': return lightRain;
      case 'drizzle': return sunnyAndRain;
      case 'thunderstorm': return storm;
      case 'fog': case 'mist': case 'haze': return fog;
      case 'clear': return sun;
      default: return weatherIcon;
    }
  }

  // FIXED: Check if temperature is already in Celsius or needs conversion
  const formatTemp = (temp) => {
    if (!temp && temp !== 0) return '--';
    
    // If temperature is very low (like -249), it's likely already in Celsius
    // If temperature is around 200-320, it's likely in Kelvin
    if (temp > 150) {
      // Convert from Kelvin to Celsius
      return `${Math.round(temp - 273.15)}°C`;
    } else {
      // Already in Celsius
      return `${Math.round(temp)}°C`;
    }
  }

  // Format time from timestamp
  const formatTime = (timestamp) => {
    if (!timestamp) return '--:--';
    return new Date(timestamp * 1000).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
  }

  // Get greeting based on time of day
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 18) return 'Good Afternoon';
    return 'Good Evening';
  }

  // Format wind speed
  const formatWindSpeed = (speed) => {
    if (!speed && speed !== 0) return '-- m/s';
    return `${speed} m/s`;
  }

  // Check if weather data is loaded and valid
  const hasWeatherData = weather && weather.name && weather.main;

  if (!hasWeatherData) {
    return (
      <Card className={styles.container}>
        <Card.Body>
          <Card.Title>
            <img src={location} width={'40px'} height={'40px'} alt="location" /> Loading...
          </Card.Title>
          <div className="text-center">No weather data available</div>
        </Card.Body>
      </Card>
    )
  }

  return (
    <Card className={styles.container}>
      <Card.Body>
        <Card.Title>
          <img src={location} width={'40px'} height={'40px'} alt="location" /> 
          {weather.name}, {weather.sys?.country}
        </Card.Title>

        <div className="d-flex justify-content-center align-items-center mt-2">
          Last Update: {new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
          <img src={clock} width={'20px'} height={'20px'} className="ms-2" alt="clock" />
        </div>

        <Card.Text as={'div'} className={styles.weather_infos}>
          <img src={getWeatherIcon()} width={'100px'} height={'100px'} alt="weather" />

          <div className={styles.temp}>
            <img src={photography} width={'10%'} height={'10%'} alt="temp" /> 
            {formatTemp(weather.main.temp)}
          </div>

          <div>{getGreeting()} {weather.name}</div>

          <div className={styles.infos}>
            <div>
              <div>SUNRISE</div>
              <img src={sun} width={'20px'} height={'20px'} alt="sun" />
              <div>{formatTime(weather.sys?.sunrise)}</div>
            </div>

            <div>
              <div>WIND</div>
              <img src={wind} width={'20px'} height={'20px'} alt="wind" />
              <div>{formatWindSpeed(weather.wind?.speed)}</div>
            </div>

            <div>
              <div>FEELS LIKE</div>
              <img src={photography} width={'20px'} height={'20px'} alt="temp" />
              <div>{formatTemp(weather.main.feels_like)}</div>
            </div>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Weather