import Navbar from "../../components/navbar/Navbar";
import "./Home.css";
export default function Home({ getUser, user }) {
	return (
		<>
			<div className="home-container">
				<Navbar getUser={getUser} user={user} />
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
						<button className="home-button-play">PLAY</button>
					</div>
					<img src="" alt="Cow Mania" className="home-hero-image" />
				</main>
				<footer className="home-footer-container">
					<div className="hfg">
						<img src="" alt="Chicken Count" className="hfg-image" />
						<p className="hfg-description">Chicken Count</p>
					</div>
					<div className="hfg">
						<img src="" alt="Pigs in a Blanket" className="hfg-image" />
						<p className="hfg-description">Pigs in a Blanket</p>
					</div>
					<div className="hfg">
						<img src="" alt="Horse Roundup" className="hfg-image" />
						<p className="hfg-description">Horse Roundup</p>
					</div>
					<div className="hfg">
						<img src="" alt="Sleepy Sheep" className="hfg-image" />
						<p className="hfg-description">Sleepy Sheep</p>
					</div>
				</footer>
			</div>
		</>
	);
}
