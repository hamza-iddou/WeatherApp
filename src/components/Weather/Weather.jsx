import styles from './Weather.module.scss'
import { Card } from "react-bootstrap"
import location from "../../assets/img/weather/location-sign.png"
import weather from "../../assets/img/weather/weather.png"
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

const Weather = () => {
  return (
    <Card className={styles.container}>
      <Card.Body>
        <Card.Title>
          <img src={location} width={'40px'} height={'40px'} alt="location" /> Casablanca, MA
        </Card.Title>

        <div className="d-flex justify-content-center align-items-center mt-2">
          Last Update: 15:22 <img src={clock} width={'20px'} height={'20px'} className="ms-2" alt="clock" />
        </div>

        <Card.Text as={'div'} className={styles.weather_infos}>
          <img src={weather} width={'100px'} height={'100px'} alt="weather" />

          <div className={styles.temp}>
            <img src={photography} width={'10%'} height={'10%'} alt="temp" /> 35°C
          </div>

          <div>Good Morning Casablanca</div>

          <div className={styles.infos}>
            <div>
              <div>SUNRISE</div>
              <img src={sun} width={'20px'} height={'20px'} alt="sun" />
              <div>08:00</div>
            </div>

            <div>
              <div>WIND</div>
              <img src={wind} width={'20px'} height={'20px'} alt="wind" />
              <div>08 m/s</div>
            </div>

            <div>
              <div>TEMP</div>
              <img src={photography} width={'20px'} height={'20px'} alt="temp" />
              <div>35°C</div>
            </div>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Weather
