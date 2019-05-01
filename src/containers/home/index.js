import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Layout from "../../components/layout";
import DownArrow from "../../assets/icons/down-arrow.svg";
import AloneSvg from "../../assets/images/alone.svg";
import CompanySvg from "../../assets/images/company.svg";
import { MultiplayerContext } from "../app";

const Conatiner = styled.div`
	flex: 1;
	display: flex;
	width: 100%;
	align-items: center;
	justify-content: space-around;
`;
const Actions = styled.img`
	height: 200px;
	margin: 10px;
`;
const ActionGroup = styled.div`
	text-align: center;
`;
const Icon = styled.img`
	height: ${props => (props.size === "small" ? "25px" : "25px")};
`;

export default () => {
	const [multiplayer, setMultiplayer] = useContext(MultiplayerContext);

	return (
		<>
			<Layout>
				<Conatiner>
					<ActionGroup>
						<Link to="/where">
							<Actions onClick={() => setMultiplayer(false)} src={AloneSvg} />
						</Link>
						<h2>You All Alone</h2>
					</ActionGroup>
					<ActionGroup>
						<Link to="/where">
							<Actions onClick={() => setMultiplayer(true)} src={CompanySvg} />
						</Link>
						<h2>No, Got Company</h2>
					</ActionGroup>
				</Conatiner>
				<Icon src={DownArrow} />
			</Layout>
		</>
	);
};
