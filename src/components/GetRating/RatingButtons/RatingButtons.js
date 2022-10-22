import React from "react";
import "./RatingButtons.css";

class RatingButtons extends React.Component {
	constructor(props) {
		super(props);
		this.ratingChangeHandler = this.ratingChangeHandler.bind(this);
	}

	ratingChangeHandler(event) {
		const target = event.target;
		if (!event.target.closest(".rating-button")) return;
		const ratingMagnitude = target.getAttribute("ratingmagnitude");
		this.props.onRatingChange(ratingMagnitude);
	}
	getButtons(clickHandler) {
		const buttons = [];
		for (let buttonNum = 1; buttonNum <= this.props.maxRating; buttonNum++) {
			buttons.push(
				<button
					className={[
						"rating-button",
						+this.props.rating === buttonNum ? "rating-button__selected" : "",
					].join(" ")}
					type="button"
					onClick={clickHandler}
					key={buttonNum}
					ratingmagnitude={buttonNum}
				>
					{buttonNum}
				</button>
			);
		}

		return buttons;
	}
	render() {
		return (
			<div className="rating-buttons-wrapper" onClick={this.ratingChangeHandler}>
				{this.getButtons(this.props.buttonAmount)}
			</div>
		);
	}
}

export default RatingButtons;
