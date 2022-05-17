import "./GameContainer.css"
import { useState } from 'react';
import KeyPadDisplay from "../KeyPadDisplay/KeyPadDisplay";
import KeyPad from "../KeyPad/KeyPad";

export default function GameContainer() {
    const [userInput, setUserInput] = useState('')
	const [num1, setNum1] = useState(generateNums())
    const [num2, setNum2] = useState(generateNums())

    function generateNums() {
        return Math.floor(Math.random() * 10);
    }

	function handleClick(val) {
		if (val === '<-') {
			setUserInput(userInput.slice(0, userInput.length - 1))
		} else {
			setUserInput(userInput.concat(val))
		}
    }

	function handleEnter() {
		// console.log(userInput);
		console.log(num1 + num2 === parseInt(userInput))
	}

    return (
        <div className="game-container">
			<KeyPad handleClick={handleClick} handleEnter={handleEnter} />
			<KeyPadDisplay userInput={userInput} setUserInput={setUserInput} num1={num1} num2={num2} />
        </div>
    )
}