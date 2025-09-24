// Updated weatherSlice.js
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    clouds: undefined, 
    main: {
        temp: undefined,
        feels_like: undefined,
    }, 
    name: undefined, 
    sys: {
        country: undefined,
        sunrise: undefined,
        sunset: undefined
    }, 
    weather: undefined,
    wind: {
        speed: undefined
    }
}

export const WeatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        setData: (state, action) => {
            state.clouds = action.payload.clouds || undefined;
            state.main = {
                temp: action.payload.main?.temp,
                feels_like: action.payload.main?.feels_like
            };
            state.name = action.payload.name || undefined;
            state.sys = {
                country: action.payload.sys?.country,
                sunrise: action.payload.sys?.sunrise,
                sunset: action.payload.sys?.sunset
            };
            state.weather = action.payload.weather || undefined;
            state.wind = {
                speed: action.payload.wind?.speed
            };
        }
    }
})

export const { setData } = WeatherSlice.actions
export default WeatherSlice.reducer