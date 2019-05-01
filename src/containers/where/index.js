import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Layout from "../../components/layout";
import UpArrow from "../../assets/icons/up-arrow.svg";
import DownArrow from "../../assets/icons/down-arrow.svg";
import Romm from "../../assets/images/room.svg";
import Hangout from "../../assets/images/hangout.svg";
import { IndoorContext } from "../app";

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
	const [indoor, setIndoor] = useContext(IndoorContext);

	return (
		<div>
			<Layout>
				<Link to="/">
					<Icon src={UpArrow} />
				</Link>
				<Conatiner>
					<ActionGroup>
						<Link to="/what">
							<Actions onClick={() => setIndoor(true)} src={Romm} />
						</Link>
						<h2>At The Apartment</h2>
					</ActionGroup>
					<ActionGroup>
						<Link to="/what">
							<Actions onClick={() => setIndoor(false)} src={Hangout} />
						</Link>
						<h2>No, Wanna Hangout</h2>
					</ActionGroup>
				</Conatiner>
				<Icon src={DownArrow} />
			</Layout>
		</div>
	);
};
