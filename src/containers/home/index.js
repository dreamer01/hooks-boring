import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";

import Layout from "../../components/layout";
import AloneSvg from "../../assets/images/alone.svg";
import CompanySvg from "../../assets/images/company.svg";
import useLocalStorage from "../../hooks/useLocalStorage";

const Container = styled.div`
	flex: 1;
	display: flex;
	width: 100%;
	align-items: center;
	justify-content: space-around;
	@media (max-width: 700px) {
		flex-direction: column;
	}
`;
const ActionImg = styled.img`
	height: 200px;
	margin: 10px;
	@media (max-width: 400px) {
		height: 100px;
	}
`;
const ActionGroup = styled.div`
	text-align: center;
`;

const Action = styled.h2`
	@media (max-width: 400px) {
		font-size: 16px;
	}
`;

export default () => {
	const [multiplayer, setMultiplayer] = useLocalStorage("multiplayer", false);

	return (
		<>
			<Layout>
				<Helmet>
					<title>What2Do</title>
					<meta
						name="description"
						content="Lets find you an activity to do and use that time of yours fruitfully."
					/>
				</Helmet>
				<Container>
					<ActionGroup>
						<Link to="/where">
							<ActionImg
								onClick={() => setMultiplayer(false)}
								src={AloneSvg}
								alt="Alone"
							/>
						</Link>
						<Action>You All Alone</Action>
					</ActionGroup>
					<ActionGroup>
						<Link to="/where">
							<ActionImg
								onClick={() => setMultiplayer(true)}
								src={CompanySvg}
								alt="With Friends"
							/>
						</Link>
						<Action>No, Got Company</Action>
					</ActionGroup>
				</Container>
			</Layout>
		</>
	);
};
