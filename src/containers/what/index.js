import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";

import Layout from "../../components/layout";
import Category from "../../components/category";
import useLocalStorage from "../../hooks/useLocalStorage";

var contentful = require("contentful");
const Conatiner = styled.div`
	flex: 1;
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	align-items: center;
	justify-content: space-around;
`;

export default ({ data }) => {
	let [categories, setCategories] = useState([]);
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

	return (
		<Layout>
			<Helmet>
				<title>What interest you ?</title>
				<meta
					name="description"
					content="What you are interested to do today."
				/>
			</Helmet>

			<Conatiner>
				{categories &&
					categories.map(category => (
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
					))}
			</Conatiner>
		</Layout>
	);
};
