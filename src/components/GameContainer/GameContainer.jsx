import "./GameContainer.css"

import { useState } from 'react';
import KeyPadDisplay from "../KeyPadDisplay/KeyPadDisplay";
import KeyPad from "../KeyPad/KeyPad";

export default function GameContainer() {
    const [userInput, setUserInput] = useState('')
	function handleClick(val) {
		if (val === '<-') {
			setUserInput(userInput.slice(0, userInput.length - 1))
		} else {
			setUserInput(userInput.concat(val))
		}
    }

	function handleEnter() {
		console.log(userInput);
	}

    return (
        <div className="game-container">
			<KeyPad handleClick={handleClick} handleEnter={handleEnter} />
			<KeyPadDisplay userInput={userInput} setUserInput={setUserInput} />
        </div>
    )
}