import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom" 
import './App.css'

import MainPage from './Components/MainPage/MainPage'
import Header from './Components/Utils/Header/Header'

function App() {

  return (
    <Router>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="Home" element={<MainPage />} />
      </Routes>
    </Router>
  )
}

export default App
