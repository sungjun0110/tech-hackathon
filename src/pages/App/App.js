<<<<<<< HEAD
import GameDetails from "./GameDetails";
import CowMania from "./CowMania";
import ComingSoon from "./ComingSoon";
import RewardModal from "../../components/RewardModal/RewardModal";
import "./App.css";
import { useState, useContext, createContext } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import "./App.css";
=======
import GameDetails from './GameDetails'
import CowMania from './CowMania'
import ComingSoon from './ComingSoon'
import './App.css'
import { useState, useContext, createContext } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import './App.css'
>>>>>>> 79497924e88c1e6850c14ca0bed71cd1823a79b6

export const SessionContext = createContext(null)
function App() {
<<<<<<< HEAD
	const [winCondition, setWinCondition] = useState(false);
	const [farmFood, setFarmFood] = useState(0);
	const [userResult, setUserResult] = useState();
	return (
		<SessionContext.Provider
			value={{
				farmFood,
				setFarmFood,
				userResult,
				setUserResult,
				winCondition,
				setWinCondition,
			}}
		>
			<>
				<div className="App">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/gamedetails" element={<GameDetails />} />
						<Route path="/cowmania" element={<CowMania />} />
						<Route path="/winscreen" element={<RewardModal />} />
						<Route path="/*" element={<ComingSoon />} />
					</Routes>
				</div>
			</>
		</SessionContext.Provider>
	);
=======
  const [farmFood, setFarmFood] = useState(0)
  const [userResult, setUserResult] = useState()
  return (
    <SessionContext.Provider
      value={{ farmFood, setFarmFood, userResult, setUserResult }}
    >
      <>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gamedetails" element={<GameDetails />} />
            <Route path="/cowmania" element={<CowMania />} />
            <Route path="/*" element={<ComingSoon />} />
          </Routes>
        </div>
      </>
    </SessionContext.Provider>
  )
>>>>>>> 79497924e88c1e6850c14ca0bed71cd1823a79b6
}

export default App
