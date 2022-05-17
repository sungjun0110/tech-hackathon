import "./Home.css";
import { Link } from "react-router-dom";
export default function Home() {
	return (
		<>
			<div className="home-container">
				<header className="home-header">
					<div className="home-title-image-container">
						<img
							src="https://i.imgur.com/VDvm14J.png"
							alt="Red Barn"
							className="home-title-image"
						></img>
					</div>
					<div className="home-title-container">
						<h1 className="home-title">Build-a-Farm</h1>
						<h3 className="home-sub">Math Problems</h3>
					</div>

					<div className="home-sign-block">
						<img
							src="https://i.imgur.com/v612Qmq.png"
							alt="Account Icon"
							className="home-sign-icon"
						></img>
						<div className=" home-sign-container">
							<p className="home-sign-in">Sign In</p>
							<p> / </p>
							<p className="home-sign-up">Sign Up</p>
						</div>
					</div>
				</header>
				<nav className="home-nav-container">
					<div className="home-grade-container">
						<div className="home-grade-button">
							<button className="button bk">K</button>
							<p>Kinder</p>
						</div>
						<div className="home-grade-button">
							<button className="button b1">1</button>
							<p>1st Grade</p>
						</div>
						<div className="home-grade-button">
							<button className="button b2">2</button>
							<p>2nd Grade</p>
						</div>
						<div className="home-grade-button">
							<button className="button b3">3</button>
							<p>3rd Grade</p>
						</div>
						<div className="home-grade-button">
							<button className="button b4">4</button>
							<p>4th Grade</p>
						</div>
						<div className="home-grade-button">
							<button className="button b5">5</button>
							<p>5th Grade</p>
						</div>
						<div className="home-grade-button">
							<button className="button b6">6</button>
							<p>6th Grade</p>
						</div>
					</div>
					<div className="home-subject-container">
						<button className="home-subject-button">Word Problems</button>
						<button className="home-subject-button">Addition</button>
						<button className="home-subject-button">Subtraction</button>
						<button className="home-subject-button">Multiplication</button>
						<button className="home-subject-button">Division</button>
						<button className="home-subject-button">Fractions</button>
						<button className="home-subject-button">Ratios</button>
					</div>
				</nav>
				<main className="home-main-container">
					<div className="home-hero-container">
						<div className="home-hero-title-container">
							<h2 className="home-hero-title">Cow Mania</h2>
							<p className="home-hero-description">
								Complete addition problems to feed the cow.
							</p>
						</div>
						<Link to="/gamedetails">
							<button className="home-button-play">Play</button>
						</Link>
					</div>
					<Link to="/gamedetails">
						<img
							src="https://i.imgur.com/SdgaoE0.png"
							alt="Cow Mania"
							className="home-hero-image"
						/>
					</Link>
				</main>
				<footer className="home-footer-container">
					<div className="home-footer-game">
						<img
							src="https://i.imgur.com/sCAiNJ7.png"
							alt="Chicken Count"
							className="home-footer-game-image"
						/>
						<p className="home-footer-game-description">Chicken Count</p>
					</div>
					<div className="home-footer-game">
						<img
							src="https://i.imgur.com/zYJxhH1.png"
							alt="Pigs in a Blanket"
							className="home-footer-game-image"
						/>
						<p className="home-footer-game-description">Pigs in a Blanket</p>
					</div>
					<div className="home-footer-game">
						<img
							src="https://i.imgur.com/UZjiHLR.png"
							alt="Horse Roundup"
							className="home-footer-game-image"
						/>
						<p className="home-footer-game-description">Horse Roundup</p>
					</div>
					<div className="home-footer-game">
						<img
							src="https://i.imgur.com/B3efP9p.png"
							alt="Sleepy Sheep"
							className="home-footer-game-image"
						/>
						<p className="home-footer-game-description">Sleepy Sheep</p>
					</div>
				</footer>
			</div>
		</>
	);
}
