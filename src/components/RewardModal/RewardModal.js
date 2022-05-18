import React, { useState, useContext } from 'react'
import Card from '../Card/Card'
import { SessionContext } from '../../pages/App/App'
import './RewardModal.css'

const RewardModal = (props) => {
  const [farmView, setFarmView] = useState('B')

  const templateSwitch = () => {
    switch (farmView) {
      case 'A':
        return viewFarmTemplate
      case 'B':
        return rewardTemplate
    }
  }

  const viewFarmTemplate = (
    <div>
      <div className="backdrop" />
      <img src="images/bg.jpg" className="img" />
      <buton className="btn next_btn">Back</buton>
      <div className="view_2"></div>
    </div>
  )

  const rewardTemplate = (
    <div>
      <div className="backdrop" />
      <Card className="card">
        <h2 className="congrats">Nice additon skills</h2>
        <p className="msg">
          You fed the cow! The cow has been added to you farm
        </p>

        <img
          className="cow_img"
          src="https://i.imgur.com/d7lY3rC.gif"
          alt="Cow Eating"
        ></img>
        <div className="btn_container">
          <button
            onClick={() => setFarmView('A')}
            name="button"
            type="button"
            className="btn view_btn"
          >
            View Barn
          </button>
          <button
            // onClick={handleGameRestart}
            type="button"
            className="btn next_btn"
          >
            Next Level
          </button>
        </div>
      </Card>
    </div>
  )

  return <div>{templateSwitch()}</div>
}
export default RewardModal

//bring in setCondition through context
// setWinCodtion(false)
// setFarmFood(0)
