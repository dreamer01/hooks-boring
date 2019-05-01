import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
	text-align: center;
`;

const Cover = styled.img`
	height: 100px;
`;

export default ({ src, title }) => {
	return (
		<Wrapper>
			<Cover src={src} />
			<h3>{title}</h3>
		</Wrapper>
	);
};
