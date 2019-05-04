import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";

import Layout from "../../components/layout";
import Activity from "../../components/category";
import UpArrow from "../../assets/icons/up-arrow.svg";
import DownArrow from "../../assets/icons/down-arrow.svg";
import { MultiplayerContext, CategoryContext, ActivityContext } from "../app";

var contentful = require("contentful");
const Conatiner = styled.div`
	flex: 1;
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	align-items: center;
	justify-content: space-around;
`;

const Icon = styled.img`
	height: ${props => (props.size === "small" ? "25px" : "25px")};
`;

export default ({ data }) => {
	const [activities, setActivities] = useState([]);
	const [multiplayer, setMultiplayer] = useContext(MultiplayerContext);
	const [category, setCategory] = useContext(CategoryContext);
	const [activity, setActivity] = useContext(ActivityContext);

	useEffect(() => {
		const client = contentful.createClient({
			space: "xsej5tvgomz6",
			accessToken:
				"2585b2432776f2801240a4257fce8d9c9584975557ec8ae312bc5c1acc0593d6",
		});
		console.log(category.fields.title);

		const options = multiplayer
			? {
					"fields.category.sys.id": `${category.sys.id}`,
					content_type: "activity",
			  }
			: {
					"fields.multiplayer": `${multiplayer}`,
					"fields.category.sys.id": `${category.sys.id}`,
					content_type: "activity",
			  };

		client.getEntries(options).then(entries => setActivities(entries.items));
	}, [multiplayer, category]);

	return (
		<Layout>
			<Helmet>
				<title>{category.fields.title}</title>
				<meta name="description" content="Where you are comfortable." />
				<noscript>
					To display activity list app will require Javascript.
				</noscript>
			</Helmet>
			<Link to="/what">
				<Icon src={UpArrow} />
			</Link>
			<Conatiner>
				{activities.map(activity => (
					<Link
						onClick={() => setActivity(activity)}
						key={activity.sys.id}
						to="/letsgo"
					>
						<Activity
							src={activity.fields.featureImg[0].fields.file.url}
							title={activity.fields.title}
						/>
					</Link>
				))}
			</Conatiner>
			<Icon src={DownArrow} />
		</Layout>
	);
};
