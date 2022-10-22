import React from "react";
import "./AfterRating.css";
import ThankYouIllustration from "./thank-you.svg";

class AfterRating extends React.Component {
	render() {
		return (
			<article className="flex-wrapper">
				<div>
					<img src={ThankYouIllustration} alt="Thank you" width="162" height="108" />
				</div>
				<div className="rating-result">
					You selected {this.props.rating} out of {this.props.maxRating}
				</div>
				<div>
					<h1 className="heading">Thank you!</h1>
					<p className="thank-content">
						We appreciate you taking the time to give a rating. If you ever need more
						support, don't hesitate to get in touch!
					</p>
				</div>
			</article>
		);
	}
}
export default AfterRating;
