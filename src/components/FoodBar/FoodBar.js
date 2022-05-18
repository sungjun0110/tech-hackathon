import "./FoodBar.css";
import { useContext, useEffect } from "react";
import { SessionContext } from "../../pages/App/App";
export default function FoodBar() {
	const { farmFood } = useContext(SessionContext);

	useEffect(() => {
		console.log(farmFood, "farm food updated");
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
