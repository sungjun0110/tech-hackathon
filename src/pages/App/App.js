import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import './App.css';
import KeyPad from '../../components/KeyPad/KeyPad';

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Home />} />
			</Routes>
		</div>
	);
}

export default App;
