import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import logo from "../../assets/icons/logo.svg";

const Row = styled.div`
	display: flex;
	align-items: center;
`;

const Wrapper = styled(Row)`
	justify-content: space-between;
	margin: 10px 0px;
`;

const Logo = styled.img`
	height: 50px;
	@media (max-width: 700px) {
		height: 35px;
	}
`;

const Title = styled.h1`
	margin-left: 10px;
	@media (max-width: 700px) {
		font-size: 24px;
	}
`;

const About = styled.p`
	justify-self: flex-end;
	font: 20px;
	font-weight: 600;
`;

export default () => {
	return (
		<Wrapper>
			<Link to="/">
				<Row>
					<Logo src={logo} />
					<Title>Kya Karen</Title>
				</Row>
			</Link>
			<About>About</About>
		</Wrapper>
	);
};
