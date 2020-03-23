import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import ImagePalette from "react-image-palette";

const Wrapper = styled.div`
	text-align: center;
	height: 250px;
	margin: 20px;
	@media (max-width: 480px) {
		height: 250px;
	}
	@media (max-width: 400px) {
		height: 200px;
	}
`;

const Container = styled.div`
	display: flex;
	flex-flow: row wrap;
	width: 250px;
	justify-content: center;
	position: relative;
	bottom: 100px;
	@media (max-width: 480px) {
		width: 250px;
	}
	@media (max-width: 400px) {
		width: 200px;
	}
`;

const CoverView = styled.div`
	height: 200px;
	width: 200px;
	margin: auto;
	border-radius: 5px;
	z-index: 1;
	position: relative;
	overflow: hidden;
	top: 20px;
	@media (max-width: 480px) {
		height: 200px;
		width: 200px;
	}
	@media (max-width: 400px) {
		height: 150px;
		width: 150px;
	}
`;

const Cover = styled.img`
	width: 100%;
	height: 100%;
	object-fit: ${props => (props.isCategory ? "conatin" : "cover")};
`;

const Inner = styled.div`
	height: 150px;
	width: 100%;
	text-align: center;
	border-radius: 0 0 10px 10px;
	box-shadow: ${props => props.shadow} 0px 30px 50px -20px;
	@media (max-width: 480px) {
		height: 150px;
	}
	@media (max-width: 400px) {
		height: 125px;
	}
`;

const Shape = styled.svg`
	margin: 0;
	/* width: 200px;
	@media (max-width: 480px) {
		width: 250px;
	}
	@media (max-width: 400px) {
		width: 200px;
	} */
`;

const Title = styled.h3`
	color: #fff;
	padding-top: 65px;
	margin: 0;
`;

const Card = ({ src, title, isCategory }) => {
	useEffect(() => {}, []);

	return (
		<Wrapper>
			<CoverView>
				<Cover isCategory={isCategory} src={src} alt="Category" />
			</CoverView>

			<ImagePalette crossOrigin={true} image={src}>
				{({ backgroundColor, color, alternativeColor }) => (
					<Container>
						<Shape height="65">
							<g>
								<path
									d="M0 65 250 65 250 0z"
									stroke={color}
									strokeWidth="1"
									strokeLinecap="square"
									strokeLinejoin="round"
									fill={color}
								/>
							</g>
						</Shape>
						<Inner shadow={alternativeColor} style={{ backgroundColor: color }}>
							<Title style={{ color: backgroundColor }}>{title}</Title>
						</Inner>
					</Container>
				)}
			</ImagePalette>
		</Wrapper>
	);
};

Card.propTypes = {
	src: PropTypes.string,
	title: PropTypes.string,
	isCategory: PropTypes.bool,
};

Card.defaultProps = {
	src: "",
	title: "",
	isCategory: true,
};

export default Card;
