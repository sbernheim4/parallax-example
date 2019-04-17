import React, { Component } from "react";
import './home.scss';

const isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {

		};

		this.updateBackgroundImage = this.updateBackgroundImage.bind(this);
	}

	componentDidMount() {
		window.addEventListener('scroll', this.updateBackgroundImage);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.updateBackgroundImage);
	}

	updateBackgroundImage() {
		// Get the landing page element
		const element = document.querySelector(".top");

		// Must be between between 1 and -1 exclusive.
		// 0 yields no effect,
		// negative values scroll it up as the user scrolls down
		// positive values scroll it down as the user scrolls down
		const parallaxEffect = -.5;

		// Must be the same as css background-position-y value
		const offset = -60;

		// Update the background-position-y style property using the vertical scroll position
		// Only update when not on mobile device
		if (!isMobile.any()) {
			element.style.backgroundPositionY = `calc(${parallaxEffect * window.scrollY}px + ${offset}px)`;
		}
	  }

	render() {
		return (
			<section>
				<div class='top'>
					<h1>Make Coffee Great Again</h1>
				</div>

				<div class='middle'>
				</div>

				<div class='bottom'>
				</div>
			</section>
		);
	}
}

export default Home;
