import GameDetails from './GameDetails'
import CowMania from './CowMania'
import ComingSoon from './ComingSoon'
import './App.css'
import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import RewardModal from './RewardModal'
import './App.css'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gamedetails" element={<GameDetails />} />
        <Route path="/cowmania" element={<CowMania />} />
        <Route path="/*" element={<ComingSoon />} />
      </Routes>
      <RewardModal />
    </div>
  )
}

export default App
