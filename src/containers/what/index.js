import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";

import { Layout, Carousel, Category, Loader } from "../../components";
import useLocalStorage from "../../hooks/useLocalStorage";

var contentful = require("contentful");

const Content = styled.div`
	display: flex;
	flex: 1;
`;

export default ({ data }) => {
	const [categories, setCategories] = useState(null);
	const [category, setCategory] = useLocalStorage("category", "");
	const indoor = window.localStorage.getItem("indoor");

	useEffect(() => {
		const client = contentful.createClient({
			space: "xsej5tvgomz6",
			accessToken:
				"2585b2432776f2801240a4257fce8d9c9584975557ec8ae312bc5c1acc0593d6",
		});
		client
			.getEntries({
				"fields.indoor": `${indoor}`,
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
			<Content>
				<Carousel>
					{categories ? categories.map(renderCategories) : <Loader />}
				</Carousel>
			</Content>
		</Layout>
	);
};
