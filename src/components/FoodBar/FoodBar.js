import "./FoodBar.css";
import { useContext, useEffect } from "react";
import { SessionContext } from "../../pages/App/App";
import { useNavigate } from "react-router-dom";

export default function FoodBar() {
	const navigate = useNavigate();
	const { farmFood, setWinCondition } = useContext(SessionContext);

	useEffect(() => {
		console.log(farmFood, "farm food updated");
		if (farmFood === 100) {
			setWinCondition(true);
		}
	}, [farmFood]);
	return (
		<>
			<div className="food-bar-controller">
				<div className="food-bar-container">
					<div className="food-bar-background">
						<div
							className={"food-bar"}
							style={{ height: `${farmFood}%` }}
						></div>
					</div>
				</div>
				<h3 className="food">Food</h3>
			</div>
		</>
	);
}
