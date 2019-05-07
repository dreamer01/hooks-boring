import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";

import Layout from "../../components/layout";
import Romm from "../../assets/images/room.svg";
import Hangout from "../../assets/images/hangout.svg";
import useLocalStorage from "../../hooks/useLocalStorage";

const Conatiner = styled.div`
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
	const [indoor, setIndoor] = useLocalStorage("indoor", false);

	return (
		<div>
			<Layout>
				<Helmet>
					<title>Where we heading ?</title>
					<meta name="description" content="Where you are comfortable." />
				</Helmet>
				<Conatiner>
					<ActionGroup>
						<Link to="/what">
							<ActionImg
								onClick={() => setIndoor(true)}
								src={Romm}
								alt="At Home"
							/>
						</Link>
						<Action>At The Apartment</Action>
					</ActionGroup>
					<ActionGroup>
						<Link to="/what">
							<ActionImg
								onClick={() => setIndoor(false)}
								src={Hangout}
								alt="Hangout"
							/>
						</Link>
						<Action>No, Wanna Hangout</Action>
					</ActionGroup>
				</Conatiner>
			</Layout>
		</div>
	);
};
