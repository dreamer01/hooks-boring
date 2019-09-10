import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Helmet from "react-helmet";

import client from "../../utils/contentful";
import { Layout, Loader } from "../../components";

const Conatiner = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	width: 100%;
	align-items: center;
	justify-content: space-around;
`;

const FeatureImg = styled.img`
	width: 80%;
	height: 150px;
	border-radius: 5px;
	object-fit: cover;
	margin: 20px 0px;
`;

export default ({ data }) => {
	const [selected, setSelected] = useState(null);
	const activity = JSON.parse(window.localStorage.getItem("activity"));

	useEffect(() => {
		client
			.getEntry(activity.sys.id)
			.then(entry => {
				setSelected(entry);
			})
			.catch(error => console.log(error));
	}, [activity.sys.id]);

	return (
		<Layout>
			<Helmet>
				<title>{activity.fields.title}</title>
				<meta name="description" content="Where you are comfortable." />
			</Helmet>
			<Conatiner>
				{selected ? (
					<>
						<FeatureImg src={selected.fields.featureImg[0].fields.file.url} />
						<p>{selected.fields.description}</p>{" "}
					</>
				) : (
					<Loader />
				)}
			</Conatiner>
		</Layout>
	);
};
