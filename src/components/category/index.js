import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
	text-align: center;
	width: 200px;
	height: 250px;
	border-radius: 10px;
	box-shadow: rgba(52, 152, 219, 0.4) 0px 20px 20px;
	background-color: lime;
`;

const Cover = styled.img`
	height: 150px;
	width: 150px;
	object-fit: cover;
	border-radius: 10px;
`;

const Clipped = styled.div`
	background-color: cyan;
	height: 100%;
	width: 100%;
	// clip-path: polygon(0 40%, 100% 15%, 100% 100%, 0% 100%);
	border-radius: 10px;
`;

export default ({ src, title }) => {
	return (
		<Wrapper>
			<Cover src={src} alt="Category" />
			<h3>{title}</h3>
		</Wrapper>
	);
};
