import './GameContainer.css'
import { useState, useContext } from 'react'
import KeyPadDisplay from '../KeyPadDisplay/KeyPadDisplay'
import KeyPad from '../KeyPad/KeyPad'
import { SessionContext } from '../../pages/App/App'
import { useNavigate } from 'react-router-dom'
import RewardModal from '../RewardModal/RewardModal'
export default function GameContainer() {
  const navigate = useNavigate()
  const { setUserResult, setFarmFood, farmFood, winCondition } =
    useContext(SessionContext)
  const [userInput, setUserInput] = useState('')
  const [num1, setNum1] = useState(generateNums())
  const [num2, setNum2] = useState(generateNums())

  function generateNums() {
    return Math.floor(Math.random() * 10)
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
    // console.log(num1 + num2 === parseInt(userInput));
    if (parseInt(userInput) === num1 + num2) {
      console.log('correct')
      setUserResult('check')
      setTimeout(correctAnswer, 500)
    } else {
      console.log('false')
      setUserResult('x')
      setTimeout(incorrectAnswer, 500)
    }
  }

  function correctAnswer() {
    setFarmFood(farmFood + 10)
    console.log(farmFood)
    if (farmFood <= 90) {
      setNum1(generateNums())
      setNum2(generateNums())
      setTimeout(setUserResult(), 500)
      setUserInput('')
    } else {
      setFarmFood(0)
      setTimeout(setUserResult(), 500)
      setUserInput('')
    }
  }

  function incorrectAnswer() {
    setTimeout(setUserResult(), 500)
    console.log('x')
  }

  return (
    <div className="game-container">
      {winCondition ? (
        <RewardModal />
      ) : (
        <>
          <KeyPad handleClick={handleClick} handleEnter={handleEnter} />
          <KeyPadDisplay
            userInput={userInput}
            setUserInput={setUserInput}
            num1={num1}
            num2={num2}
          />
        </>
      )}
    </div>
  )
}
