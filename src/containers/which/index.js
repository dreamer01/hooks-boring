import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Layout from "../../components/layout";
import UpArrow from "../../assets/icons/up-arrow.svg";
import DownArrow from "../../assets/icons/down-arrow.svg";

const Conatiner = styled.div`
	flex: 1;
	display: flex;
	width: 100%;
	align-items: center;
	justify-content: space-around;
`;

const Icon = styled.img`
	height: ${props => (props.size === "small" ? "25px" : "25px")};
`;

const Activity = styled.div``;

export default ({ data }) => {
	const [activities, setActivities] = useState([]);
	return (
		<Layout>
			<Link to="/what">
				<Icon src={UpArrow} />
			</Link>
			<Conatiner>
				{activities.map(activity => (
					<Link key={activity.id} to="/letsgo">
						<Activity
							src={activity.featureImg[0].fluid.src}
							title={activity.title}
						/>
					</Link>
				))}
			</Conatiner>
			<Icon src={DownArrow} />
		</Layout>
	);
};
