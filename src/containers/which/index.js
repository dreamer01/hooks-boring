import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import client from "../../utils/contentful";
import useLocalStorage from "../../hooks/useLocalStorage";
import {
	Layout,
	Category as Activity,
	Loader,
	Carousel,
	SEO,
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
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Layout>
			<SEO
				title={category ? category.fields.title : "Category"}
				description="What you will start with now that we are here ?"
				image={category && category.fields.featureImg.fields.file.url}
			/>
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
