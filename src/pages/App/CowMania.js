import FoodBar from "../../components/FoodBar/FoodBar";
import GameContainer from "../../components/GameContainer/GameContainer";
import "./CowMania.css";
export default function CowMania() {
	return (
		<div className="cowmania-page">
			<div className="cowmania-container">
				<div className="cowmania-gamecontainer">
					<GameContainer />
				</div>
				<div cowmania-foodbar>
					<FoodBar />
				</div>
			</div>
		</div>
	);
}
