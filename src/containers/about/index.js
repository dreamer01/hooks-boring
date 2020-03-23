import React from "react";
import styled from "styled-components";

import { Layout, SEO } from "../../components";
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

export const Row = styled.div`
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	margin: 10px 0px;
`;

export default function About() {
	return (
		<Layout>
			<SEO
				title="What2Do"
				description="So here is what we deliver to you with our blazing fast suggestion web app What2Do."
			/>
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
					not just for sake of timepass. It helps you explore and discover new
					things to do with your time. The recommendation by What2Do varies from
					Book, Movies mobile app to board games and many more interesting
					activities around you.
				</Text>

				<Heading>About Creator ?</Heading>
				<Text>
					Myself Pushpendra Singh, I’m a Full Stack Developer based in
					Bengaluru, India. I have passion for intuitive web and mobile design.I
					love developing applications and solution which tend to solve
					problems. I am also big time sucker for design and illustration, when
					I am free I like to do some graphic design work. If I find an amazing
					color palette or font, I have to build an app or website using them,
					because of this I have many unfinished side projects.
				</Text>
				<Row>
					<strong>Reach me at</strong> &nbsp;
					<a target="blank" href="https://stud2design.tech">
						My Site
					</a>
					&nbsp;|&nbsp;
					<a target="blank" href="https://twitter.com/stud2design">
						Twitter
					</a>
					&nbsp;|&nbsp;
					<a target="blank" href="https://github.com/dreamer01">
						Github
					</a>
					&nbsp;|&nbsp;
					<a target="blank" href="https://linkedin.com/in/pushpendradream">
						LinkedIn
					</a>
				</Row>
			</Wrapper>
		</Layout>
	);
}
