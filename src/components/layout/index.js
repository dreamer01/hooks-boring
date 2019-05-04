import React from "react";
import styled from "styled-components";

import Header from "../header";
import Footer from "../footer";

const Wrapper = styled.div`
	display: flex;
	flex: 1;
	min-height: 100vh;
	flex-direction: column;
	max-width: 900px;
	margin: auto;
	@media (max-width: 1000px) {
		margin: 10px 25px;
	}
`;

const Content = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export default ({ children }) => {
	return (
		<Wrapper>
			<Header />
			<Content>{children}</Content>
			<Footer />
		</Wrapper>
	);
};
