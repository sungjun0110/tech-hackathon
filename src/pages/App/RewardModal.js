import React from 'react'
import Card from './Card'
import './RewardModal.css'

<<<<<<< HEAD
const Backdrip = () => {
=======
const Backdrop = () => {
>>>>>>> ecce12aeabac3df75382bdebc934536ef970dd72
  return <div></div>
}

const ModalOverlay = () => {}

const RewardModal = (props) => {
  return (
<<<<<<< HEAD
    <Card className="card">
      <h2 className="congrats">Congratulations</h2>
      <p className="msg">You've earned a new barn animal!</p>
<<<<<<< HEAD
      <img
        className="star_img"
        src="https://i.imgur.com/rdpPvTR.png"
        alt="Star Trophy"
      ></img>
=======
      <img src="" alt="Star Trophy"></img>
>>>>>>> ecce12aeabac3df75382bdebc934536ef970dd72
      <div className="btn_container">
        <button name="button" type="button" className="btn view_btn">
          View Barn
        </button>
        <button type="button" className="btn next_btn">
          Next Level
        </button>
      </div>
    </Card>
=======
    <div>
      <div className="backdrop" />
      <Card className="card">
        <h2 className="congrats">Congratulations</h2>
        {/* <h2> {props.title} </h2> */}
        <p className="msg">You've earned a new barn animal!</p>
        {/* <p> {props.message} </p> */}
        <img
          className="star_img"
          src="https://i.imgur.com/SQjlB3J.png"
          alt="Star Trophy"
        ></img>
        <div className="btn_container">
          <button name="button" type="button" className="btn view_btn">
            View Barn
          </button>
          <button type="button" className="btn next_btn">
            Next Level
          </button>
        </div>
      </Card>
    </div>
>>>>>>> master
  )
}

export default RewardModal

// inside game logic file
// 1: Will need to manage reward State
//  const [reward, setReward] = useState()
//--------------------------------

// 2: manage state inside a game winning handler with conditional
//  if (gameWon)
//  setReward({
//    title: 'Congratulations'
//    message: 'You've earned a barn animal!'
// })
//--------------------------------

// 3: rendor the modal when winning state is true
// {reward && <RewardModal title={reward.title} message={reward.message}>}
//---------------------------------

// 4a: Have button restart the game
// 4b: make modal dismissible by clicking on back drop or exit button????
// a: clear winning state when button is clicked
//
