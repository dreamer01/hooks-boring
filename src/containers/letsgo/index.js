import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Helmet from "react-helmet";

import client from "../../utils/contentful";
import { Layout, Loader } from "../../components";
import ExternalLink from "../../assets/icons/external-link.svg";
import User from "../../assets/icons/user.svg";
import Twitter from "../../assets/icons/twitter.svg";

const Conatiner = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	width: 100%;
	align-items: center;
	justify-content: space-around;
`;

const Row = styled.div`
	display: flex;
	align-items: center;
`;

const Details = styled.div`
	display: flex;
`;

const Info = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
	width: 50%;
`;

const FeatureImg = styled.img`
	width: 40%;
	border-radius: 2px;
	object-fit: cover;
`;

const Title = styled.h3`
	align-self: left;
`;

const LinkIcon = styled.img`
	height: ${props => (props.size === "small" ? "15px" : "25px")};
	margin-left: 10px;
`;

const TagsGroup = styled.div`
	display: flex;
`;

const Tag = styled.div`
	padding: 5px 10px;
	margin-right: 10px;
	border: 2px solid teal;
	border-radius: 50px;
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

	const renderTags = tag => (
		<Tag key={tag}>
			<pre>{tag.toUpperCase()}</pre>
		</Tag>
	);

	return (
		<Layout>
			<Helmet>
				<title>{activity.fields.title}</title>
				<meta name="description" content="Where you are comfortable." />
			</Helmet>
			<Conatiner>
				{selected ? (
					<>
						<div>
							<Details>
								<div>
									<FeatureImg
										src={selected.fields.featureImg[0].fields.file.url}
									/>
								</div>
								<Info>
									<Row>
										<h3> Used By {selected.fields.usedBy}</h3>
										<LinkIcon size="small" src={User} alt="User" />
									</Row>
									<Row>
										<a
											target="_blank"
											rel="noopener noreferrer"
											href={selected.fields.links[0]}
										>
											<h3>Try Now</h3>
										</a>
										<LinkIcon size="small" src={ExternalLink} alt="Open Link" />
									</Row>
									<Row>
										<h3>Spread Fun</h3>
										<LinkIcon src={Twitter} alt="Tweet" />
									</Row>
									<TagsGroup>{selected.fields.tags.map(renderTags)}</TagsGroup>
								</Info>
							</Details>
							<Title>{selected.fields.title}</Title>
						</div>
						<p>{selected.fields.description}</p>
					</>
				) : (
					<Loader />
				)}
			</Conatiner>
		</Layout>
	);
};
