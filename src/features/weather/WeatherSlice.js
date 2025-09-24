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
            state =  action.payload
        }
    }
})

export const {setData} = WeatherSlice.actions

export default WeatherSlice.reducer