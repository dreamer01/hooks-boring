import React, { useEffect } from "react";
import styled from "styled-components";
import ImagePalette from "react-image-palette";

const Wrapper = styled.div`
	text-align: center;
`;

const Conatiner = styled.div`
	display: flex;
	flex-flow: row wrap;
	width: 200px;
	justify-content: center;
`;

const Cover = styled.img`
	position: relative;
	top: 100px;
	height: 150px;
	width: 150px;
	object-fit: cover;
	border-radius: 10px;
	z-index: 3;
`;

// const Clipped = styled.div`
// 	position: relative;
// 	bottom: 50px;
// 	height: 200px;
// 	width: 100%;
// 	background-color: #3768fa;
// 	clip-path: polygon(0 30%, 100% 00%, 100% 100%, 0% 100%);
// 	border-radius: 10px;
// `;

const Inner = styled.div`
	height: 120px;
	width: 100%;
	text-align: center;
	border-radius: 0 0 10px 10px;
	box-shadow: ${props => props.shadow} 0px 10px 20px;
`;

const Shape = styled.svg`
	margin: 0;
`;

const Title = styled.h3`
	color: #fff;
	padding-top: 50px;
	margin: 0;
`;

export default ({ src, title }) => {
	useEffect(() => {}, []);

	return (
		<Wrapper>
			<Cover src={src} alt="Category" />

			<ImagePalette crossOrigin={true} image={src}>
				{({ backgroundColor, color, alternativeColor }) => (
					<Conatiner>
						<Shape width="200" height="65">
							<g>
								<path
									d="M5 65 195 65 195 10z"
									stroke={color}
									strokeWidth="10"
									strokeLinecap="square"
									strokeLinejoin="round"
									fill={color}
								/>
							</g>
						</Shape>
						<Inner shadow={alternativeColor} style={{ backgroundColor: color }}>
							<Title style={{ color: backgroundColor }}>{title}</Title>
						</Inner>
					</Conatiner>
				)}
			</ImagePalette>
		</Wrapper>
	);
};
