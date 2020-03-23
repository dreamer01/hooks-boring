import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { UpArrow } from "../../utils/images";

const Wrapper = styled.div`
	display: flex;
	width: 100%;
	align-items: center;
`;

const Container = styled.div`
	display: flex;
	margin: auto;
	/* padding-top: 100px; */
	padding-bottom: 100px;
	overflow-x: auto;
	scroll-behavior: smooth;
	::-webkit-scrollbar {
		display: none !important;
	}
`;

const Icon = styled.img`
	height: 25px;
	&.left {
		transform: rotate(-90deg);
	}
	&.right {
		transform: rotate(90deg);
	}
	cursor: pointer;
`;

const IconBox = styled.div`
	height: 450px;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	width: 80px;
	&.right {
		background-image: linear-gradient(
			to right,
			rgba(238, 238, 238, 0),
			#fdf9f8 20px
		);
		right: 20px;
	}
	&.left {
		background-image: linear-gradient(
			to left,
			rgba(238, 238, 238, 0),
			#fdf9f8 20px
		);
		left: 20px;
	}
	z-index: 10;
	@media (max-width: 480px) {
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
		document.getElementById("carousel").scrollLeft -= 400;
	};

	const handleNext = event => {
		event.preventDefault();
		document.getElementById("carousel").scrollLeft += 400;
	};

	return (
		<Wrapper id="carousel-wrapper">
			{showControls && (
				<IconBox className="left">
					<Icon
						className="left"
						onClick={handlePrev}
						src={UpArrow}
						alt="prev"
					/>
				</IconBox>
			)}
			<Container id="carousel" onKeyUp={handlePrev} onKeyDown={handleNext}>
				{children}
			</Container>
			{showControls && (
				<IconBox className="right">
					<Icon
						className="right"
						onClick={handleNext}
						src={UpArrow}
						alt="next"
					/>
				</IconBox>
			)}
		</Wrapper>
	);
}

Carousel.propTypes = {
	children: PropTypes.any,
};

export default Carousel;
