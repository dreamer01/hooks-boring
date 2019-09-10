import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";

import {
	Layout,
	Category as Activity,
	Loader,
	Carousel,
} from "../../components";
import useLocalStorage from "../../hooks/useLocalStorage";

var contentful = require("contentful");

const Content = styled.div`
	display: flex;
	flex: 1;
	width: 100%;
	justify-content: center;
	align-items: center;
`;

export default ({ data }) => {
	const [activities, setActivities] = useState(null);
	const [activity, setActivity] = useLocalStorage("activity", "");
	const multiplayer = JSON.parse(window.localStorage.getItem("multiplayer"));
	const category = JSON.parse(window.localStorage.getItem("category"));

	const renderActivities = activity => (
		<Link
			onClick={() => setActivity(activity)}
			key={activity.sys.id}
			to="/letsgo"
		>
			<Activity
				src={activity.fields.featureImg[0].fields.file.url}
				title={activity.fields.title}
				isCategory={false}
			/>
		</Link>
	);

	useEffect(() => {
		const client = contentful.createClient({
			space: "xsej5tvgomz6",
			accessToken:
				"2585b2432776f2801240a4257fce8d9c9584975557ec8ae312bc5c1acc0593d6",
		});

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
	}, [multiplayer, category.sys.id]);

	return (
		<Layout>
			<Helmet>
				<title>{category.fields.title}</title>
				<meta name="description" content="Where you are comfortable." />
				<noscript>
					To display activity list, the app will require Javascript.
				</noscript>
			</Helmet>
			<Content>
				{activities ? (
					<Carousel>{activities.map(renderActivities)}</Carousel>
				) : (
					<Loader />
				)}
			</Content>
		</Layout>
	);
};
