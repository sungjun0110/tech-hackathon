import React from 'react'
import Card from './Card'
import './RewardModal.css'

const Backdrop = () => {
  return <div></div>
}

const ModalOverlay = (props) => {}

const RewardModal = () => {
  return (
    <Card className="card">
      <h2 className="congrats">Congratulations</h2>
      <p className="msg">You've earned a new barn animal!</p>
      <img src="" alt="Star Trophy"></img>
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
