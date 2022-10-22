import React from "react";
import icon from "./icon-star.svg";
import "./GetRating.css";
import RatingButtons from "./RatingButtons/RatingButtons";
import SubmitButton from "./SubmitButton/SubmitButton";

class GetRating extends React.Component {
	constructor(props) {
		super(props);
		this.submitHandler = this.submitHandler.bind(this);
	}
	submitHandler(event) {
		if (this.props.rating) this.props.onSubmit(event) 
		else event.preventDefault()
	}
	render() {
		return (
			<article>
				<div className="icon">
					<img src={icon} alt="Just a star" width="17" height="16" />
				</div>
				<h1>How did we do?</h1>
				<p>
					Please let us know how we did with your support request. All feedback is
					appreciated to help us improve our offerings!
				</p>
				<form onSubmit={this.submitHandler}>
					<RatingButtons
						onRatingChange={this.props.onRatingChange}
						rating={this.props.rating}
						maxRating={this.props.maxRating}
					/>
					<SubmitButton />
				</form>
			</article>
		);
	}
}
export default GetRating;
