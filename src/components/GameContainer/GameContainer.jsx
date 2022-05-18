import "./GameContainer.css";
import { useState, useContext } from "react";
import KeyPadDisplay from "../KeyPadDisplay/KeyPadDisplay";
import KeyPad from "../KeyPad/KeyPad";
import { SessionContext } from "../../pages/App/App";

export default function GameContainer() {
	const { setUserResult } = useContext(SessionContext);
	const [userInput, setUserInput] = useState("");
	const [num1, setNum1] = useState(generateNums());
	const [num2, setNum2] = useState(generateNums());

	function generateNums() {
		return Math.floor(Math.random() * 10);
	}

	function handleClick(val) {
		if (val === "<-") {
			setUserInput(userInput.slice(0, userInput.length - 1));
		} else {
			setUserInput(userInput.concat(val));
		}
	}

	function handleEnter() {
		// console.log(userInput);
		// console.log(num1 + num2 === parseInt(userInput));
		if (parseInt(userInput) === num1 + num2) {
			console.log("correct");
			setTimeout(correctAnswer, 500);
		} else {
			console.log("false");
			setTimeout(incorrectAnswer, 500);
		}
	}

	function correctAnswer() {
		setUserResult("check");
		console.log("check");
	}

	function incorrectAnswer() {
		setUserResult("x");
		console.log("x");
	}

	return (
		<div className="game-container">
			<KeyPad handleClick={handleClick} handleEnter={handleEnter} />
			<KeyPadDisplay
				userInput={userInput}
				setUserInput={setUserInput}
				num1={num1}
				num2={num2}
			/>
		</div>
	);
}
