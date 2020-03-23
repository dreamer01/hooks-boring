import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";

import client from "../../utils/contentful";
import useLocalStorage from "../../hooks/useLocalStorage";
import {
	Layout,
	Carousel,
	Category,
	Loader,
	CoronaWarning,
} from "../../components";

const Content = styled.div`
	display: flex;
	flex: 1;
	width: 100%;
	justify-content: center;
	align-items: center;
`;

export default ({ data }) => {
	const [categories, setCategories] = useState(null);
	const [category, setCategory] = useLocalStorage("category", "");
	const indoor = window.localStorage.getItem("indoor");

	useEffect(() => {
		const isIndoor = indoor || true;
		client
			.getEntries({
				"fields.indoor": `${isIndoor}`,
				content_type: "category",
			})
			.then(entries => {
				setCategories(entries.items);
			});
	}, [indoor]);

	const renderCategories = category => (
		<Link
			onClick={() => setCategory(category)}
			key={category.sys.id}
			to="/which"
		>
			<Category
				src={category.fields.featureImg.fields.file.url}
				title={category.fields.title}
			/>
		</Link>
	);

	return (
		<Layout>
			<Helmet>
				<title>What interest you ?</title>
				<meta
					name="description"
					content="What you are interested to do today."
				/>
			</Helmet>
			{indoor === "true" ? (
				<Content>
					{categories ? (
						<Carousel>{categories.map(renderCategories)}</Carousel>
					) : (
						<Loader />
					)}
				</Content>
			) : (
				<CoronaWarning />
			)}
		</Layout>
	);
};
