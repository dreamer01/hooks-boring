import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";

import Layout from "../../components/layout";
import Thinking from "../../assets/images/thinking.svg";

const Wrapper = styled.div`
	text-align: left;
`;

const ActionImg = styled.img`
	height: 200px;
	margin: 10px;
	@media (max-width: 400px) {
		height: 100px;
	}
`;

const Heading = styled.h3`
	margin-top: 25px;
`;

const Text = styled.p`
	margin: 10px auto;
`;

export default function About() {
	return (
		<Layout>
			<Helmet>
				<title>About</title>
				<meta
					name="description"
					content="So here is what we deliver to you with our blazing fast suggestion web app What2Do."
				/>
			</Helmet>
			<ActionImg src={Thinking} alt="about" />
			<Wrapper>
				<Heading>What is What2Do ?</Heading>
				<Text>
					What2Do is a recommendation/suggestion web app where it helps you find
					something to do in your free time. We often sit idle and think what I
					should do now that I have time. W2D helps you answer that question. It
					helps you find an activity of your interest by four QnA selection
					steps process. What2Do make sure of it that your free time is
					efficiently spent by you while doing something of your interest and
					just for sake of timepass. It helps you explore and discover new
					things to do with your time. The recommendation by What2Do varies from
					Book, Movies mobile app to board games and many more interesting
					activities around you.
				</Text>
			</Wrapper>
		</Layout>
	);
}
