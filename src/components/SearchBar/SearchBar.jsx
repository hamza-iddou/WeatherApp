import { Button, Form } from "react-bootstrap"
import styles from "./SearchBar.module.scss"
import { Autocomplete, TextField } from "@mui/material"
import { useState } from "react"

const SearchBar = () => {
    const [cities, setCities] = useState([])
    const [selectedCity, setSelectedCity] = useState(null)

    const handleInputChange = (e) => {
        const { value } = e.currentTarget
        
        
        if (value.length < 2) {
            setCities([])
            return
        }

        fetch(`https://api.geoapify.com/v1/geocode/autocomplete?text=${value}&format=json&apiKey=c56caf8bb95d46269082973b4092bde6`)
            .then(response => response.json())
            .then(json => {
              
                if (json.results) {
                    const cityData = json.results.map((data) => {
                        const { country, state, city, lat, lon } = data
                        return { country, state, city, lat, lon }
                    })
                    setCities(cityData)
                }
            })
            .catch(error => {
                console.error('Error fetching cities:', error)
                setCities([])
            })
    }

    const handleAutoCompleteSelect = (event, value) => {
        setSelectedCity(value)
        
        if (value && value.city) {
            fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${value.city}&appid=a44cfbe0a53f4f9d07d1c047935977f0`)
                .then(response => response.json())
                .then(weatherData => {
                    console.log('Weather data:', weatherData)
                    
                })
                .catch(error => {
                    console.error('Error fetching weather:', error)
                })
        }
    }

    const handleSearchClick = () => {
        if (selectedCity) {
            handleAutoCompleteSelect(null, selectedCity)
        }
    }

    return (
        <Form>
            <Form.Group className={`${styles.searchContainer} d-flex`}>
                <Autocomplete 
                    className={`${styles.searchInput} flex-grow-1`}
                    clearOnBlur={false} 
                    getOptionLabel={(option) => {
                        
                        if (option.city) {
                            return `${option.city}${option.state ? `, ${option.state}` : ''}${option.country ? `, ${option.country}` : ''}`
                        }
                        return option.state || '' 
                    }}
                    onChange={handleAutoCompleteSelect}
                    options={cities}
                    renderInput={(params) => (
                        <TextField 
                            {...params} 
                            onChange={handleInputChange} 
                            label="Enter your City..." 
                        />
                    )}
                />
                <Button 
                    variant="primary" 
                    size="sm" 
                    onClick={handleSearchClick}
                    className="ms-2"
                >
                    Search
                </Button>
            </Form.Group>
        </Form>
    )
}

export default SearchBar