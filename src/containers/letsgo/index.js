import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Helmet from "react-helmet";
import {
	TwitterShareButton,
	FacebookShareButton,
	WhatsappShareButton,
} from "react-share";

import client from "../../utils/contentful";
import { Colors } from "../../theme/styles";
import {
	ExternalLink,
	User,
	Twitter,
	Facebook,
	Whatsapp,
} from "../../utils/images";
import { Layout, Loader } from "../../components";

const Container = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	width: 100%;
	align-items: center;
	justify-content: space-around;
`;

export const Row = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	margin: 10px 0px;
	&.round {
		padding: 5px 10px;
		margin-right: 10px;
		margin-top: 5px;
		border: 2px solid ${Colors.content};
		border-radius: 50px;
		@media (max-width: 500px) {
			border: 1px solid ${Colors.content};
			font-size: 12px;
		}
	}
`;

const Details = styled.div`
	display: flex;
	width: 100%;
	@media (max-width: 800px) {
		flex-direction: column;
	}
`;

const Info = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
	margin-left: 50px;
	@media (max-width: 800px) {
		align-items: center;
		margin-left: 0px;
	}
`;

const FeatureImg = styled.img`
	height: 225px;
	border-radius: 2px;
	object-fit: contain;
`;

const Title = styled.h3`
	align-self: left;
	margin-top: 20px;
`;

export const LinkIcon = styled.img`
	height: 15px;
	margin-left: 10px;
`;

const ShareIcon = styled.img`
	height: 25px;
	margin-left: 15px;
	cursor: pointer;
	opacity: 0.8;
	&:hover {
		opacity: 1;
	}
`;

const Tag = styled.div`
	padding: 5px 10px;
	margin-right: 10px;
	margin-top: 5px;
	border: 2px solid ${Colors.content};
	border-radius: 50px;
	@media (max-width: 500px) {
		border: 1px solid ${Colors.content};
		padding: 5px;
		font-size: 12px;
	}
`;

const Letsgo = ({ data, history }) => {
	const [selected, setSelected] = useState(null);
	const activity = JSON.parse(window.localStorage.getItem("activity"));

	useEffect(() => {
		let activityId = activity && activity.sys.id;
		if (history.location.search) {
			activityId = history.location.search.split("=")[1];
		}
		client
			.getEntry(activityId)
			.then(entry => {
				setSelected(entry);
			})
			.catch(error => console.log(error));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [history.location.search]);

	const renderTags = tag => (
		<Tag key={tag}>
			<pre>{tag.toUpperCase()}</pre>
		</Tag>
	);

	return (
		<Layout>
			<Helmet>
				<title>{selected ? selected.fields.title : "Activity"}</title>
				<meta name="description" content="Where you are comfortable." />
			</Helmet>
			<Container>
				{selected ? (
					<>
						<Details>
							<FeatureImg src={selected.fields.featureImg[0].fields.file.url} />
							<Info>
								<Row>
									<Row className="round">
										<h3> Used By {selected.fields.usedBy}</h3>
										<LinkIcon size="small" src={User} alt="User" />
									</Row>
									{!!selected.fields.links && (
										<a
											target="_blank"
											rel="noopener noreferrer"
											href={selected.fields.links[0]}
										>
											<Row className="round">
												<h3 style={{ marginLeft: 10 }}>Try Now</h3>
												<LinkIcon
													size="small"
													src={ExternalLink}
													alt="Open Link"
												/>
											</Row>
										</a>
									)}
								</Row>
								<Row className="round">
									<h3>Spread Fun</h3>
									<TwitterShareButton
										url={`https://what2do.netlify.com/letsgo?ref=${selected.sys.id}`}
										title={`I will be busy with activity ${selected.fields.title}, find what you can do with your time at`}
										hashtags={selected.fields.tags}
									>
										<ShareIcon src={Twitter} alt="Tweet" />
									</TwitterShareButton>
									<FacebookShareButton
										url={`https://what2do.netlify.com/letsgo?ref=${selected.sys.id}`}
										quote={`I will be busy with activity ${selected.fields.title}, find what you can do with your time at https://what2do.netlify.com \n`}
										hashtags={selected.fields.tags}
									>
										<ShareIcon src={Facebook} alt="Tweet" />
									</FacebookShareButton>
									<WhatsappShareButton
										url={`https://what2do.netlify.com/letsgo?ref=${selected.sys.id}`}
										title={`I will be busy with activity ${selected.fields.title}, find what you can do with your time at`}
										separator=" 👉 "
									>
										<ShareIcon src={Whatsapp} alt="Tweet" />
									</WhatsappShareButton>
								</Row>
								<Row>{selected.fields.tags.map(renderTags)}</Row>
							</Info>
						</Details>
						<div>
							<Title>{selected.fields.title}</Title>
							<p>{selected.fields.description}</p>
						</div>
					</>
				) : (
					<Loader />
				)}
			</Container>
		</Layout>
	);
};

export default Letsgo;
