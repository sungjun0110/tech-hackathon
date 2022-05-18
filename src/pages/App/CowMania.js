import FoodBar from "../../components/FoodBar/FoodBar";
import GameContainer from "../../components/GameContainer/GameContainer";
import "./CowMania.css";
import { SessionContext } from "./App";
import { useContext } from "react";
export default function CowMania() {
	const { winCondition } = useContext(SessionContext);
	return (
		<>
			<div className="cowmania-page">
				<div className="cowmania-container">
					<div className="cowmania-gamecontainer">
						<GameContainer />
					</div>
					<div className="cowmania-foodbar">
						<FoodBar />
					</div>
				</div>
			</div>
		</>
	);
}
