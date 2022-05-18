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

const ModalOverlay = (props) => {}

const RewardModal = () => {
  return (
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
  )
}

export default RewardModal
