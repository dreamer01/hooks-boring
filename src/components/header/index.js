import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { Logo as logo } from "../../utils/images";

const Row = styled.div`
	display: flex;
	align-items: center;
`;

const Wrapper = styled(Row)`
	justify-content: space-between;
	margin: 15px 0px;
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
	font-size: 18px;
	font-weight: 600;
`;

export default function Header() {
	return (
		<Wrapper>
			<Link to="/">
				<Row>
					<Logo src={logo} alt="What2Do Logo" />
					<Title>What2Do</Title>
				</Row>
			</Link>
			<Link to="/about">
				<About>About</About>
			</Link>
		</Wrapper>
	);
}
