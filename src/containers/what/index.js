import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useLazyQuery, gql } from "@apollo/client";

import useLocalStorage from "../../hooks/useLocalStorage";
import {
	Layout,
	Carousel,
	Category,
	Loader,
	CoronaWarning,
	SEO,
} from "../../components";

const GET_CATEGORIES = gql`
	query getCategories($indoor: Boolean!) {
		categoryCollection(where: { indoor: $indoor }) {
			items {
				sys {
					id
				}
				title
				featureImg {
					url
				}
			}
		}
	}
`;

const Content = styled.div`
	display: flex;
	flex: 1;
	width: 100%;
	justify-content: center;
	align-items: center;
`;

export default () => {
	const [loading, setLoading] = useState(true);
	const [category, setCategory] = useLocalStorage("category", "");
	const [indoor] = useLocalStorage("indoor", true);

	const [fetchCategories, { data }] = useLazyQuery(GET_CATEGORIES);

	useEffect(() => {
		if (!indoor) setLoading(false);
		else fetchCategories({ variables: { indoor } });
	}, [fetchCategories, indoor]);

	useEffect(() => {
		if (data) setLoading(false);
	}, [data]);

	const renderCategories = category => (
		<Link
			onClick={() => setCategory(category)}
			key={category.sys.id}
			to="/which"
		>
			<Category src={category.featureImg.url} title={category.title} />
		</Link>
	);

	return (
		<Layout>
			<SEO
				title="What interest you ?"
				description="What you are interested to do today."
				image={data && data.categoryCollection.items[0].featureImg.url}
			/>

			{indoor ? (
				<Content>
					{loading ? (
						<Loader />
					) : (
						<Carousel>
							{data.categoryCollection.items.map(renderCategories)}
						</Carousel>
					)}
				</Content>
			) : (
				<CoronaWarning />
			)}
		</Layout>
	);
};
