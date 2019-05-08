import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
	margin: 15px 0px;
	text-align: center;
`;

export default () => {
	return (
		<Wrapper>
			<p>
				Copyright &copy; 2019.{" "}
				<a href="https://www.twitter.com/stud2design">Pushpendra Singh</a>. All
				rights reserved.
			</p>
		</Wrapper>
	);
};
