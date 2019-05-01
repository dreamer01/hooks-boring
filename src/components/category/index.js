import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
	text-align: center;
	width: 200px;
	height: 150px;
	border-radius: 10px;
	box-shadow: rgba(52, 152, 219, 0.4) 0px 20px 20px;
`;

const Cover = styled.img`
	position: relative;
	bottom: 300px;
	height: 150px;
	width: 150px;
	object-fit: cover;
	border-radius: 10px;
`;

const Clipped = styled.div`
	position: relative;
	bottom: 50px;
	height: 200px;
	width: 100%;
	background-color: #3768fa;
	clip-path: polygon(0 30%, 100% 00%, 100% 100%, 0% 100%);
	border-radius: 10px;
`;

const Title = styled.h3`
	position: relative;
	top: 120px;
	color: #fff;
`;

export default ({ src, title }) => {
	return (
		<Wrapper>
			<Clipped>
				<Title>{title}</Title>
			</Clipped>
			<Cover src={src} alt="Category" />
		</Wrapper>
	);
};
