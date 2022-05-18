import GameDetails from "./GameDetails";
import CowMania from "./CowMania";
import ComingSoon from "./ComingSoon";
import "./App.css";
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import "./App.css";
import KeyPad from "../../components/KeyPad/KeyPad";

function App() {
  const [user, setUser] = useState();

  function getUser (newUser) {
    setUser(newUser);
  }

	return (
		<div className="App">
			<Routes>
				<Route path='/' element={<Home getUser={getUser} user={user} />} />
				<Route path="/gamedetails" element={<GameDetails />} />
				<Route path="/cowmania" element={<CowMania />} />
				<Route path="/*" element={<Home />} />
			</Routes>
		</div>
	);
}

export default App;
