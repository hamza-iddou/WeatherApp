import { useState } from 'react'
import { Button } from 'react-bootstrap'
import './style.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import SearchBar from './components/SearchBar/SearchBar'
import WallPaper from './components/Wallpaper/WallPaper'
import Weather from './components/Weather/Weather'
import {Container} from "react-bootstrap"
import './App.module.scss'
import  {store} from "./app/store"
import { Provider } from "react-redux" 
function App() {


  return (
    <>
      <Provider store={store}>
        <WallPaper/>
          <Container>
          <SearchBar/>
          <Weather/>
          </Container>
      </Provider>
          
          </>
  )
}

export default App
