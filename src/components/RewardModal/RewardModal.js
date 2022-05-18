import React from "react";
import Card from "../Card/Card";
import "./RewardModal.css";
const Backdrop = () => {
	return <div></div>;
};
const ModalOverlay = () => {};
const RewardModal = (props) => {
	return (
		<div>
			<div className="backdrop" />
			<Card className="card">
				<h2 className="congrats">Congratulations</h2>
				<p className="msg">You've earned a new barn animal!</p>

				<img
					className="cow_img"
					src="https://i.imgur.com/d7lY3rC.gif"
					alt="Cow Eating"
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
	);
};
export default RewardModal;
