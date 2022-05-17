import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import GameDetails from "./GameDetails";
import CowMania from "./CowMania";
import "./App.css";
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import "./App.css";
import KeyPad from "../../components/KeyPad/KeyPad";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/gamedetails" element={<GameDetails />} />
				<Route path="/cowmania" element={<CowMania />} />
			</Routes>
		</div>
	);
}

export default App;
