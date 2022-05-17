import './KeyPadDisplay.css'
import { useState } from 'react';

export default function KeyPadDisplay({userInput, setUserInput}) {
    const [num1, setNum1] = useState(generateNums())
    const [num2, setNum2] = useState(generateNums())
    function generateNums() {
        return Math.floor(Math.random() * 10);
    }
    function handleChange(evt) {
        // console.log(evt)
        // console.log(evt.nativeEvent.inputType === "deleteContentBackward")
        // console.log('value: ',evt.target.value.slice(-1))
        if (evt.nativeEvent.inputType === "deleteContentBackward") {
            setUserInput(userInput.slice(0, userInput.length - 1));
        } else if(parseInt(evt.target.value.slice(-1)) || evt.target.value.slice(-1) === '0') {
            setUserInput(userInput.concat(evt.target.value.slice(-1)));
        }
    }

    return (
        <div className="display-container">
            <div>
                {num1} + {num2} = 
            </div>
            <input className='user-input' value={userInput} onChange={handleChange} ></input>
        </div>
    )
}