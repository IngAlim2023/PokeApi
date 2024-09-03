import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { PrimerPag } from './pages/PrimerPag'

function App() {
  

  return (
    <BrowserRouter>
      <PrimerPag/>    
    </BrowserRouter>
  )
}

export default App
