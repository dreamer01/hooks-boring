import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import UpArrow from "../../assets/icons/up-arrow.svg";

const Wrapper = styled.div`
	display: flex;
	width: 100%;
	align-items: center;
`;

const Container = styled.div`
	display: flex;
	margin: auto;
	padding-top: 100px;
	padding-bottom: 100px;
	overflow-x: auto;
	scroll-behavior: smooth;
	::-webkit-scrollbar {
		display: none !important;
	}
`;

const PrevIcon = styled.img`
	height: ${props => (props.size === "small" ? "25px" : "25px")};
	transform: rotate(-90deg);
	@media (max-width: 500px) {
		display: none;
	}
`;

const NextIcon = styled.img`
	height: ${props => (props.size === "small" ? "25px" : "25px")};
	transform: rotate(90deg);
	@media (max-width: 500px) {
		display: none;
	}
`;

function Carousel({ children, ...props }) {
	const [showControls, setShowControls] = useState(true);

	useEffect(() => {
		const showControls =
			document.getElementById("carousel").scrollWidth >
			document.getElementById("carousel-wrapper").clientWidth;
		setShowControls(showControls);
	}, [showControls]);

	const handlePrev = event => {
		event.preventDefault();
		document.getElementById("carousel").scrollLeft -= 300;
	};

	const handleNext = event => {
		event.preventDefault();
		document.getElementById("carousel").scrollLeft += 300;
	};

	return (
		<Wrapper id="carousel-wrapper">
			{showControls && (
				<PrevIcon onClick={handlePrev} src={UpArrow} alt="prev" />
			)}
			<Container id="carousel" onKeyUp={handlePrev} onKeyDown={handleNext}>
				{children}
			</Container>
			{showControls && (
				<NextIcon onClick={handleNext} src={UpArrow} alt="next" />
			)}
		</Wrapper>
	);
}

Carousel.propTypes = {
	children: PropTypes.any,
};

export default Carousel;
