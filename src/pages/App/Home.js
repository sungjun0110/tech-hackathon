export default function Home() {
	return (
		<>
			<div className='home-container'>
				<header className='home-header'>
					<div className='home-title-container'>
						<h1 className='home-title'>Build-a-Farm</h1>
						<h3 className='home-sub'>Math Problems</h3>
					</div>
					<div className='home-title-container'>
						<p className='home-sign'>Sign Up</p>
						<p className='home-sign'>Sign In</p>
					</div>
				</header>
				<nav className='home-nav-container'>
					<div className='home-grade-container'>
						<div className='home-grade-button'>
							<button className='button'>K</button>
							<p>Kinder</p>
						</div>
						<div className='home-grade-button'>
							<button className='button'>1</button>
							<p>1st Grade</p>
						</div>
						<div className='home-grade-button'>
							<button className='button'>2</button>
							<p>2nd Grade</p>
						</div>
						<div className='home-grade-button'>
							<button className='button'>3</button>
							<p>3rd Grade</p>
						</div>
						<div className='home-grade-button'>
							<button className='button'>4</button>
							<p>4th Grade</p>
						</div>
						<div className='home-grade-button'>
							<button className='button'>5</button>
							<p>5th Grade</p>
						</div>
						<div className='home-grade-button'>
							<button className='button'>6</button>
							<p>6th Grade</p>
						</div>
					</div>
					<div>
						<button className='home-subject-button'>Word Problems</button>
						<button className='home-subject-button'>Addition</button>
						<button className='home-subject-button'>Subtraction</button>
						<button className='home-subject-button'>Multiplication</button>
						<button className='home-subject-button'>Division</button>
						<button className='home-subject-button'>Fractions</button>
						<button className='home-subject-button'>Ratios</button>
					</div>
				</nav>
				<main className='home-main-container'>
					<div className='home-hero-container'>
						<h2 className='home-hero-title'>Cow Mania</h2>
						<img src='' alt='Cow Mania' className='home-hero-image' />
						<p className='home-hero-description'>
							Complete addition problems to feed the cow.
						</p>
					</div>
					<button className='home-button-play'>PLAY</button>
				</main>
				<footer className='home-footer-container'>
					<div className='hfg'>
						<img src='' alt='Chicken Count' className='hfg-image' />
						<p className='hfg-description'>Chicken Count</p>
					</div>
					<div className='hfg'>
						<img src='' alt='Pigs in a Blanket' className='hfg-image' />
						<p className='hfg-description'>Pigs in a Blanket</p>
					</div>
					<div className='hfg'>
						<img src='' alt='Horse Roundup' className='hfg-image' />
						<p className='hfg-description'>Horse Roundup</p>
					</div>
					<div className='hfg'>
						<img src='' alt='Sleepy Sheep' className='hfg-image' />
						<p className='hfg-description'>Sleepy Sheep</p>
					</div>
				</footer>
			</div>
		</>
	);
}
