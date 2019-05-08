import React from "react";
import styled from "styled-components";

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
			<ActionImg src={Thinking} alt="about" />
			<Wrapper>
				<Heading>What is What2Do ?</Heading>
				<Text>
					What2Do is a recommendation/suggestion web app where it helps you find
					something to do in your free time. We often sit idle and think now
					that I have time what I should do? W2D helps you answer that question.
					What2Do helps you find an activity of your interest by four step
					process. What2Do make sure of it that your free time is efficiently
					spent by you while having an interest in what you do. It helps you
					explore and discover new things to do with your time. The
					recommendation by What2Do varies from Book, Movies mobile app to board
					games and many more interesting activities around you.
				</Text>
			</Wrapper>
		</Layout>
	);
}
