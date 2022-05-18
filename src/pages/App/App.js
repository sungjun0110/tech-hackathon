import GameDetails from "./GameDetails";
import CowMania from "./CowMania";
import ComingSoon from "./ComingSoon";
import "./App.css";
import { useState, useContext, createContext } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import "./App.css";

export const SessionContext = createContext(null);
function App() {
	const [farmFood, setFarmFood] = useState(0);
	const [userResult, setUserResult] = useState();
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
	);
}

export default App;
