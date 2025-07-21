import { useState } from 'react'
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import SearchBar from './components/SearchBar/SearchBar'
import WallPaper from './components/Wallpaper/WallPaper'
import './style.scss'
import './App.scss'

function App() {


  return (
    <>
          <WallPaper/>
          <SearchBar/>
          </>
  )
}

export default App
