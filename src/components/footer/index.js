import React from "react";
import styled from "styled-components";
import ReactGA from "react-ga";

const Wrapper = styled.div`
	margin: 15px 0px;
	text-align: center;
`;

export default function Footer() {
	return (
		<Wrapper>
			<p>
				Copyright &copy; 2020 - present &nbsp;
				<ReactGA.OutboundLink
					eventLabel="twitter-profile-visit"
					to="https://www.twitter.com/stud2design"
					target="_blank"
				>
					Pushpendra Singh
				</ReactGA.OutboundLink>
				. All rights reserved.
			</p>
		</Wrapper>
	);
}
