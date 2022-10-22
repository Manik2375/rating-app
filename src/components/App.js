import React from "react";
import "./App.css";

import GetRating from "./GetRating/GetRating";
import AfterRating from "./AfterRating/AfterRating";

class App extends React.Component {
	MAX_RATING = 5;
	currentRating = null;

	constructor(props) {
		super(props);
		this.state = {
			gotRating: false,
			rating: null,
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleRatingChange = this.handleRatingChange.bind(this);
	}

	handleSubmit(event) {
		this.setState({
			gotRating: true,
		});
		event.preventDefault();
	}
	handleRatingChange(value) {
		this.setState({
			rating: value,
		});
	}
	render() {
		return (
			<div className="wrapper">
				{this.state.gotRating ? (
					<AfterRating rating={this.state.rating} maxRating={this.MAX_RATING} />
				) : (
					<GetRating
						onSubmit={this.handleSubmit}
						onRatingChange={this.handleRatingChange}
						rating={this.state.rating}
						maxRating={this.MAX_RATING}
					/>
				)}
			</div>
		);
	}
}

export default App;
