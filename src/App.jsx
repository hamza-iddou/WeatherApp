import { useState } from 'react'
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import SearchBar from './components/SearchBar/SearchBar'
import WallPaper from './components/Wallpaper/WallPaper'
import Weather from './components/Weather/Weather'
import {Container} from "react-bootstrap"
import './style.scss'
import './App.module.scss'

function App() {


  return (
    <>
          <WallPaper/>
          <Container>
          <SearchBar/>
          <Weather/>
          </Container>
          </>
  )
}

export default App
