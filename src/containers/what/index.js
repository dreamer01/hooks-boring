import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Layout from "../../components/layout";
import Category from "../../components/category";
import UpArrow from "../../assets/icons/up-arrow.svg";
import DownArrow from "../../assets/icons/down-arrow.svg";

var contentful = require("contentful");
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

export default ({ data }) => {
	let [categories, setCategories] = useState([]);

	useEffect(() => {
		const client = contentful.createClient({
			space: "xsej5tvgomz6",
			accessToken:
				"2585b2432776f2801240a4257fce8d9c9584975557ec8ae312bc5c1acc0593d6",
		});

		client
			.getEntries({
				content_type: "category",
			})
			.then(function(entries) {
				console.log(entries.items[0].fields.featureImg.fields);
				setCategories(entries.items);
			});
	}, []);

	return (
		<Layout>
			<Link to="/where">
				<Icon src={UpArrow} />
			</Link>
			<Conatiner>
				{categories &&
					categories.map(category => (
						<Link key={category.sys.id} to="/which">
							<Category
								src={category.fields.featureImg.fields.file.url}
								title={category.fields.title}
							/>
						</Link>
					))}
			</Conatiner>
			<Icon src={DownArrow} />
		</Layout>
	);
};
