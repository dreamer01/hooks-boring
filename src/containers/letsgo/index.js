import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Helmet from "react-helmet";
import {
	TwitterShareButton,
	FacebookShareButton,
	WhatsappShareButton,
} from "react-share";

import client from "../../utils/contentful";
import { Layout, Loader } from "../../components";
import ExternalLink from "../../assets/icons/external-link.svg";
import User from "../../assets/icons/user.svg";
import Twitter from "../../assets/icons/twitter.svg";
import Facebook from "../../assets/icons/facebook.svg";
import Whatsapp from "../../assets/icons/whatsapp.svg";

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
	margin: 10px 0px;
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
`;

const LinkIcon = styled.img`
	height: 15px;
	margin-left: 10px;
`;

const ShareIcon = styled.img`
	height: 25px;
	margin-left: 15px;
	cursor: pointer;
	&:hover {
		opacity: 0.8;
	}
`;

const TagsGroup = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	@media (max-width: 500px) {
		display: none;
	}
`;

const Tag = styled.div`
	padding: 5px 10px;
	margin-right: 10px;
	margin-top: 5px;
	border: 2px solid teal;
	border-radius: 50px;
	@media (max-width: 500px) {
		border: 1px solid teal;
		padding: 5px;
		font-size: 12px;
	}
`;

const Letsgo = ({ data, history }) => {
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
						<Details>
							<FeatureImg src={selected.fields.featureImg[0].fields.file.url} />
							<Info>
								<Row>
									<Row>
										<h3> Used By {selected.fields.usedBy}</h3>
										<LinkIcon size="small" src={User} alt="User" />
									</Row>
									{!!selected.fields.links && (
										<a
											target="_blank"
											rel="noopener noreferrer"
											href={selected.fields.links[0]}
										>
											<Row>
												<h3>Try Now</h3>
												<LinkIcon
													size="small"
													src={ExternalLink}
													alt="Open Link"
												/>
											</Row>
										</a>
									)}
								</Row>
								<Row>
									<h3>Spread Fun</h3>
									<TwitterShareButton
										url="https://what2do.netlify.com"
										title={`I will be busy with activity ${selected.fields.title}, find what you can do with your time at`}
										hashtags={selected.fields.tags}
									>
										<ShareIcon src={Twitter} alt="Tweet" />
									</TwitterShareButton>
									<FacebookShareButton
										url="https://what2do.netlify.com"
										quote={`I will be busy with activity ${selected.fields.title}, find what you can do with your time at https://what2do.netlify.com \n`}
										hashtags={selected.fields.tags}
									>
										<ShareIcon src={Facebook} alt="Tweet" />
									</FacebookShareButton>
									<WhatsappShareButton
										url="https://what2do.netlify.com"
										title={`I will be busy with activity ${selected.fields.title}, find what you can do with your time at`}
										separator=" 👉 "
									>
										<ShareIcon src={Whatsapp} alt="Tweet" />
									</WhatsappShareButton>
								</Row>
								<TagsGroup>{selected.fields.tags.map(renderTags)}</TagsGroup>
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
			</Conatiner>
		</Layout>
	);
};

export default Letsgo;
