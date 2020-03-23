import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { Layout, SEO } from "../../components";
import Room from "../../assets/images/room.svg";
import Hangout from "../../assets/images/hangout.svg";
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
	const [indoor, setIndoor] = useLocalStorage("indoor", true);

	return (
		<div>
			<Layout>
				<SEO
					title="Where we heading ?"
					description="Where you are comfortable."
					image={Hangout}
				/>
				<Container>
					<ActionGroup>
						<Link to="/what">
							<ActionImg
								onClick={() => setIndoor(true)}
								src={Room}
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
				</Container>
			</Layout>
		</div>
	);
};
