import styles from './Weather.module.scss'
import { Card } from "react-bootstrap"




const Weather = () => {
  return (
    <>
        <Card className={'text-center'}>
            <Card.Body>
                <Card.Title>Casablanca , Ma</Card.Title>
                <Card.Text>
                    <div>Image</div>
                    <div>35°C</div>
                    <div>Last Update : 15:22</div>
                </Card.Text>
            </Card.Body>
        </Card>
    </>
  )
}

export default Weather