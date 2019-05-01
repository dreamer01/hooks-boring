import React, { useState } from "react";
import styled from "styled-components";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import Icon from "../components/icon";
import UpArrow from "../../static/icons/up-arrow.svg";

const Conatiner = styled.div`
	flex: 1;
	display: flex;
	width: 100%;
	align-items: center;
	justify-content: space-around;
`;

const FeatureImg = styled.img`
	height: 150px;
`;

export default ({ data }) => {
	const [activity, setActivity] = useState([]);
	return (
		<Layout>
			<Link to="/what">
				<Icon src={UpArrow} />
			</Link>
			<Conatiner>
				<FeatureImg src={activity.featureImg[0].fluid.src} />
				<p>{activity.description.description}</p>
			</Conatiner>
		</Layout>
	);
};
