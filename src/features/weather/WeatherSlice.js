import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    clouds : undefined, 
    main : undefined, 
    name : undefined, 
    sys : undefined, 
    weather : undefined,
     wind : undefined
}

export const WeatherSlice = createSlice({
    name : 'weather',
    initialState,
    reducers:{
        setData : (state, action) =>{
            const {clouds, main, name, sys, weather, wind} = action.payload
            state.clouds =  clouds
            state.main =  main
            state.name =  name
            state.sys =  sys
            state.weather =  weather
            state.wind =  wind

        }
    }
})

export const {setData} = WeatherSlice.actions

export default WeatherSlice.reducer