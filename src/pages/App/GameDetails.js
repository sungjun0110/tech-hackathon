import "./GameDetails.css";
import { Link } from "react-router-dom";
export default function GameDetails() {
	return (
		<div className="game-details-container">
			<div className="back-button-container">
				<img src="" alt="Back Button" className="back-button"></img>
			</div>
			<main className="game-details-main-container">
				<header className="game-details-header-container">
					<h1 className="game-details-subject">Addition</h1>
					<h3 className="game-details-game">Cow Mania</h3>
				</header>
				<section className="game-details-instructions">
					Let's learn addition! In this mission, you will simply add numbers.
					For each question you get correct, you will feed the cow. When the cow
					is full, it will join your farm! Let's get started!
				</section>
				<img src="" alt="Farm Animal" className="game-details-animal"></img>
				<Link to="/cowmania">
					<button className="game-details-start">Start Game</button>
				</Link>
			</main>
		</div>
	);
}
