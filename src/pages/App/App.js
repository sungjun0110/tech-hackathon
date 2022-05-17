import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import './App.css';

function App() {
  const [user, setUser] = useState();

  function getUser (newUser) {
    setUser(newUser);
  }

	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Home getUser={getUser} user={user} />} />
			</Routes>
		</div>
	);
}

export default App;
