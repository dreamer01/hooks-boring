import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";

import client from "../../utils/contentful";
import useLocalStorage from "../../hooks/useLocalStorage";
import {
	Layout,
	Category as Activity,
	Loader,
	Carousel,
} from "../../components";

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
		const categoryId = category && category.sys.id;
		const isMultiplayer = multiplayer || false;
		const options = isMultiplayer
			? {
					"fields.category.sys.id": `${categoryId}`,
					content_type: "activity",
			  }
			: {
					"fields.multiplayer": `${isMultiplayer}`,
					"fields.category.sys.id": `${categoryId}`,
					content_type: "activity",
			  };

		client.getEntries(options).then(entries => setActivities(entries.items));
	}, [multiplayer, category]);

	return (
		<Layout>
			<Helmet>
				<title>{category ? category.fields.title : "Category"}</title>
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
