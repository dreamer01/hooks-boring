import React from "react";
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
	width: 100%;
	align-items: center;
	padding-top: 100px;
	padding-bottom: 100px;
	overflow-x: auto;
	::-webkit-scrollbar {
		display: none !important;
	}
	scroll-behavior: smooth;
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
	const handlePrev = event => {
		event.preventDefault();
		document.getElementById("carousel").scrollLeft -= 300;
	};

	const handleNext = event => {
		event.preventDefault();
		document.getElementById("carousel").scrollLeft += 300;
	};

	return (
		<Wrapper>
			<PrevIcon onClick={handlePrev} src={UpArrow} alt="prev" />
			<Container id="carousel" onKeyUp={handlePrev} onKeyDown={handleNext}>
				{children}
			</Container>
			<NextIcon onClick={handleNext} src={UpArrow} alt="next" />
		</Wrapper>
	);
}

Carousel.propTypes = {
	children: PropTypes.any,
};

export default Carousel;
