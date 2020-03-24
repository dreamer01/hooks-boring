import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { NotFundSvg, UpArrow } from "../../utils/images";
import { Row } from "../../containers/letsgo";
import { Layout, SEO } from "../index";

const ActionImg = styled.img`
	margin: auto;
	height: 300px;
	@media (max-width: 400px) {
		height: 200px;
	}
`;

const Action = styled.h2`
	margin-bottom: 50px;
	@media (max-width: 400px) {
		font-size: 16px;
	}
`;

const Icon = styled.img`
	height: 15px;
	margin-right: 5px;
	transform: rotate(-90deg);
	cursor: pointer;
	@media (max-width: 500px) {
		height: 10px;
	}
`;

function NotFound() {
	return (
		<Layout>
			<SEO title="Not Found" />
			<ActionImg src={NotFundSvg} alt="Not Found 404." />
			<Action>Sorry, nothing here for you.</Action>
			<Link to="/where">
				<Row className="round">
					<Icon size="small" src={UpArrow} alt="Open Link" />
					<h3 style={{ marginLeft: 10 }}>Back Home</h3>
				</Row>
			</Link>
		</Layout>
	);
}

export default NotFound;
